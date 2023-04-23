export const Intro = ({ checkLoading, bio, bio: { Value } }) => {
  return (
    <section id="intro">
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
