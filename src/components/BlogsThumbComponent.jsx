const programs = [
  { src: "/assets/abstract-1.jpg", title: "how to generate traffic", price: "free", duration: "10 days", path: "/", },
  { src: "/assets/abstract-0.jpg", title: "it's all about sales", price: "free", duration: "1 week", path: "/", },
  { src: "/assets/portrait.jpg", title: "social media bootcamp", price: "free", duration: "3 days", path: "/", },
]

const ProgramsThumbComponent = () => {
  return (
    <>
      {
        programs.map(p => getProgramComponent(p))
      }
    </>
  )
}

export default ProgramsThumbComponent;


function getProgramComponent(program) {
  const { src, title, price, duration, path } = program
  return (
    <div key={title} className="px-4">
      <button className="w-full">
        <img className="w-full h-56 object-cover" src={src} alt={title} />
      </button>
      <button className="mt-8 capitalize font-robo font-light text-xl">{title}</button>
      <p className="mt-1 capitalize font-robo font-light text-sm">{duration}</p>
      <p className="mt-4 capitalize font-robo font-light text-sm">{price}</p>
      <button className=" mt-4 w-full py-1.5 border border-gray-600 rounded-full font-robo font-light capitalize hover:bg-gray-900 hover:text-gray-50 transition duration-150 ease-in">view</button>
    </div>
  )
}