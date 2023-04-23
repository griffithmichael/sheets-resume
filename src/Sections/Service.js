import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Service = ({ checkLoading, skills }) => {
  return (
    <section id="service">
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
