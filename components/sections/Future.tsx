import JoinWaitlist from "../shared/JoinWaitlist";
import HomePropertyHeader from "./HomePropertyHeader";

export default function FutureRealEstate() {

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
    <section className="container-md py-24 mb-16 space-y-8 bg-customProperty rounded-lg relative">
      <HomePropertyHeader
        title="Join the Future of Real Estate with Homogenius - Where AI Meets Home Dreams"
        des=""
        type="row"
      />
        <div className="py-0 px-0 absolute top-[0] left-[0] w-full">
            <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center mx-auto"
                src="/img/Mask_Group.png"
            />
        </div>
        <div className="mx-auto w-full text-center">
        <JoinWaitlist/>
        </div>
    </section>
  );
}
