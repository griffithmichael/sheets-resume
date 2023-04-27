import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useInView } from 'react-intersection-observer';

const Contact = ({ contactMethods, checkLoading, direction }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <section
      id="contact"
      ref={ref}
      className={inView ? `slide-in-${direction}` : 'hidden'}
    >
      <h3 className="headline scroll-animated-from-right">
        Contact Me.
      </h3>

      {checkLoading(contactMethods)}
      {/* <!-- CONTACT LIST --> */}
      <ul className="contact-list">
        {contactMethods.map(({ id, Icon, Value }) => {
          return (
            <li key={id} className="scroll-animated-from-right">
              {/* {contactMethod.Icon} */}
              <i
                // className="fa fa-mobile"
                aria-hidden="true"
              ></i>
              <FontAwesomeIcon
                style={{ paddingRight: 10 }}
                icon={Icon}
              />

              {Value}
            </li>
          );
        })}
      </ul>
      {/* <!-- /CONTACT FORM --> */}
    </section>
  );
};

export default Contact;
