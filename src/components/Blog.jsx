import { useAutoScrollToTop } from "../hooks/scrollHooks"

const posts = [
  { src: "/assets/tech-2.jpg", title: "The Secret of B2B Sales", text: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.", date: "Jan 4", path: "/", },
  { src: "/assets/post-2.jpg", title: "What is a SMART Goal?", text: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.", date: "Jan 4", path: "/", },
  { src: "/assets/tech-0.jpg", title: "Being Proactive For Your Business", text: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.", date: "Jan 4", path: "/", },
  { src: "/assets/tech-1.jpg", title: "Why Networking is a Key", text: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.", date: "Jan 4", path: "/", },
  { src: "/assets/post-4.jpg", title: "How to Conduct a SWOT Analysis", text: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.", date: "Jan 4", path: "/", },
  { src: "/assets/post-5.jpg", title: "Success - How Do You Measure it?", text: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.", date: "Jan 4", path: "/", },
]


function getPostComponent(post) {
  const { src, title, text, date, path } = post

  return (
    <div key={title} className="px-4 mt-8">
      <button className="w-full">
        <img className="w-full h-72 object-cover" src={src} alt={title} />
      </button>
      <div className="grid grid-cols-1 mx-4 border-b pb-10 border-gray-300">
        <p className="mt-6 capitalize font-robo font-light text-xs">{date}</p>
        <button className="text-left mt-4 font-robo font-light text-xl">{title}</button>
        <button>
          <p className="mt-3 font-robo font-light text-sm line-clamp-3 text-left">{text}</p>
        </button>
      </div>
    </div>
  )
}

const Blog = () => {

  useAutoScrollToTop()

  return (
    <div className="mt-12">
      <div className="pb-8 border-b border-gray-600">
        <h1 className="px-6 mt-24 capitalize font-robo font-light text-4xl">blog</h1>
        <p className="px-6 mt-12 font-robo font-light text-sm leading-relaxed">I'm a paragraph. Click here to add your own text and edit me.</p>
      </div>
      <div className="grid-cols-1 grid">
        {
          posts.map(p => getPostComponent(p))
        }
      </div>
    </div>
  );
}

export default Blog;