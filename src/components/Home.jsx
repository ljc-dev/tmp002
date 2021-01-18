function getBlogComponent(blog) {
  const { src, title, price, duration, path } = blog
  return (
    <div key={title} className="px-4 mt-12">
      <img className="w-full h-48 object-cover" src={src} alt={title} />
      <h3 className="mt-4 capitalize font-robo font-light text-xl">{title}</h3>
      <p className="mt-1 capitalize font-robo font-light text-sm">{duration}</p>
      <p className="mt-4 capitalize font-robo font-light text-sm">{price}</p>
      <button className=" mt-4 w-full py-1.5 border border-gray-600 rounded-full font-robo font-light capitalize hover:bg-gray-900 hover:text-gray-50 transition duration-150 ease-in">view</button>
    </div>
  )
}

const blogs = [
  { src: "/assets/portrait.jpg", title: "how to generate traffic", price: "free", duration: "10 days", path: "/", },
  { src: "/assets/portrait.jpg", title: "it's all about sales", price: "free", duration: "1 week", path: "/", },
  { src: "/assets/portrait.jpg", title: "social media bootcamp", price: "free", duration: "3 days", path: "/", },
]

const Home = () => {
  return (
    <div className="w-full grid grid-cols-1 mt-24">
      <div className="grid grid-cols-1 pb-8 border-b border-gray-700">
        <h1 className=" mx-4 text-4xl font-robo font-light w-64 sm:w-full">Lead. Achieve.
Succeed.</h1>
        <p className=" mx-4 font-robo font-light text-sm mt-12 w-64 sm:w-full">Online business development program that will boost your business growth.</p>
        <button className=" mx-4 mt-8 w-32 py-1 border border-gray-600 rounded-full font-robo font-light capitalize">
          learn more
      </button>
        <img className="mt-10 w-full h-80 object-cover" src="/assets/bridge.jpg" alt="bridge the gap whatever" />
      </div>
      <div className="grid grid-cols-1 mt-16 pb-8 border-b border-gray-700">
        <h2 className=" mx-4 text-2xl font-robo font-light w-64 sm:w-full">About</h2>
        <p className=" mx-4 font-robo font-light from-gray-700 text-sm leading-relaxed tracking-wide mt-12">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        <button className=" mx-4 mt-6 w-32 py-1 border border-gray-600 rounded-full font-robo font-light capitalize">
          read more
      </button>
        <img className="mt-10 w-full h-96 object-cover" src="/assets/portrait.jpg" alt="it's me" />
      </div>
      <div className="grid grid-cols-1 mt-16 pb-8">
        <h2 className=" mx-4 text-2xl font-robo font-light w-64 sm:w-full">Join My Online Business Development Programs</h2>
        <p className=" mx-4 font-robo font-light from-gray-700 text-sm leading-relaxed tracking-wide mt-12">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        <div className="mt-8">
          {
            blogs.map(blog => getBlogComponent(blog))
          }
        </div>
      </div>
      <div className="mt-8">
        <p className=" capitalize text-2xl font-robo font-light py-6" style={{ backgroundColor: "#e1dddb" }}>as seen on</p>
        <div className="py-8 grid grid-cols-1 gap-y-12 " style={{ backgroundColor: "#d2cdca" }}>
          <img className="h-16 w-36 mx-auto" src="/assets/brands/b1.svg" alt="brand 1" />
          <img className="h-10 w-36 mx-auto" src="/assets/brands/b2.svg" alt="brand 2" />
          <img className="h-16 w-36 mx-auto" src="/assets/brands/b3.svg" alt="brand 3" />
          <img className="h-10 w-36 mx-auto" src="/assets/brands/b4.svg" alt="brand 4" />
        </div>

        <div className="py-8 grid grid-cols-1 gap-y-12 " style={{ backgroundColor: "#282828" }}>
          <p className=" capitalize text-2xl text-gray-50 text-center font-robo font-light py-6">latest posts</p>
        </div>
      </div>
    </div >
  )
}

export default Home