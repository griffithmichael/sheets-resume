// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useEffect, useState } from 'react';
import Contact from './Sections/Contact';
import About from './Sections/About';
import Service from './Sections/Service';
import Intro from './Sections/Intro';
import Footer from './Sections/Footer';
import Work from './Sections/Work';
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

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show');
//     } else {
//       entry.target.classList.remove('show');
//     }
//   });
// });

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));

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
  const dateOptions = {
    year: 'numeric',
    month: 'long',
  };

  const [contactMethods, setContactMethods] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [bio, setBio] = useState({});
  const [education, setEducation] = useState([]);
  const [siteDescription, setSiteDescription] = useState({});
  const [socials, setSocials] = useState([]);

  const bioUrl = `https://script.googleusercontent.com/macros/echo?user_content_key=ChYYkeHe1y_gOLhoo6l4EhQSp4GA85fpOMe8sXDT3BXr51oJcDWbEffx08bf4CQp2uzmLHxRdyHPlndoUu9rX4w-gX6M_BJ-m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHsFVwJmYOlKoxqciObzcrk-_5tjx7HoSgFTXsnlySIxSS9JhycrFjAvR_WAt6XI0l2OQwsdTz-GHIWgi2QNHu_yijYbIybuZO9hcaL8DDkCWyMeCoSOuio&lib=MkDUXWVbdM5Qlf9o9BpYykw-ta-3Lvcrn`;
  const contactMethodUrl = `https://script.googleusercontent.com/macros/echo?user_content_key=TOG_40PoYlCemHI9IHgabztgixDFtyb7ew9R1UzeEFQ4A69PhrwfJOFyh35ZqIkkjc7OzQLvmW2D6LwVOnNuPh4QvKkb-pBBOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa8pwJLbiPaEkjD3JeEI5vHHVepvm3oD1kEBor1eQCRPksINQau6qEfUjJosLcHd9W6jHNXTITOIeyqFRlWbIrCxBfidXm4ZqKM3BI-dLAEEL1RmXlfTazdQl1yc58iMeEcgQH-NwAMD_&lib=MkDUXWVbdM5Qlf9o9BpYykw-ta-3Lvcrn`;
  const experienceUrl = `https://script.googleusercontent.com/macros/echo?user_content_key=oZN-BUqd6PH3kWorlBpxMCoX7uyOw3bNaVo7EQLyqOz3pYt5VBE0ggWztFbcmx2A-lybSimKO4gT8aX3ts1U90S7lWw5-nAcOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa8pwJLbiPaEkjD3JeEI5vHHVepvm3oD1kEBor1eQCRPksINQau6qEfUjJosLcHd9W6jHNXTITOIeyqFRlWbIrCxBfidXm4ZqKM3BI-dLAEELoY1ZJ2pcS93_mUNIOE4SEg&lib=MkDUXWVbdM5Qlf9o9BpYykw-ta-3Lvcrn`;
  const skillsUrl = `https://script.googleusercontent.com/macros/echo?user_content_key=DG7-72aBtk8NRZXvRxEzohRduPq8mGOf3r-JEqVRQ-GZpSWNp61owZbm7QCOG2B3gQHOnhka-KWEqxkhl2MIeIFnN2Jt8hO9OJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa8pwJLbiPaEkjD3JeEI5vHHVepvm3oD1kEBor1eQCRPksINQau6qEfUjJosLcHd9W6jHNXTITOIeyqFRlWbIrCxBfidXm4ZqKM3BI-dLAEELHxiX15KnF7jIEB_jcADA_w&lib=MkDUXWVbdM5Qlf9o9BpYykw-ta-3Lvcrn`;
  const educationUrl = `https://script.googleusercontent.com/macros/echo?user_content_key=9aIEhaCcyjo6BURiNaGMLiZ9PG9in_WJhiYOR6PFA4Tagoomj2k-c6-CfOFOI3mpC25nfZseo48FHbD2sigl6myKFt4ZGxTAOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa6BXidbYqVjjZ74h2rzs2hkHgkklbcGMBccHvll-UIXrPcyimeDZkq60jzrPDiemGQYPIgLYYcbZq8CTcoE1qrhKrsN3jfOhMc3BI-dLAEELl_JJRUPmCtbZOs5CFDr09A&lib=MkDUXWVbdM5Qlf9o9BpYykw-ta-3Lvcrn`;
  const siteDescriptionUrl = `https://script.googleusercontent.com/macros/echo?user_content_key=LtzA-w30RioxcOqIwaOSXguF_Um_QYdWFcFrp-23T3_ReYh0pqvYgGlzCn_gBLcnNwAuw8cscziB8CXVCjL_QkBbft0gn8x-m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHsFVwJmYOlKoxqciObzcrk-_5tjx7HoSgFTXsnlySIxSS9JhycrFjAvR_WAt6XI0l2OQwsdTz-GHIWgi2QNHu_yijYbIybuZO9hcaL8DDkC-ezwy7jbYEQ&lib=MkDUXWVbdM5Qlf9o9BpYykw-ta-3Lvcrn`;
  const socialsUrl = `https://script.googleusercontent.com/macros/echo?user_content_key=XdlrlQzdsRpgq4RL023L_ETQqGdHdQCvWNayW73tcwCpntArXWaV2SV7yTTOniibur_Kv1Avyf1UbG1i1PNjfdE4CUxzc8IsOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa6BXidbYqVjjZ74h2rzs2hkHgkklbcGMBccHvll-UIXrPcyimeDZkq60jzrPDiemGQYPIgLYYcbZq8CTcoE1qrhKrsN3jfOhMc3BI-dLAEELDTzFrwbCH_Uwn3hGQ6wDWw&lib=MkDUXWVbdM5Qlf9o9BpYykw-ta-3Lvcrn`;

  useEffect(() => {
    setData(contactMethodUrl, setContactMethods);
    setData(experienceUrl, setExperience);
    setData(bioUrl, setBio);
    setData(skillsUrl, setSkills);
    setData(educationUrl, setEducation);
    setData(siteDescriptionUrl, setSiteDescription);
    setData(socialsUrl, setSocials);
  }, [
    contactMethodUrl,
    experienceUrl,
    bioUrl,
    skillsUrl,
    educationUrl,
    siteDescriptionUrl,
    socialsUrl,
  ]);

  return (
    <>
      <div className="image-container">
        <div className="background-img fade-in"></div>
      </div>
      {/* <!-- /IMAGE CONTAINER --> */}

      {/* <!-- CONTENT AREA --> */}
      <div className="content-area">
        {/* <!-- CONTENT AREA INNER --> */}
        <div className="content-area-inner">
          {/* <!-- INTRO --> */}
          <Intro
            checkLoading={checkLoading}
            bio={bio}
            direction="left"
          />
          {/* <!-- /INTRO --> */}

          {/* <!-- ABOUT --> */}
          <About
            checkLoading={checkLoading}
            siteDescription={siteDescription}
            direction="right"
          />
          {/* <!-- /ABOUT --> */}

          {/* <!-- SERVICE --> */}
          <Service
            checkLoading={checkLoading}
            skills={skills}
            direction="left"
          />
          {/* <!-- /SERVICE --> */}

          {/* <!-- WORK --> */}
          <Work
            checkLoading={checkLoading}
            experience={experience}
            dateOptions={dateOptions}
            title="Work"
            direction="right"
          />
          {/* <!-- /WORK --> */}

          {/* <!-- EDUCATION --> */}
          <Work
            checkLoading={checkLoading}
            experience={education}
            dateOptions={dateOptions}
            title="Education"
            direction="left"
          />
          {/* <!-- /EDUCATION --> */}

          {/* <!-- CONTACT --> */}
          <Contact
            checkLoading={checkLoading}
            contactMethods={contactMethods}
            direction="right"
          />
          {/* <!-- /CONTACT --> */}

          {/* <!-- FOOTER --> */}
          <Footer socials={socials} direction="left" />
          {/* <!-- /FOOTER --> */}
        </div>
        {/* <!-- /CONTENT AREA INNER --> */}
      </div>
      {/* <!-- /CONTENT AREA --> */}
    </>
  );
}

export default App;
