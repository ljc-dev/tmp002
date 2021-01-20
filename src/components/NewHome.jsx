import "../utils/slick/slick.css"
import "../utils/slick/slick-theme.css"
import Slider from "react-slick"
import { useHistory } from "react-router-dom"
import { useRef } from "react"

const posts = [
  { src: "/assets/tech-2.jpg", title: "The Secret of B2B Sales", text: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.", date: "Jan 4", path: "/blogs/blog1", },
  { src: "/assets/post-2.jpg", title: "What is a SMART Goal?", text: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.", date: "Jan 4", path: "/blogs/blog2", },
  { src: "/assets/tech-0.jpg", title: "Being Proactive For Your Business", text: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.", date: "Jan 4", path: "/blogs/blog3", },
  { src: "/assets/tech-1.jpg", title: "Why Networking is a Key", text: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.", date: "Jan 4", path: "/blogs/blog4", },
  { src: "/assets/post-4.jpg", title: "How to Conduct a SWOT Analysis", text: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.", date: "Jan 4", path: "/blogs/blog5", },
  { src: "/assets/post-5.jpg", title: "Success - How Do You Measure it?", text: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.", date: "Jan 4", path: "/blogs/blog6", },
]


function getBlogComponent(blog, goToBlogDetails) {
  const { src, title, path } = blog
  return (
    <div key={title} className="">
      <div className="flex flex-col justify-center items-center w-64 mx-auto pb-16">
        <button onClick={() => goToBlogDetails(path)} className="">
          <img className="w-64 h-36 object-cover" src={src} alt={title} />
        </button>
        <button onClick={() => goToBlogDetails(path)} className="text-left leading-tight px-6 mt-4 font-robo font-light text-lg">{title}</button>
      </div>
    </div>
  )
}

const NewHome = () => {
  const history = useHistory()
  let isSwiping = false
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    onSwipe: () => updateSwipeState(true),
    afterChange: () => updateSwipeState(false),
  }

  function updateSwipeState(state) {
    isSwiping = state
  }

  function goToBlogDetails(path) {
    if (isSwiping) {
      return
    }
    return history.push(path)
  }

  return (
    <div className="mt-20 mb-10">
      <Slider className="" {...settings}>
        {
          posts.map(p => getBlogComponent(p, goToBlogDetails))
        }
      </Slider>
    </div>
  )
}

export default NewHome