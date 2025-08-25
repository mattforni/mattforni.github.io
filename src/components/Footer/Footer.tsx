import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import './Footer.scss';

interface SocialLinkProps {
  name: string;
  icon: React.ReactNode;
  link: string;
}

/**
 * The SocialLink component renders an icon with a link to the external social network.
 * @returns {JSX.Element} An icon and link representing an external social network.
 */
const SocialLink: React.FC<SocialLinkProps> = ({ name, icon, link }) => {
  return (
    <div className='SocialLink' onClick={() => window.open(link, '_blank')}>
      {icon}
      <span className="SocialLinkName">{name}</span>
    </div>
  );
};

/**
 * The Footer component represents the footer content in the application.
 * @returns {JSX.Element} The footer content of the application.
 */
const Footer: React.FC = () => {
  return (
    <div className='Footer'>
      <div className='SocialLinks'>
        <SocialLink
          name='Email'
          icon={<Mail size={24} className="SocialIcon" />}
          link='mailto:mattforni@gmail.com?subject=Hello from mattforni.com'
        />
        <SocialLink
          name='LinkedIn'
          icon={<Linkedin size={24} className="SocialIcon" />}
          link='https://www.linkedin.com/in/mattforni/'
        />
        <SocialLink
          name='Github'
          icon={<Github size={24} className="SocialIcon" />}
          link='https://github.com/mattforni'
        />
      </div>
    </div>
  );
};

export default Footer;
