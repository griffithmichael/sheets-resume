import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Contact = ({ contactMethods, checkLoading }) => {
  return (
    <section id="contact">
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
