import { useRef } from "react"

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
    subConfirmRef.current.classList.remove("hidden")
    setTimeout(() => {
      subConfirmRef.current.classList.add("hidden")
    }, 2000)
  }

  return (
    <div className="grid grid-cols-1 pb-8">
      <p className="text-xl px-4 mt-20 font-robo font-light">Get Great Business Tips to Your Mailbox. Subscribe.</p>
      <form onSubmit={handleSubmit} className="px-4 grid grid-cols-1">
        <label htmlFor="emailSub">Your email *</label>
        <div className="flex">
          <input required={true} onFocus={handleFocus} onChange={checkValididty} onBlur={checkValididty} className="py-0.5 pl-4 pr-1 rounded-l-full border hover:bg-gray-200 border-gray-700 w-40 ring-gray-700" type="email" name="myEmail" id="emailSub" />
          <button className="capitalize px-3 rounded-r-full border border-gray-700 font-robo font-light">subscribe</button>
        </div>
      </form>
      <p ref={subConfirmRef} className="hidden text-gray-500 font-robo font-light mt-2 px-4 text-sm tracking-tight">Thanks for subscribing!</p>
      <div className="grid grid-cols-1 font-robo font-light text-sm">
        <a className=" text-xs" href="tel:123-456-7890">123-456-7890</a>
        <a href="mailto:Info@mysite.com">Info@mysite.com</a>
        <p>500 Terry Francois St </p>
        <p>San Francisco, CA 94158</p>
      </div>
    </div>
  )
}

export default Footer