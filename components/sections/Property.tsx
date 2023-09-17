import HomePageHeader from "./HomePageHeader";
import HomePropertyHeader from "./HomePropertyHeader";

export default function PropertyDiscover() {

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
    <section className="container-md py-16 mb-16 space-y-8 bg-customProperty rounded-lg">
        <HomePropertyHeader
        title="Our Property Network"
        des="Imagine having a personal assistant that understands your preferences, anticipates your needs, and guides you towards your ideal property. That's exactly what our AI Copilot does"
        type="row"
        />
        <div className="py-2 relative">
            <img
                alt="gallery"
                className="block h-full w-1/2 rounded-lg object-cover object-center mx-auto"
                src="/img/MiddleImageProperty.png"
            />
            <div className="absolute text-black right-[43%] bottom-[38%] bg-white p-2 rounded-lg">
                <img
                    alt="gallery"
                    className="block h-1/4 w-1/4 rounded-lg object-cover object-center mx-auto"
                    src="/img/UAE.png"
                />
                <p className="text-xl md:text-[0.938rem] leading-snug font-black capitalize text-center mx-auto pt-2">
                    Dubai UAE
                </p>
                <p className="text-md md:text-[0.738rem] w-1/2 text-customDubaiDescription text-center mx-auto pt-1">
                    2972 Westheimer Rd. Santa Ana, Illinois 85486 
                </p>
            </div>
            </div>
        </section>
    );
}
