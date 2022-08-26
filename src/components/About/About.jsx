import './About.scss';
import PortraitImage from "../../assets/images/sand-boarding.jpg";

const Headshot = () => {
  return (
    <div className='Headshot'>
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
      <Headshot/>
      <div className='AboutContent'>
        <p>
          Matthew Fornaciari, better known as Forni, is equal parts outdoorsman and technologist. He is a California native who studied Applied Mathematics & Computer Science in Providence and has lived and worked in Seattle, San Francisco, and Denver, before landing in Hobart, TAS, Australia where he currently resides.
        </p>
        <br/>
        <p>
          His career has been focused on helping technology companies build more reliable computer systems, which he has done at {linkAmazon}, {linkSalesforce}, and a diverse array of Fortune 500 companies via {linkGremlin} where he served as Founder and CTO starting in January 2016. Matt {linkGoodbyeGremlin} at the end of February 2022 to take some time to rest and digest that experience while running, swimming, cooking, and generally exploring. You can {linkFindForni} to follow along on his latest adventures.
        </p>
      </div>
    </div>
  );
}

export default About;
