import './About.scss';

const Link = (href, text) => {
  const className = text.split(' ').length > 1 ? '' : 'Link'+text;
  return <a href={href} target='_blank' rel='noreferrer' className={className}>{text}</a>;
}

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
  const linkAmazon= Link('https://amazon.com', 'Amazon');
  const linkGremlin = Link('https://gremlin.com', 'Gremlin');
  const linkSalesforce = Link('https://salesforce.com', 'Salesforce');
  const linkFindForni = Link('http://findforni.info/', 'check out his Garmin live map');
  const linkGoodbyeGremlin = Link('https://medium.com/@callmeforni/goodbye-gremlin-hello-world-b119abd3d370', 'left Gremlin');

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
