import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useRouteMatch } from "react-router-dom";
import { useAutoScrollToTop } from "../hooks/scrollHooks";

const programs = [
  { src: "/assets/abstract-1.jpg", title: "how to generate traffic", price: "free", duration: "10 days", id: "program1" },
  { src: "/assets/abstract-0.jpg", title: "it's all about sales", price: "free", duration: "1 week", id: "program2" },
  { src: "/assets/portrait.jpg", title: "social media bootcamp", price: "free", duration: "3 days", id: "program3" },
]

function getProgramDetails(programId) {
  console.log(programId);
  return programs.find(p => p.id === programId)
}

const ProgramDetails = () => {
  const today = new Date()
  const [startDate, setStartDate] = useState(today)
  const { params } = useRouteMatch()
  const { programId } = params
  console.log(programId);
  const programDetails = getProgramDetails(programId)
  const { src, title, duration, price, } = programDetails

  function handleJoinClick() {

  }

  function handleLoginClick() {

  }

  useAutoScrollToTop()

  return (
    <div className="mt-12 pb-24">
      <img className="mt-6 w-full h-64 object-cover" src={src} alt={title} />
      <h1 className="px-6 mt-12 capitalize font-robo font-light text-4xl tracking-tight">{title}</h1>
      <div className="mt-4 flex flex-col px-6">
        <p className="font-robo font-light text-base mt-2">{duration}</p>
        <button onClick={handleJoinClick} className="mt-6 w-full py-2 border border-gray-600 hover:bg-gray-800 hover:text-gray-50 rounded-full font-robo font-light capitalize transition-colors duration-200">
          join
        </button>
        <h2 className="mt-20 text-xl font-robo font-light">About</h2>
        <p className="font-robo font-light text-sm leading-snug mt-6">
          I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        <p className="font-robo font-light text-sm leading-snug mt-6">
          This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
        <p className="font-robo font-light text-sm leading-snug mt-6">
          You can also join this challenge via the mobile app. <a className="underline text-gray-600" href="https://github.com/ljc-dev">Go to the app</a>
        </p>
        <div className="mt-6 w-9 h-9 rounded-full bg-gray-200"></div>
        <h2 className="mt-12 text-xl font-robo font-light">Pick Your Start Date</h2>
        <p className="mt-6 text-sm font-robo font-light">Select the date when you want to start</p>
        <DatePicker className="mt-2 pl-4 self-start border border-gray-600 py-2"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showPopperArrow={false}
          minDate={today}
        />
        <h2 className="mt-12 text-xl font-robo font-light">Price</h2>
        <p className="mt-6 text-base font-robo font-light capitalize">{price}</p>
        <button onClick={handleJoinClick} className="mt-10 w-full py-2 border border-gray-600 hover:bg-gray-800 hover:text-gray-50 rounded-full font-robo font-light capitalize transition-colors duration-200">
          join
        </button>
        <p className="mt-6 text-sm font-robo font-light">Already a member? <button className="underline font-robo font-light text-sm" onClick={handleLoginClick}>Log in</button></p>
      </div>
    </div >
  );
}

export default ProgramDetails