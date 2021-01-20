import { useRef } from "react"
import FacebookIco from "../icons/facebookIco"
import InstaIco from "../icons/instaIco"
import LinkedInIco from "../icons/linkedinIco"

function handleFocus(e) {
  if (!e.target.checkValidity() || !e.target.value) {
    e.target.classList.add("ring-1")
    e.target.classList.remove("hover:bg-gray-200")
  }
}

function checkValididty(e) {
  if (!e.target.checkValidity() || !e.target.value) {
    e.target.classList.remove("ring-gray-700")
    e.target.classList.remove("border-gray-700")
    e.target.classList.add("ring-red-500")
    e.target.classList.add("border-red-500")
  } else {
    e.target.classList.remove("ring-red-500")
    e.target.classList.remove("border-red-500")
    e.target.classList.add("ring-gray-700")
    e.target.classList.add("border-gray-700")
  }
}

const Footer = () => {
  const subConfirmRef = useRef(null)


  function handleSubmit(e) {
    e.preventDefault()
    subConfirmRef.current.innerText = "Thanks for subscribing!"
    subConfirmRef.current.classList.remove("opacity-0")
    setTimeout(() => {
      subConfirmRef.current.classList.add("opacity-0")
      subConfirmRef.current.innerText = ""
    }, 2000)
  }

  return (
    <div className="border-t border-gray-600 grid grid-cols-1 pb-10">
      <p className="text-lg px-4 mt-12 font-robo font-light">Get Great Business Tips to Your Mailbox. Subscribe.</p>
      <form onSubmit={handleSubmit} className="mt-4 px-4 grid grid-cols-1">
        <label htmlFor="emailSub">Your email *</label>
        <div className="flex mt-4 ">
          <input required={true} onFocus={handleFocus} onChange={checkValididty} onBlur={checkValididty} className="py-0.5 pl-4 pr-1 rounded-l-full border hover:bg-gray-200 border-gray-700 w-40 ring-gray-700" type="email" name="myEmail" id="emailSub" />
          <button className="capitalize px-3 rounded-r-full border border-gray-700 font-robo font-light">subscribe</button>
        </div>
      </form>
      <p ref={subConfirmRef} className="opacity-0 h-4 text-gray-500 font-robo font-light mt-2 px-4 text-sm tracking-tight"></p>
      <div className="mt-12 px-4 flex flex-col items-start font-robo font-light text-sm">
        <a className="font-mont" href="tel:123-456-7890">123-456-7890</a>
        <a className="mt-2" href="mailto:Info@mysite.com">Info@mysite.com</a>
        <p className="mt-2">500 Terry Francois St <br />San Francisco, CA 94158</p>
      </div>
      <div className="flex py-4 px-4 space-x-4">
        <a className="flex w-6 h-6 justify-center items-center" href="https://www.linkedin.com/in/jc-lee-a939831b5/"><LinkedInIco classes={"w-4 h-5"} /></a>
        <a className="flex w-6 h-6 justify-center items-center" href="https://www.facebook.github.io/"><FacebookIco classes={"w-5 h-4"} /></a>
        <a className="flex w-6 h-6 justify-center items-center" href="https://www.instagram.com/ljc_dev/"><InstaIco classes={"w-6 h-6"} /></a>
      </div>
      <p className="mt-2 leading-relaxed px-4 font-robo font-light text-sm -3/4 md:w-full md:col-start-3 md:col-span-5">
        © 2023 by Leah Webb.<br />
        Proudly created with <a href="https://reactjs.org/docs/getting-started.html">React</a> and <a href="https://tailwindcss.com/">TailwindCSS</a> </p>

    </div>
  )
}

export default Footer