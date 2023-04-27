import { useInView } from 'react-intersection-observer';

const About = ({
  checkLoading,
  siteDescription,
  siteDescription: { Value },
  direction,
}) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <section
      id="about"
      ref={ref}
      className={inView ? `slide-in-${direction}` : 'hidden'}
    >
      <h3 className="headline scroll-animated-from-right">
        This page.
      </h3>

      {checkLoading(siteDescription)}
      <p
        className="scroll-animated-from-right"
        dangerouslySetInnerHTML={{
          __html: Value,
        }}
      />
    </section>
  );
};
export default About;
