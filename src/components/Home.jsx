import { useHistory } from "react-router-dom"
import { useAutoScrollToTop } from "../hooks/scrollHooks"
import ProgramsThumbComponent from "./ProgramsThumbComponent"


function getPostComponent(post) {
  const { src, title, path } = post
  return (
    <div key={title} className="relative flex w-72 h-72 mx-auto">
      <img className="w-full object-cover" src={src} alt={title} style={{ filter: "brightness(55%) contrast(125%)" }} />
      <button className="absolute top-0 left-0 w-64 h-56 mx-4 my-8 flex items-end hover:opacity-80">
        <span className="font-robo font-light text-2xl w-44 text-white text-left">
          {title}
        </span>
      </button>
    </div>
  )
}

function getTestimonialComponent(t) {
  const { text, author, } = t
  return (
    <div key={author} className="py-4 px-2 border border-gray-400 rounded-2xl font-robo font-light">
      <p className="text-lg leading-relaxed text-left">
        {text}
      </p>
      <p className="mt-6 text-gray-300">{author}</p>
    </div>
  )

}


const posts = [
  { src: "/assets/tech-2.jpg", title: "The Secret of B2B Sales", path: "/", },
  { src: "/assets/tech-0.jpg", title: "Being Proactive For Your Business", path: "/", },
  { src: "/assets/tech-1.jpg", title: "Why Networking is a Key", path: "/", },
]

const testimonials = [
  {
    text: "“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”", author: "Jerry Bluetone",
  },
  {
    text: "“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”", author: "Amanda Margott",
  },
  {
    text: "“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”", author: "Trisha Fox",
  },
]


const Home = () => {
  const history = useHistory()

  function handleProgramsClick() {
    history.push("/programs")
  }

  function handleAboutMeClick() {
    history.push("/about")
  }

  useAutoScrollToTop()

  return (
    <div className="w-full grid grid-cols-1 mt-24">
      <div className="grid grid-cols-1 pb-8 border-b border-gray-700">
        <h1 className=" mx-4 text-4xl font-robo font-light w-64 sm:w-full">Lead. Achieve.
Succeed.</h1>
        <p className=" mx-4 font-robo font-light text-sm mt-12 w-64 sm:w-full leading-relaxed">Online business development program that will boost your business growth.</p>
        <button onClick={handleProgramsClick} className=" mx-4 mt-6 w-32 py-1 border border-gray-600 rounded-full font-robo font-light capitalize">
          learn more
      </button>
        <img className="mt-10 w-full h-80 object-cover" src="/assets/bridge.jpg" alt="bridge the gap whatever" />
      </div>
      <div className="grid grid-cols-1 mt-16 pb-8 border-b border-gray-700">
        <h2 className=" mx-4 text-2xl font-robo font-light w-64 sm:w-full">About</h2>
        <p className=" mx-4 font-robo font-light from-gray-700 text-sm leading-relaxed tracking-wide mt-12">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        <button onClick={handleAboutMeClick} className=" mx-4 mt-6 w-32 py-1 border border-gray-600 rounded-full font-robo font-light capitalize">
          read more
      </button>
        <img className="mt-10 w-full h-96 object-cover" src="/assets/portrait.jpg" alt="it's me" />
      </div>
      <div className="grid grid-cols-1 mt-20 pb-6">
        <h2 className=" mx-4 text-2xl font-robo font-light w-64 sm:w-full">Join My Online Business Development Programs</h2>
        <p className=" mx-4 font-robo font-light from-gray-700 text-sm leading-relaxed tracking-wide mt-12">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        <div className="mt-20 grid grid-cols-1 gap-y-12">
          <ProgramsThumbComponent />
        </div>
      </div>
      <div className="mt-8">
        <p className="px-4  capitalize text-2xl font-robo font-light py-6" style={{ backgroundColor: "#e1dddb" }}>as seen on</p>
        <div className="py-8 grid grid-cols-1 gap-y-12 " style={{ backgroundColor: "#d2cdca" }}>
          <img className="h-16 w-36 mx-auto" src="/assets/brands/b1.svg" alt="brand 1" />
          <img className="h-10 w-36 mx-auto" src="/assets/brands/b2.svg" alt="brand 2" />
          <img className="h-16 w-36 mx-auto" src="/assets/brands/b3.svg" alt="brand 3" />
          <img className="h-10 w-36 mx-auto" src="/assets/brands/b4.svg" alt="brand 4" />
        </div>
        <div className="pt-2 pb-8 border-b border-white" style={{ backgroundColor: "#282828" }}>
          <p className="capitalize text-2xl text-gray-50 text-center font-robo font-light py-10 ">latest posts</p>
          <div className="grid grid-cols-1 gap-y-8">
            {
              posts.map(post => getPostComponent(post))
            }
          </div>
        </div>
        <div className="text-gray-50 grid grid-cols-1 pb-8 border-b border-gray-700" style={{ backgroundColor: "#282828" }}>
          <h2 className="mt-20 mx-4 text-2xl font-robo font-light w-64 sm:w-full ">Testimonials</h2>
          <div className="grid grid-cols-1 mt-6 px-4  gap-y-12 ">
            {
              testimonials.map(t => getTestimonialComponent(t))
            }
          </div>

        </div>
      </div>
    </div >
  )
}

export default Home