export const Work = ({ checkLoading, experience, dateOptions }) => {
  return (
    <section id="work">
      <h3 className="headline scroll-animated-from-right">
        Work Experience.
      </h3>

      {checkLoading(experience)}
      {experience.map(
        ({
          id,
          Colour,
          Location,
          StartDate,
          EndDate,
          Title,
          ImageUrl,
        }) => {
          return (
            <>
              {/* <!-- SHOWCASE --> */}
              <div key={id} className="showcase">
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
                    style={{ background: Colour }}
                  >
                    {/* <div className="purple"> */}
                    {/* <!-- CONTAINER MID --> */}
                    <div className="container-mid">
                      <h5>{Location}</h5>
                      <p>
                        {new Date(StartDate).toLocaleDateString(
                          'en-US',
                          dateOptions
                        )}
                        &nbsp;-&nbsp;
                        {new Date(EndDate).toLocaleDateString(
                          'en-US',
                          dateOptions
                        )}
                      </p>
                      <p>{Title}</p>
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
                  <div id="item-1-lightbox" className="work-lightbox">
                    <img
                      className="img-responsive"
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                      }}
                      src={ImageUrl}
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
        }
      )}
    </section>
  );
};