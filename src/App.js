import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useEffect, useState } from 'react';
import {
  faFacebookF,
  faLinkedinIn,
  faReact,
  faLaravel,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import {
  faMobile,
  faEnvelope,
  faComputer,
  faListCheck,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faFacebookF,
  faLinkedinIn,
  faEnvelope,
  faMobile,
  faComputer,
  faReact,
  faLaravel,
  faGithub,
  faListCheck
);

function setData(url, setData) {
  fetch(url)
    .then((response) => response.json())
    .then((response) => setData(response.data));
}

function checkLoading(data) {
  // if (data.length < 1) console.log(typeof data.length);
  if (data.length === 0 || Object.keys(data).length === 0)
    return (
      <div className="animation-container">
        <div className="preloader" data-animation-delay="50">
          <div className="spinner"></div>
        </div>
      </div>
    );
}

function App() {
  const options = {
    year: 'numeric',
    month: 'long',
  };

  const [contactMethods, setContactMethods] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [bio, setBio] = useState({});
  const [education, setEducation] = useState([]);
  const [siteDescription, setSiteDescription] = useState({});

  const bioUrl = `https://script.googleusercontent.com/macros/echo?user_content_key=ChYYkeHe1y_gOLhoo6l4EhQSp4GA85fpOMe8sXDT3BXr51oJcDWbEffx08bf4CQp2uzmLHxRdyHPlndoUu9rX4w-gX6M_BJ-m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHsFVwJmYOlKoxqciObzcrk-_5tjx7HoSgFTXsnlySIxSS9JhycrFjAvR_WAt6XI0l2OQwsdTz-GHIWgi2QNHu_yijYbIybuZO9hcaL8DDkCWyMeCoSOuio&lib=MkDUXWVbdM5Qlf9o9BpYykw-ta-3Lvcrn`;
  const contactMethodUrl = `https://script.googleusercontent.com/macros/echo?user_content_key=TOG_40PoYlCemHI9IHgabztgixDFtyb7ew9R1UzeEFQ4A69PhrwfJOFyh35ZqIkkjc7OzQLvmW2D6LwVOnNuPh4QvKkb-pBBOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa8pwJLbiPaEkjD3JeEI5vHHVepvm3oD1kEBor1eQCRPksINQau6qEfUjJosLcHd9W6jHNXTITOIeyqFRlWbIrCxBfidXm4ZqKM3BI-dLAEEL1RmXlfTazdQl1yc58iMeEcgQH-NwAMD_&lib=MkDUXWVbdM5Qlf9o9BpYykw-ta-3Lvcrn`;
  const experienceUrl = `https://script.googleusercontent.com/macros/echo?user_content_key=oZN-BUqd6PH3kWorlBpxMCoX7uyOw3bNaVo7EQLyqOz3pYt5VBE0ggWztFbcmx2A-lybSimKO4gT8aX3ts1U90S7lWw5-nAcOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa8pwJLbiPaEkjD3JeEI5vHHVepvm3oD1kEBor1eQCRPksINQau6qEfUjJosLcHd9W6jHNXTITOIeyqFRlWbIrCxBfidXm4ZqKM3BI-dLAEELoY1ZJ2pcS93_mUNIOE4SEg&lib=MkDUXWVbdM5Qlf9o9BpYykw-ta-3Lvcrn`;
  const skillsUrl = `https://script.googleusercontent.com/macros/echo?user_content_key=DG7-72aBtk8NRZXvRxEzohRduPq8mGOf3r-JEqVRQ-GZpSWNp61owZbm7QCOG2B3gQHOnhka-KWEqxkhl2MIeIFnN2Jt8hO9OJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa8pwJLbiPaEkjD3JeEI5vHHVepvm3oD1kEBor1eQCRPksINQau6qEfUjJosLcHd9W6jHNXTITOIeyqFRlWbIrCxBfidXm4ZqKM3BI-dLAEELHxiX15KnF7jIEB_jcADA_w&lib=MkDUXWVbdM5Qlf9o9BpYykw-ta-3Lvcrn`;
  const educationUrl = `https://script.googleusercontent.com/macros/echo?user_content_key=9aIEhaCcyjo6BURiNaGMLiZ9PG9in_WJhiYOR6PFA4Tagoomj2k-c6-CfOFOI3mpC25nfZseo48FHbD2sigl6myKFt4ZGxTAOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa6BXidbYqVjjZ74h2rzs2hkHgkklbcGMBccHvll-UIXrPcyimeDZkq60jzrPDiemGQYPIgLYYcbZq8CTcoE1qrhKrsN3jfOhMc3BI-dLAEELl_JJRUPmCtbZOs5CFDr09A&lib=MkDUXWVbdM5Qlf9o9BpYykw-ta-3Lvcrn`;
  const siteDescriptionUrl = `https://script.googleusercontent.com/macros/echo?user_content_key=LtzA-w30RioxcOqIwaOSXguF_Um_QYdWFcFrp-23T3_ReYh0pqvYgGlzCn_gBLcnNwAuw8cscziB8CXVCjL_QkBbft0gn8x-m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHsFVwJmYOlKoxqciObzcrk-_5tjx7HoSgFTXsnlySIxSS9JhycrFjAvR_WAt6XI0l2OQwsdTz-GHIWgi2QNHu_yijYbIybuZO9hcaL8DDkC-ezwy7jbYEQ&lib=MkDUXWVbdM5Qlf9o9BpYykw-ta-3Lvcrn`;

  useEffect(() => {
    setData(contactMethodUrl, setContactMethods);
    setData(experienceUrl, setExperience);
    setData(bioUrl, setBio);
    setData(skillsUrl, setSkills);
    setData(educationUrl, setEducation);
    setData(siteDescriptionUrl, setSiteDescription);
  }, [
    contactMethodUrl,
    experienceUrl,
    bioUrl,
    skillsUrl,
    educationUrl,
    siteDescriptionUrl,
  ]);

  return (
    <>
      <div className="image-container">
        <div className="background-img"></div>
      </div>
      {/* <!-- /IMAGE CONTAINER --> */}

      {/* <!-- CONTENT AREA --> */}
      <div className="content-area">
        {/* <!-- CONTENT AREA INNER --> */}
        <div className="content-area-inner">
          {/* <!-- INTRO --> */}
          <section id="intro">
            {/* <!-- CONTAINER MID --> */}
            <div className="container-mid">
              {/* <!-- ANIMATION CONTAINER --> */}
              {/* <!-- <div
              className="animation-container animation-fade-down"
              data-animation-delay="0"
            >
              <h1>I’m John Miller,</h1>
            </div> --> */}

              <div>
                <h1>I’m Mike Griffith,</h1>
              </div>
              {/* <!-- /ANIMATION CONTAINER --> */}
              {/* <!-- ANIMATION CONTAINER --> */}
              {/* <!-- <div
              className="animation-container animation-fade-left"
              data-animation-delay="300"
            > --> */}
              {checkLoading(bio)}
              <p className="subline">{bio.Value}</p>
              {/* <!-- </div> --> */}
              {/* <!-- /ANIMATION CONTAINER --> */}
              {/* <!-- ANIMATION CONTAINER --> */}
              {/* <!-- <div
              className="animation-container animation-fade-up"
              data-animation-delay="600"
            > --> */}
              <a href="#about" className="smooth-scroll">
                Learn More
                <i
                  className="fa fa-angle-down"
                  aria-hidden="true"
                ></i>
              </a>
              {/* <!-- </div> --> */}
              {/* <!-- /ANIMATION CONTAINER --> */}
            </div>
            {/* <!-- /CONTAINER MID --> */}
          </section>
          {/* <!-- /INTRO --> */}

          {/* <!-- ABOUT --> */}
          <section id="about">
            <h3 className="headline scroll-animated-from-right">
              This page.
            </h3>

            {checkLoading(siteDescription)}
            <p
              className="scroll-animated-from-right"
              dangerouslySetInnerHTML={{
                __html: siteDescription.Value,
              }}
            />

            {/* <p className="scroll-animated-from-right">
              Duis consectetur massa sit amet nibh rhoncus, at
              pharetra ligula aliquet. Ut ac velit vestibulum,
              eleifend diam ut, malesuada nisi. Sed vel felis vitae
              diam luctus commodo. Nunc ipsum est, vulputate id orci
              ac, luctus consectetur sapien.
            </p> */}
          </section>
          {/* <!-- /ABOUT --> */}

          {/* <!-- SERVICE --> */}
          <section id="service">
            <h3 className="headline scroll-animated-from-right">
              What I can do for you.
            </h3>

            {/* <!-- SERVICE LIST --> */}
            <ul className="services-list">
              {/* <li className="scroll-animated-from-right">
                <i
                  className="fa fa-pencil-square-o"
                  aria-hidden="true"
                ></i>
                Concept & Strategy
              </li> */}
              {checkLoading(skills)}
              {skills.map((skill) => {
                return (
                  <li
                    key={skill.id}
                    className="scroll-animated-from-right"
                  >
                    {/* <i
                      className="fa-solid fa-computer"
                      aria-hidden="true"
                    > */}
                    <FontAwesomeIcon
                      style={{ paddingRight: 10 }}
                      icon={skill.Icon}
                    />
                    {/* </i> */}
                    {skill.Category}
                    <p>{skill.Value}</p>
                  </li>
                );
              })}
            </ul>
            {/* <!-- /SERVICE LIST --> */}
          </section>
          {/* <!-- /SERVICE --> */}

          {/* <!-- WORK --> */}
          <section id="work">
            <h3 className="headline scroll-animated-from-right">
              Work Experience.
            </h3>

            {checkLoading(experience)}
            {experience.map((job) => {
              return (
                <>
                  {/* <!-- SHOWCASE --> */}
                  <div key={job.id} className="showcase">
                    {/* <!-- ITEM --> */}
                    <div className="item scroll-animated-from-right">
                      {/* <!-- LIGHTBOX LINK --> */}
                      {/* <a
                        href="#"
                        data-featherlight="#item-1-lightbox"
                      > */}
                      {/* <!-- INFO --> */}
                      <div
                        className="info"
                        style={{ background: job.Colour }}
                      >
                        {/* <div className="purple"> */}
                        {/* <!-- CONTAINER MID --> */}
                        <div className="container-mid">
                          <h5>{job.Company}</h5>
                          <p>
                            {new Date(
                              job.StartDate
                            ).toLocaleDateString('en-US', options)}
                            -
                            {new Date(job.EndDate).toLocaleDateString(
                              'en-US',
                              options
                            )}
                          </p>
                          <p>{job.Title}</p>
                        </div>
                        {/* <!-- /CONTAINER MID --> */}
                        {/* </div> */}
                      </div>
                      {/* <!-- /INFO --> */}

                      <div
                        className="background-image"
                        //   style="
                        //   background-image: url(assets/img/work/item-1.jpg);
                        // "
                      ></div>
                      {/* </a> */}
                      {/* <!-- /LIGHTBOX LINK --> */}
                      {/* <!-- LIGHTBOX --> */}
                      <div
                        id="item-1-lightbox"
                        className="work-lightbox"
                      >
                        <img
                          className="img-responsive"
                          style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                          }}
                          src={job.ImageUrl}
                          alt="meaningful"
                        />

                        {/* <h3>{job.Company}</h3>
                        <p className="subline">{job.Title}</p>

                        <p>
                          Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Etiam semper faucibus eros,
                          quis imperdiet sapien. Nam sodales nec risus
                          nec interdum. Proin lobortis, ex condimentum
                          ultricies eleifend, nisl nunc sollicitudin
                          odio, eget egestas est turpis et metus. In
                          non ligula quis mauris rutrum porta.
                        </p> */}
                      </div>
                      {/* <!-- /LIGHTBOX --> */}
                    </div>
                    {/* <!-- /ITEM --> */}
                  </div>
                  {/* <!-- /SHOWCASE --> */}
                  <br />
                </>
              );
            })}
          </section>
          {/* <!-- /WORK --> */}

          {/* <!-- WORK --> */}
          <section id="education">
            <h3 className="headline scroll-animated-from-right">
              Education.
            </h3>
            {checkLoading(education)}
            {education.map((experience) => {
              return (
                <>
                  {/* <!-- SHOWCASE --> */}
                  <div key={experience.id} className="showcase">
                    {/* <!-- ITEM --> */}
                    <div className="item scroll-animated-from-right">
                      {/* <!-- LIGHTBOX LINK --> */}
                      {/* <a
                        href="#"
                        data-featherlight="#item-1-lightbox"
                      > */}
                      {/* <!-- INFO --> */}
                      <div
                        className="info"
                        style={{ background: experience.Colour }}
                      >
                        {/* <div className="purple"> */}
                        {/* <!-- CONTAINER MID --> */}
                        <div className="container-mid">
                          <h5>{experience.Location}</h5>
                          <p>
                            {new Date(
                              experience.StartDate
                            ).toLocaleDateString('en-US', options)}
                            -
                            {new Date(
                              experience.EndDate
                            ).toLocaleDateString('en-US', options)}
                          </p>
                          <p>{experience.Program}</p>
                        </div>
                        {/* <!-- /CONTAINER MID --> */}
                        {/* </div> */}
                      </div>
                      {/* <!-- /INFO --> */}

                      <div
                        className="background-image"
                        //   style="
                        //   background-image: url(assets/img/work/item-1.jpg);
                        // "
                      ></div>
                      {/* </a> */}
                      {/* <!-- /LIGHTBOX LINK --> */}
                      {/* <!-- LIGHTBOX --> */}
                      <div
                        id="item-1-lightbox"
                        className="work-lightbox"
                      >
                        <img
                          className="img-responsive"
                          style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                          }}
                          src={experience.ImageUrl}
                          alt="meaningful"
                        />

                        {/* <h3>{job.Company}</h3>
                        <p className="subline">{job.Title}</p>

                        <p>
                          Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Etiam semper faucibus eros,
                          quis imperdiet sapien. Nam sodales nec risus
                          nec interdum. Proin lobortis, ex condimentum
                          ultricies eleifend, nisl nunc sollicitudin
                          odio, eget egestas est turpis et metus. In
                          non ligula quis mauris rutrum porta.
                        </p> */}
                      </div>
                      {/* <!-- /LIGHTBOX --> */}
                    </div>
                    {/* <!-- /ITEM --> */}
                  </div>
                  {/* <!-- /SHOWCASE --> */}
                  <br />
                </>
              );
            })}
          </section>
          {/* <!-- /EDUCATION --> */}

          {/* <!-- CONTACT --> */}
          <section id="contact">
            <h3 className="headline scroll-animated-from-right">
              Contact Me.
            </h3>

            {checkLoading(contactMethods)}
            {/* <!-- CONTACT LIST --> */}
            <ul className="contact-list">
              {contactMethods.map((contactMethod) => {
                return (
                  <li
                    key={contactMethod.id}
                    className="scroll-animated-from-right"
                  >
                    {/* {contactMethod.Icon} */}
                    <i
                      // className="fa fa-mobile"
                      aria-hidden="true"
                    ></i>
                    <FontAwesomeIcon
                      style={{ paddingRight: 10 }}
                      icon={contactMethod.Icon}
                    />

                    {contactMethod.Value}
                  </li>
                );
              })}
            </ul>
            {/* <!-- /CONTACT LIST --> */}

            {/* <!-- CONTACT FORM --> */}
            {/* <form
              id="contact-form"
              action="assets/php/contact.php"
              method="post"
            >
              <input
                id="contact-form-name"
                type="text"
                name="name"
                className="form-control scroll-animated-from-right"
                placeholder="* Your Name"
              />

              <input
                id="contact-form-email"
                type="text"
                name="email"
                className="form-control scroll-animated-from-right"
                placeholder="* Your Email"
              />

              <div className="fhp-input">
                <input
                  id="contact-form-company"
                  type="text"
                  name="company"
                  className="form-control"
                />
              </div>

              <textarea
                id="contact-form-message"
                name="message"
                className="form-control scroll-animated-from-right"
                placeholder="* Your Message"
              ></textarea>

              <button
                type="submit"
                className="form-control scroll-animated-from-right"
              >
                Send Mail
              </button>

              <div className="success-message">
                * The Email was Sent Successfully!
              </div>
            </form> */}
            {/* <!-- /CONTACT FORM --> */}
          </section>
          {/* <!-- /CONTACT --> */}

          {/* <!-- FOOTER --> */}
          <section id="footer">
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
          {/* <!-- /FOOTER --> */}
        </div>
        {/* <!-- /CONTENT AREA INNER --> */}
      </div>
      {/* <!-- /CONTENT AREA --> */}
    </>
  );
}

export default App;
