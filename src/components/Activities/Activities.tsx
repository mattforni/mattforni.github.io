import React, { useEffect, useState, useCallback } from 'react';
import moment from 'moment';
import './Activities.scss';

import github from "../../http/gitHubClient";

const ACTIVITY_TYPE_GITHUB = 'GitHub';

interface Actor {
  avatar_url: string;
  login: string;
}

interface Repo {
  url: string;
  name: string;
}

interface GithubEvent {
  id: number;
  actor: Actor;
  created_at: string;
  repo: Repo;
  type: string;
}

interface ActivityDayProps {
  date: string;
  activities: GithubActivityProps[];
}

interface GithubActivityProps {
  activityType: string;
  actor: Actor;
  date: moment.Moment;
  repo: Repo;
  type: string;
}

interface ActivityDayData {
  date: string;
  activities: GithubActivityProps[];
}

const ActivityDay: React.FC<ActivityDayProps> = ({ date, activities }) => {
  return (
    <div className='ActivityDay'>
      <div className='ActivityDayDate'>
        {date}
      </div>
      <div className='ActivityDayActivities'>
        {activities.map((activity, index) => (
          <GithubActivity
            key={`${activity.activityType}-${index}`}
            {...activity}
          />
        ))}
      </div>
    </div>
  );
};

const GithubActivity: React.FC<GithubActivityProps> = ({ actor, repo, type }) => {
  return (
    <div className='GithubActivity'>
      <div className='Actor'>
        <img src={actor.avatar_url} alt={actor.login+'-avatar'}/>
        <div className='ActorLogin'>
          {actor.login}
        </div>
      </div>
      <div className='EventType'>
        {type}
      </div>
      <div className="Repository">
        <a href={repo.url} target='_blank' rel='noreferrer'>
          {repo.name}
        </a>
      </div>
    </div>
  );
};

const Activities: React.FC = () => {
  // Create state for the high-level representation of activities as they related to days
  const [activityDays, setActivityDays] = useState<ActivityDayData[]>([]);

  // Create state for the types of activities that can be displayed
  const [githubActivities, setGithubActivities] = useState<GithubActivityProps[] | null>(null);
  const [githubSelected, setGithubSelected] = useState<boolean>(true);

  /**
   * Adds a list of activity components to the list of days
   *
   * @param activities The list of activity components to add
   */
  const addActivities = useCallback((activities: GithubActivityProps[]) => {
    setActivityDays(prevActivityDays => {
      const activityMap = new Map<string, GithubActivityProps[]>();

      // Group activities by date
      activities.forEach(activity => {
        const date = activity.date.format('YYYY-MM-DD');
        if (!activityMap.has(date)) {
          activityMap.set(date, []);
        }
        activityMap.get(date)!.push(activity);
      });

      // Convert to array and sort by date
      const newActivityDays: ActivityDayData[] = Array.from(activityMap.entries())
        .map(([date, activities]) => ({ date, activities }))
        .sort((a, b) => {
          if (a.date === b.date) return 0;
          return a.date > b.date ? -1 : 1;
        });

      return newActivityDays;
    });
  }, []);

  // Fetch all public events from Github on load
  useEffect(() => {
    github.getPublicEvents()
      .then((response: { data: GithubEvent[] }) => {
        // Map each event to a GithubActivity component, then add the components to the activities
        const githubActivities = response.data.map((event: GithubEvent) => ({
          activityType: ACTIVITY_TYPE_GITHUB,
          actor: event.actor,
          date: moment.utc(event.created_at, "YYYY-MM-DDThh:mm:ssZ"),
          repo: event.repo,
          type: event.type
        }));

        // Add the github activities to list of activity days
        addActivities(githubActivities);
        // Set the list of github activities to indicate they have loaded
        setGithubActivities(githubActivities);
      });
  }, [addActivities]);

  /**
   * Returns whether the component is loading activities
   *
   * @returns {boolean} Whether the component is loading activities
   */
  const isLoading = (): boolean => {
    return githubActivities === null;
  };

  /**
   * Removes all activity components of the specified type from the list of days
   *
   * @param activityType The type of activity components to remove
   */
  const removeActivities = (activityType: string): void => {
    setActivityDays(prevActivityDays => {
      return prevActivityDays.map(day => ({
        ...day,
        activities: day.activities.filter(activity => activity.activityType !== activityType)
      })).filter(day => day.activities.length > 0);
    });
  };

  const handleGithubSelectChange = (): void => {
    const willBeSelected = !githubSelected;
    if (willBeSelected && githubActivities) {
      addActivities(githubActivities);
    } else {
      removeActivities(ACTIVITY_TYPE_GITHUB);
    }
    setGithubSelected(willBeSelected);
  };

  return (
    <div className='Activities'>
      <div className='ActivitiesHeader'>
        These are a few of the things I do with my time when not working on Gremlin.
      </div>

      <div className='ActivitiesSelect'>
        <div className='ActivitiesSelectCheckbox'>
          <input type='checkbox' id='githubCheckbox' checked={githubSelected} onChange={handleGithubSelectChange}/>
          <label htmlFor='githubCheckbox'>Github</label>
        </div>
      </div>

      <div className="ActivitiesList">
        {isLoading() &&
          <div className='Loading'>
            Loading ...
          </div>
        }
        {!isLoading() && activityDays.map(day => (
          <ActivityDay
            key={day.date}
            date={day.date}
            activities={day.activities}
          />
        ))}
      </div>
    </div>
  );
};

export default Activities;
