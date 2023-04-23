export const About = ({
  checkLoading,
  siteDescription,
  siteDescription: { Value },
}) => {
  return (
    <section id="about">
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
