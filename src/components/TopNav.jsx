import { useEffect, useRef, useState } from "react"
import { useScrollAway } from "../hooks/handleMenuScrollAway"
import MenuIco from "../icons/menuIco"
import UserIco from "../icons/userIco"
import { Link } from 'react-router-dom'

const TopNav = () => {
  const { menuRef, } = useScrollAway()
  const menuDropRef = useRef(null)
  const [isActiveState, setIsActiveState] = useState(null)

  function handleMenuBtnClick() {
    setIsActiveState(!isActiveState)
    if (menuDropRef.current.classList.contains("hidden")) {
      document.documentElement.classList.add("overflow-hidden")
      menuDropRef.current.classList.remove("hidden")
      setTimeout(() => {
        menuDropRef.current.classList.add("fadeMenuIn")
      }, 100)
    } else {
      document.documentElement.classList.remove("overflow-hidden")
      menuDropRef.current.classList.remove("fadeMenuIn")
      setTimeout(() => {
        menuDropRef.current.classList.add("hidden")
      }, 300)
    }
  }

  function handleMenuClick(e) {
    //check if clicked on a Link not around it
    if (e.target.classList.contains("capitalize")) {
      //close menu
      document.documentElement.classList.remove("overflow-hidden")
      menuDropRef.current.classList.remove("fadeMenuIn")
      setIsActiveState(false)
    }
  }

  return (
    <div ref={menuRef} className="flex fixed top-0 inset-x-0 w-full justify-between h-14 items-center px-4 transform transition-opacity duration-300">
      <p className="uppercase text-xl font-open">leah webb</p>
      <button onClick={handleMenuBtnClick} className="relative flex w-8 h-8 justify-center items-center" style={{ zIndex: 999 }}>
        <MenuIco isActive={isActiveState} />
      </button>
      <div ref={menuDropRef} className="hidden fixed inset-0 w-full h-screen z-50 px-4 bg-white transform transition-all opacity-0 -translate-y-8 duration-300 ease-out">
        <button className="px-2 mt-4 flex font-robo font-light"><UserIco classes={"w-6 h-6"} /><span className="ml-2 capitalize">log in</span></button>
        <div onClick={handleMenuClick} className="flex flex-col mt-12 font-robo font-light items-start">
          <Link to="/" className="capitalize text-xl py-4 px-2">about</Link>
          <Link to="/" className="capitalize text-xl py-4 px-2">programs</Link>
          <Link to="/" className="capitalize text-xl py-4 px-2">contact</Link>
          <Link to="/" className="capitalize text-xl py-4 px-2">blog</Link>
        </div>
      </div>
    </div>
  )
}

export default TopNav