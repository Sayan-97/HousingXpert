import HomePageHeader from "./HomePageHeader";

export default function HomeSearch() {
  const blocks = [
    {
      color: "black",
      icon: "/img/Copilot_01.png",
      title: "Personalized Recommendations ",
      bgColor: "#fff",
    },
    {
      color: "white",
      icon: "/img/Copilot_02.png",
      title: "Virtual Tours at Your Fingertips",
      bgColor: "#282828",
    },
    {
      color: "white",
      icon: "/img/Copilot_03.png",
      title: "Intelligent Pricing Insights",
      bgColor: "#5B5B5B",
    },
    {
      color: "black",
      icon: "/img/Copilot_04.png",
      title: "Seamless User Experience",
      bgColor: "#F1EFED",
    },
  ];

  return (
    <section className="container-md py-16 space-y-8">
      <HomePageHeader
        title="How AI Copilot Transforms Your Home Search"
        des="Imagine having a personal assistant that understands your preferences, anticipates your needs, and guides you towards your ideal property. That's exactly what our AI Copilot does"
        type="row"
      />
      <div className="grid grid-cols-12">
        <div className="grid grid-cols-2 col-span-6">
          {blocks.map((item, index) => (
            <div
              className={`block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mr-6 p-6 ${
                index === 0 || index === 1 ? "mb-10" : ""
              }`}
              style={{ backgroundColor: item.bgColor }}
            >
              <div
                className="relative overflow-hidden bg-cover bg-no-repeat"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img className="rounded-t-lg" src={item.icon} alt="" />
                <a href="#!">
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>
              <div className="pt-6">
                <h5
                  className="mb-2 text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 w-1/2"
                  style={{ color: item.color }}
                >
                  {item.title}
                </h5>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 col-span-6">
          <div
            className={"block rounded-lg dark:bg-neutral-700 bg-transparent"}
          >
            <div
              className="relative overflow-hidden bg-transparent"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                className="rounded-t-lg w-full h-full"
                src="/img/RightBuildingCopilot.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
