import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, User, MapPin, GraduationCap, Briefcase, Heart, ExternalLink } from 'lucide-react';
import './Terminal.scss';

class Location {
  constructor(
    public city: string,
    public state: string,
    public country: string,
  ) {
    this.city = city;
    this.state = state;
    this.country = country;
  }

  public toString() {
    return `${this.city}, ${this.state}, ${this.country}`;
  }
}

const Terminal: React.FC = () => {
  const [displayText, setDisplayText] = useState<string>('');
  const [showAbout, setShowAbout] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const command: string = 'whoami';
  const location: Location = new Location('Denver', 'CO', 'USA');

  // Create the about section with proper links
  const AboutSection: React.FC = () => (
    <div className="AboutSection">
      <div className="AboutHeader">
        <User size={16} className="AboutIcon" />
        <span className="AboutLabel">Name:</span> Matthew Fornaciari (Forni)
      </div>
      <div className="AboutHeader">
        <MapPin size={16} className="AboutIcon" />
        <span className="AboutLabel">Location:</span> {location.toString()}
      </div>
      <div className="AboutHeader">
        <GraduationCap size={16} className="AboutIcon" />
        <span className="AboutLabel">Background:</span> Applied Mathematics & Computer Science
      </div>
      <div className="AboutHeader">
        <Briefcase size={16} className="AboutIcon" />
        <span className="AboutLabel">Experience:</span> Amazon, Salesforce, Gremlin (Founder & CTO)
      </div>
      <div className="AboutHeader">
        <Heart size={16} className="AboutIcon" />
        <span className="AboutLabel">Interests:</span> Outdoors, Technology, Running, Swimming, Cooking
      </div>
      <div className="AboutDescription">
        <p>
          Matthew Fornaciari is equal parts outdoorsman and technologist. He is a California native who studied Applied Mathematics & Computer Science at Brown University in Providence, RI, and has lived and worked in Seattle, San Francisco, and Hobart, AUS before settling in Denver where he currently resides.
        </p>
        <br/>
        <p>
          His career has been focused on helping technology companies build more reliable computer systems, which he has done at <a href="https://amazon.com" target="_blank" rel="noreferrer" className="LinkAmazon">Amazon <ExternalLink size={12} /></a>, <a href="https://salesforce.com" target="_blank" rel="noreferrer" className="LinkSalesforce">Salesforce <ExternalLink size={12} /></a>, and an array of Fortune 500 companies via <a href="https://gremlin.com" target="_blank" rel="noreferrer" className="LinkGremlin">Gremlin <ExternalLink size={12} /></a> where he served as Founder and CTO starting in January 2016. Matt <a href="https://medium.com/@callmeforni/goodbye-gremlin-hello-world-b119abd3d370" target="_blank" rel="noreferrer">left Gremlin <ExternalLink size={12} /></a> at the end of February 2022 to take some time to rest and digest that experience while running, swimming, cooking, and generally exploring.
        </p>
      </div>
    </div>
  );

  useEffect(() => {
    // Animate the command typing
    if (currentIndex < command.length) {
      const timer: NodeJS.Timeout = setTimeout(() => {
        setDisplayText(command.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else if (!showAbout) {
      // Wait a bit after command is complete, then show about section
      const timer: NodeJS.Timeout = setTimeout(() => {
        setShowAbout(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, showAbout]);

  return (
    <div className="Terminal">
      <div className="TerminalHeader">
        <div className="TerminalButtons">
          <div className="TerminalButton TerminalButtonClose"></div>
          <div className="TerminalButton TerminalButtonMinimize"></div>
          <div className="TerminalButton TerminalButtonMaximize"></div>
        </div>
        <div className="TerminalTitle">
          <TerminalIcon size={16} className="TerminalTitleIcon" />
          terminal
        </div>
      </div>
      <div className="TerminalBody">
        <div className="TerminalLine">
          <span className="TerminalPrompt">$</span>
          <span className="TerminalCommand">{displayText}</span>
        </div>

        {showAbout && (
          <div className="TerminalOutput">
            <AboutSection />
          </div>
        )}

        {showAbout && (
          <div className="TerminalLine">
            <span className="TerminalPrompt">$</span>
            <span className="TerminalCursor">|</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;
