import { useRef } from "react";

const Contact = () => {
  const subConfirmRef = useRef(null)

  function handleContactSubmit(e) {
    e.preventDefault()
    subConfirmRef.current.innerText = "Thanks for subscribing!"
    subConfirmRef.current.classList.remove("opacity-0")
    setTimeout(() => {
      subConfirmRef.current.classList.add("opacity-0")
      subConfirmRef.current.innerText = ""
    }, 2000)
  }


  function handleFocus(e) {
    if (!e.target.checkValidity() || !e.target.value) {
      e.target.classList.add("ring-1")
      e.target.classList.remove("hover:bg-gray-200")
    }
  }

  function handleBlur(e) {
    if (!e.target.checkValidity() || !e.target.value) {
      e.target.classList.remove("ring-1")
      e.target.classList.add("hover:bg-gray-200")
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

  return (
    <div className="mt-12">
      <h1 className="px-6 mt-24 capitalize font-robo font-light text-4xl">Collaborate and Consult</h1>
      <p className="px-6 mt-20 font-robo font-light text-sm">For any inquiries please email me at Info@mysite.com or use the form below.</p>
      <div className="mt-10 border-t border-gray-600">
        <h2 className="px-6 mt-20 capitalize font-robo font-light text-2xl">Get in Touch</h2>
        <form onSubmit={handleContactSubmit} className="flex flex-col mt-6 px-6">
          <label htmlFor="firstNameId" className="capitalize font-robo font-light text-lg">first name</label>
          <input onFocus={handleFocus} onBlur={handleBlur} className="mt-3 py-0.5 pl-4 pr-1 rounded-full border hover:bg-gray-200 focus:bg-transparent border-gray-700 w-full ring-gray-700" type="text" name="myFirstName" id="firstNameId" />
          <label htmlFor="lastNameId" className="mt-6 capitalize font-robo font-light text-lg">last name</label>
          <input onFocus={handleFocus} onBlur={handleBlur} className=" font-robo font-light mt-3 py-0.5 pl-4 pr-1 rounded-full border hover:bg-gray-200 focus:bg-transparent border-gray-700 w-full ring-gray-700" type="text" name="myLastName" id="lastNameId" />
          <label htmlFor="emailId" className="mt-6 capitalize font-robo font-light text-lg">email *</label>
          <input onFocus={handleFocus} onChange={checkValididty} onBlur={checkValididty} required={true} className=" font-robo font-light mt-3 py-0.5 pl-4 pr-1 rounded-full border hover:bg-gray-200 focus:bg-transparent border-gray-700 w-full ring-gray-700" type="email" name="myEmail" id="emailId" />
          <label htmlFor="phoneId" className="mt-6 capitalize font-robo font-light text-lg">phone</label>
          <input onFocus={handleFocus} onBlur={handleBlur} className=" font-robo font-light mt-3 py-0.5 pl-4 pr-1 rounded-full border hover:bg-gray-200 focus:bg-transparent border-gray-700 w-full ring-gray-700" type="text" name="myPhone" id="phoneId" />
          <label htmlFor="msgId" className="mt-6 capitalize font-robo font-light text-lg">message</label>
          <textarea onFocus={handleFocus} onBlur={handleBlur} className=" font-robo font-light text-gray-700 resize-none mt-3 h-32 py-0.5 pl-4 pr-1 rounded-2xl border hover:bg-gray-200 focus:bg-transparent border-gray-700 w-full ring-gray-700" type="text" name="myMsg" id="msgId" />
          <button className="mt-6 px-10 self-start py-1 rounded-2xl border border-gray-700 capitalize">submit</button>
        </form>
        <p ref={subConfirmRef} className="opacity-0 h-4 text-gray-500 font-robo font-light mt-2 px-6 text-sm tracking-tight"></p>
        <img className="mt-10 w-full h-96 object-cover" src="/assets/pattern.jpg" alt="lines" aria-hidden="true" />
      </div>
    </div>
  );
}

export default Contact;