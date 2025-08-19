import React, { useState, useEffect } from 'react';
import './Terminal.scss';

const Terminal = () => {
  const [displayText, setDisplayText] = useState('');
  const [showAbout, setShowAbout] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const command = 'whoami';

  // Create the about section with proper links
  const AboutSection = () => (
    <div className="AboutSection">
      <div className="AboutHeader">
        <span className="AboutLabel">Name:</span> Matthew Fornaciari (Forni)
      </div>
      <div className="AboutHeader">
        <span className="AboutLabel">Location:</span> Hobart, TAS, Australia
      </div>
      <div className="AboutHeader">
        <span className="AboutLabel">Background:</span> Applied Mathematics & Computer Science
      </div>
      <div className="AboutHeader">
        <span className="AboutLabel">Experience:</span> Amazon, Salesforce, Gremlin (Founder & CTO)
      </div>
      <div className="AboutHeader">
        <span className="AboutLabel">Interests:</span> Outdoors, Technology, Running, Swimming, Cooking
      </div>
      <div className="AboutDescription">
        <p>
          Matthew Fornaciari, better known as Forni, is equal parts outdoorsman and technologist. He is a California native who studied Applied Mathematics & Computer Science in Providence and has lived and worked in Seattle, San Francisco, and Denver, before landing in Hobart, TAS, Australia where he currently resides.
        </p>
        <br/>
        <p>
          His career has been focused on helping technology companies build more reliable computer systems, which he has done at <a href="https://amazon.com" target="_blank" rel="noreferrer" className="LinkAmazon">Amazon</a>, <a href="https://salesforce.com" target="_blank" rel="noreferrer" className="LinkSalesforce">Salesforce</a>, and a diverse array of Fortune 500 companies via <a href="https://gremlin.com" target="_blank" rel="noreferrer" className="LinkGremlin">Gremlin</a> where he served as Founder and CTO starting in January 2016. Matt <a href="https://medium.com/@callmeforni/goodbye-gremlin-hello-world-b119abd3d370" target="_blank" rel="noreferrer">left Gremlin</a> at the end of February 2022 to take some time to rest and digest that experience while running, swimming, cooking, and generally exploring. You can <a href="http://findforni.info/" target="_blank" rel="noreferrer">check out his Garmin live map</a> to follow along on his latest adventures.
        </p>
      </div>
    </div>
  );

  useEffect(() => {
    // Animate the command typing
    if (currentIndex < command.length) {
      const timer = setTimeout(() => {
        setDisplayText(command.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else if (!showAbout) {
      // Wait a bit after command is complete, then show about section
      const timer = setTimeout(() => {
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
        <div className="TerminalTitle">terminal</div>
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
