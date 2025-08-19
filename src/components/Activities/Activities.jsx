import './Activities.scss';

import github from "../../http/gitHubClient";
import { useEffect, useState, useCallback } from 'react';
import moment from 'moment';

const ACTIVITY_TYPE_GITHUB = 'GitHub';

const Activities = () => {
  // Create state for the high-level representation of activities as they related to days
  const [activityDays, setActivityDays] = useState([])

  // Create state for the types of activities that can be displayed
  const [githubActivities, setGithubActivities] = useState(null);
  const [githubSelected, setGithubSelected] = useState(true);

  /**
   * Adds a list of activity components to the list of days
   *
   * @param activities The list of activity components to add
   */
  const addActivities = useCallback((activities) => {
    setActivityDays(prevActivityDays => {
      return Object.values(
        activities.reduce((activityMap, activity) => {
          const date = activity.props.date.format('YYYY-MM-DD');
          if (!activityMap.hasOwnProperty(date)) {
            activityMap[date] = <ActivityDay date={date} activities={[]}/>;
          }
          activityMap[date].props.activities.push(activity)
          return activityMap
        }, prevActivityDays)
      ).sort((activity1, activity2) => {
        if (activity1.props.date === activity2.props.date) { return 0; }
        if (activity1.props.date > activity2.props.date) { return -1; }
        if (activity1.props.date < activity2.props.date) { return 1; }
        return 0; // Add explicit return for all code paths
      })
    })
  }, [])

  // Fetch all public events from Github on load
  useEffect(() => {
    github.getPublicEvents()
      .then((response) => {
        // Map each event to a GithubActivity component, then add the components to the activities
        const githubActivities = response.data.map((event) => {
          return <GithubActivity key={'GithubEvent-'+event.id}
                                 activityType={ACTIVITY_TYPE_GITHUB}
                                 actor={event.actor}
                                 date={moment.utc(event.created_at, "YYYY-MM-DDThh:mm:ssZ")}
                                 repo={event.repo}
                                 type={event.type}/>
        })

        // Add the github activities to list of activity days
        addActivities(githubActivities)
        // Set the list of github activities to indicate they have loaded
        setGithubActivities(githubActivities);
      })
  }, [addActivities]);

  /**
   * Returns whether the component is loading activities
   *
   * @returns {boolean} Whether the component is loading activities
   */
  const isLoading = () => {
    return githubActivities == null
  }

  /**
   * Removes all activity components of the specified type from the list of days
   *
   * @param activities The the of activity components to remove
   */
  const removeActivities = (activityType) => {
    const updatedActivityDays = [];
    activityDays.forEach((activityDay) => {
      const updatedActivities = activityDay.props.activities.filter((activity) => {
        return activity.props.activityType !== activityType
      });
      if (updatedActivities.length > 0) {
        updatedActivityDays.push(
          <ActivityDay date={activityDay.props.date} activities={activityDay.props.activities}/>
        )
      }
    })
    setActivityDays(updatedActivityDays)
  }

  const handleGithubSelectChange = () => {
    const willBeSelected = !githubSelected
    if (willBeSelected) {
      addActivities(githubActivities)
    } else {
      removeActivities(ACTIVITY_TYPE_GITHUB)
    }
    setGithubSelected(willBeSelected)
  }

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
        {!isLoading() && activityDays}
      </div>
    </div>
  )
}

const ActivityDay = (props) => {
  const { date, activities } = props;

  return (
    <div className='ActivityDay'>
      <div className='ActivityDayDate'>
        {date}
      </div>
      <div className='ActivityDayActivities'>
        {activities}
      </div>
    </div>
  )
}

const GithubActivity = (props) => {
  // Destructure actor, repo, and type from props
  const { actor, repo, type } = props;

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
  )
}

export default Activities;