import JoinWaitlist from "../shared/JoinWaitlist";

export default function Hero() {
    return (
        <section className="container-lg min-h-screen relative mt-10 flex items-center justify-center overflow-x-hidden">
            <video
                muted
                autoPlay
                loop
                className="w-full h-[86vh] object-cover rounded-2xl"
            >
                <source src="/videos/hero-vid.mp4" />
            </video>
            <div className="absolute h-[86vh] bg-black bg-opacity-[67%] w-full top-22 rounded-2xl flex flex-col items-center justify-center">
                <div className="w-11/12 lg:w-[60%] text-white space-y-8 text-center">
                    <h1 className="text-4xl md:text-[2.938rem] leading-snug font-black capitalize">Discover Your Dream Home With Cutting-Edge AI Technology</h1>
                    <p className="leading-relaxed font-medium">Homogenius brings you an unparalleled experience in property search and discovery, Say goodbye to the old ways of browsing endless listings. With AI Copilot, your perfect home is just a click away.</p>
                    <JoinWaitlist />
                </div>
            </div>
        </section>
    )
}
