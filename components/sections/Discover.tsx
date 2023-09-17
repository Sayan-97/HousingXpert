import HomePageHeader from "./HomePageHeader";

export default function HomeDiscover() {
  return (
    <section className="container-md py-16 space-y-8">
      <HomePageHeader
        title="Discover your perfect property match with AI Copilot"
        des="Want to see more? Check out all our listings and let AI Copilot guide you to your perfect match"
        type="row"
      />
      {/* <div className=""> */}
        <div className="py-2">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="w-1/2 flex-wrap">
              <div className="w-full p-1 md:py-2 md:pr-2 relative">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="/img/DiscoverLeft.png"
                />
                  <div className="absolute bottom-0 w-full m-8" >
                    <div className="w-11/12 p-6 rounded-lg " style={{backgroundColor:'#282828',opacity:'0.72'}}>
                    <div className="flex flex-wrap w-full">
                      <h5 className="mb-2 text-xl font-medium leading-tight text-white flex-1">
                      Royal Villa
                      </h5>
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src="/img/RightTopArrow.png"
                        style={{width:'30px',height:'30px'}}
                      />
                    </div>
                    <div className="flex flex-wrap w-full mt-2">
                      <p className="mb-4 text-base text-white flex-1">
                      24th Grand Street, Dubai east DA3045
                      </p>
                      <div className="flex flex-wrap w-1/8">
                        <p className="mb-4 px-2 text-base text-white border-r border-white">
                        1000 sq. ft
                        </p>
                        <p className="mb-4 px-2 text-base text-white border-r border-white mr-6">
                        5 Beds
                        </p>
                      </div>
                    </div>
                    {/* <p className="text-base text-white">
                      <small className="text-white">Last updated 3 mins ago</small>
                    </p> */}
                    </div>
                  </div>
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="/img/DiscoverRightTop.png"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="/img/DiscoverRight01.png"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="/img/DiscoverRight02.png"
                />
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}
