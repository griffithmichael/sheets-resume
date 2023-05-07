import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useInView } from 'react-intersection-observer';

const Footer = ({ direction, socials }) => {
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
        {socials.map((social) => {
          return (
            <li>
              <a href={social.Url} target="_blank" rel="noreferrer">
                <i aria-hidden="true">
                  <FontAwesomeIcon icon={social.Icon} />
                </i>
              </a>
            </li>
          );
        })}
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
