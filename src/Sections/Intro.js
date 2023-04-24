import { useInView } from 'react-intersection-observer';

const Intro = ({ checkLoading, bio, bio: { Value } }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <section
      id="intro"
      ref={ref}
      className={inView ? 'show' : 'hidden'}
      style={{ marginBottom: '100px' }}
    >
      {/* <!-- CONTAINER MID --> */}
      <div className="container-mid">
        <div>
          <h1>I’m Mike Griffith,</h1>
        </div>
        {checkLoading(bio)}
        <p className="subline">{Value}</p>
        <a href="#about" className="smooth-scroll">
          Learn More
          <i className="fa fa-angle-down" aria-hidden="true"></i>
        </a>
      </div>
    </section>
  );
};
export default Intro;
