import HomePageHeader from "./HomePageHeader";

export default function HomeTrends() {
  const blocks = [
    {
      Image:'/img/Trends_01.png',
      Title: "Evolution of real estate business over time and years",
      Description:'lorem ipsum dollet lausn domet comet moon gonna be soon bespoke the words of god in his own way or the other.',
      share: "Learn More"
    },
    {
        Image:'/img/Trends_02.png',
        Title: "How AI Can change the way for browsing properties",
        Description:'lorem ipsum dollet lausn domet comet moon gonna be soon bespoke the words of god in his own way or the other.',
        share: "Learn More"
    },
    {
        Image:'/img/Trends_03.png',
        Title: "AI Copilot a new leap towards future of real estate in Dubai",
        Description:'lorem ipsum dollet lausn domet comet moon gonna be soon bespoke the words of god in his own way or the other.',
        share: "Learn More"
    },
  ];

  return (
    <section className="container-md py-16 space-y-8">
      <HomePageHeader
        title="Uncover latest trends and stories"
        des="Want to see more? Check out all our listings and let AI Copilot guide you to your perfect match"
        type="row"
      />
      <div className="py-2">
          <div className="-m-1 md:-m-2">
            <div className="flex flex-wrap">
                {blocks.map((list,index)=>
                    (
                        <div className="w-1/3">
                            <div className="w-full p-1 md:py-2 md:pr-2 relative" key={index}>
                                <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={list.Image}
                                />
                                <div className="absolute bottom-0 w-full m-5" >
                                    <div className="w-11/12 p-6 rounded-lg " style={{backgroundColor:'#282828',opacity:'0.72'}}>
                                    <div className="flex flex-wrap w-3/4">
                                        <h5 className="mb-2 text-xl font-medium leading-tight text-white flex-1">
                                            {list.Title}
                                        </h5>
                                    </div>
                                    <div className="flex flex-wrap w-3/4 mt-2">
                                        <p className="mb-4 text-base text-white flex-1">
                                            {list.Description}
                                        </p>
                                    </div>
                                    <p className="text-base text-white">
                                        <small className="text-customTrendLearn">{list.share}</small>
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
          </div>
        </div>
    </section>
  );
}
