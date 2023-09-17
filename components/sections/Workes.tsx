import HomeWorkesHeader from "./HomeWorkesHeader";

export default function HomeWorkes() {

    const blocks = [
        {
            Title:"Tell Us Your Preferences",
            Description:"Share your desires, from location to amenities, and let AI Copilot understand your unique needs."
        },
        {
            Title:"Browse Personalized Listings",
            Description:"Discover a curated selection of properties that align with your preferences, thanks to AI's smart algorithms."
        },
        {
            Title:"Experience Virtual Tours",
            Description:"Step inside properties virtually and explore every corner before scheduling a visit."
        },
        {
            Title:"Get Pricing Insights",
            Description:"AI Copilot analyzes the market, helping you make informed decisions about property values."
        },
    ];
  return (
    <section className="container-md py-16 space-y-8">
      <HomeWorkesHeader
        title="How it workes"
        des="Imagine having a personal assistant that understands your preferences, anticipates your needs, and guides you towards your ideal property. That's exactly what our AI Copilot does"
        type="row"
      />
        <div className="py-2">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="w-1/2 flex-wrap">
              <div className="w-full p-1 md:py-2 md:pr-2 relative">
                {blocks.map((list,index)=>
                    (
                        <ul className="list-disc" key={index}>
                            <li className="lg:w-[80%] text-2xl md:text-[1.938rem] leading-snug text-customDarkGreyVarient font-bold" >{list.Title}</li>  
                            <p className="lg:w-[60%] text-customDesciptionWorkes font-medium text-base py-6">{list.Description}</p>
                        </ul>
                    )
                )}

              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="/img/WorkesRight.png"
                />
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}