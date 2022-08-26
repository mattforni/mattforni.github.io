import './About.scss';
import PortraitImage from "../../assets/images/sand-boarding.jpg";

const HelloNameTag = () => {
  return (
    <div className='HelloNameTag'>
      <div className='HelloNameTagHeader'>
        Hello
        <div className='HelloNameTagSubHeader'>
          my name is
        </div>
      </div>
      <div className='HelloNameTagName'>
        Forni
      </div>
    </div>
  );
}

const About = () => {
  const linkAmazon = <a href='https://amazon.com' target='_blank' class='LinkAmazon'>Amazon</a>;
  const linkGremlin = <a href='https://gremlin.com' target='_blank' class='LinkGremlin'>Gremlin</a>;
  const linkSalesforce = <a href='https://salesforce.com' target='_blank' class='LinkSalesforce'>Salesforce</a>;
  const linkFindForni = <a href='http://findforni.info/' target='_blank'>check out his Garmin live map</a>;
  const linkGoodbyeGremlin = <a href='https://medium.com/@callmeforni/goodbye-gremlin-hello-world-b119abd3d370' target='_blank'>left Gremlin</a>;

  return (
    <div className='About'>
      <img src={PortraitImage} alt='Portrait Image'/>
      <div className='AboutContent'>
        <HelloNameTag/>
        <div className='AboutContentIntro'>
          Matthew Fornaciari, better known as Forni, is equal parts outdoorsman and technologist. Born in the Bay Area, he grew up in LA, studied in Providence, and has lived in Seattle, San Francisco, and Denver, before landing in Hobart, TAS, Australia where he currently resides.
        </div>
        <div className='AboutContentExpansion'>
          His professional specialty is helping companies build more reliable computer systems, which he has done at {linkAmazon}, {linkSalesforce}, and most recently a diverse array of Fortune 500 companies via {linkGremlin}, which he founded in January 2016. Matt {linkGoodbyeGremlin} at the end of February 2022 and is currently taking some time to rest and digest that experience while running, swimming, cooking, and generally exploring. You can {linkFindForni} to follow along on his latest adventures.
        </div>
      </div>
    </div>
  );
}

export default About;
