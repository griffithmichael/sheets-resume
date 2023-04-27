import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { useInView } from 'react-intersection-observer';

const Footer = ({ direction }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <section
      id="footer"
      ref={ref}
      className={inView ? `slide-in-${direction}` : 'hidden'}
    >
      {/* <!-- SOCIAL ICONS --> */}
      <ul className="social-icons scroll-animated-from-right">
        <li>
          <a
            href="https://www.facebook.com/mike.griffith.188"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-facebook" aria-hidden="true">
              <FontAwesomeIcon icon={faFacebookF} size="1x" />
            </i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/griffithmichael"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin" aria-hidden="true">
              <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
            </i>
          </a>
        </li>
      </ul>
      {/* <!-- /SOCIAL ICONS --> */}

      <p className="scroll-animated-from-right">
        © {new Date().getFullYear()} Griffith | Design by
        <a
          href="https://templatefoundation.com"
          target="_blank"
          rel="noreferrer"
        >
          Template Foundation
        </a>
      </p>
    </section>
  );
};
export default Footer;
