import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useInView } from 'react-intersection-observer';

const Service = ({ checkLoading, skills, direction }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <section
      id="service"
      ref={ref}
      className={inView ? `slide-in-${direction}` : 'hidden'}
    >
      <h3 className="headline scroll-animated-from-right">
        What I can do for you.
      </h3>

      {/* <!-- SERVICE LIST --> */}
      <ul className="services-list">
        {checkLoading(skills)}
        {skills.map(({ id, Icon, Category, Value }) => {
          return (
            <li key={id} className="scroll-animated-from-right">
              <FontAwesomeIcon
                style={{ paddingRight: 10 }}
                icon={Icon}
              />
              {/* </i> */}
              {Category}
              <p>{Value}</p>
            </li>
          );
        })}
      </ul>
      {/* <!-- /SERVICE LIST --> */}
    </section>
  );
};
export default Service;
