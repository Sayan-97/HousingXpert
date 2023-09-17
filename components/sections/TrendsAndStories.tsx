import Image from "next/image"
import HomePageHeader from "./HomePageHeader"

export default function TrendsAndStories() {

  const stories = [
    {
      img: '/img/TrendsImg1.png',
      title: '',
      des: ''
    },
    {
      img: '/img/TrendsImg2.png',
      title: '',
      des: ''
    },
    {
      img: '/img/TrendsImg3.png',
      title: '',
      des: ''
    },
  ]

  return (
    <section className="container-md py-16 space-y-16">
      <HomePageHeader 
        title="Uncover latest trends and stories"
        des="Want to see more? Check out all our listings and let AI Copilot guide you to your perfect match"
        type="row"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((item, index) => (
          <div key={index} className="relative">
            <img 
              src={item.img}
              alt='img'
              className="w-full"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
