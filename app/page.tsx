import HomeDiscover from "@/components/sections/Discover";
import FutureRealEstate from "@/components/sections/Future";
import Hero from "@/components/sections/Hero";
import HomeSearch from "@/components/sections/HomeSearch";
import JoinUs from "@/components/sections/JoinUs";
import PropertyDiscover from "@/components/sections/Property";
import HomeTrends from "@/components/sections/Trends";
import HomeWorkes from "@/components/sections/Workes";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeSearch />
      <HomeDiscover/>
      <HomeWorkes/>
      <PropertyDiscover/>
      <HomeTrends/>
      <FutureRealEstate/>
    </>
  )
}