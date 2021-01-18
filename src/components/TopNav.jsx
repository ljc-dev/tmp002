import { useEffect, useRef, useState } from "react"
import { useScrollAway } from "../utils/handleMenuScrollAway"
import MenuIco from "../icons/menuIco"
import UserIco from "../icons/userIco"
import { Link, useHistory } from 'react-router-dom'

const TopNav = () => {
  const history = useHistory()
  const { menuRef, } = useScrollAway()
  const menuDropRef = useRef(null)
  const [isActiveState, setIsActiveState] = useState(null)

  function hideMenu() {
    document.documentElement.classList.add("overflow-hidden")
    menuDropRef.current.classList.remove("hidden")
    setTimeout(() => {
      menuDropRef.current.classList.add("fadeMenuIn")
    }, 100)
  }

  function closeMenu() {
    document.documentElement.classList.remove("overflow-hidden")
    menuDropRef.current.classList.remove("fadeMenuIn")
    setTimeout(() => {
      menuDropRef.current.classList.add("hidden")
    }, 300)
  }

  function handleMenuBtnClick() {
    setIsActiveState(!isActiveState)
    if (menuDropRef.current.classList.contains("hidden")) {
      hideMenu()
    } else {
      closeMenu()
    }
  }

  function handleMenuClick(e) {
    //check if clicked on a Link not around it
    if (e.target.classList.contains("capitalize")) {
      setIsActiveState(false)
      //close menu
      closeMenu()
    }
  }

  function handleTitleClick() {
    if (history.location.pathname !== "/") {
      history.push("/")
    } else {
      window.scrollTo(
        {
          top: 0,
          behavior: "smooth",
        }
      )
    }
  }

  return (
    <div ref={menuRef} className="flex fixed top-0 z-40 pl-6 pr-2 bg-white inset-x-0 w-full justify-between h-14 items-center transform transition-opacity duration-300">
      <button onClick={handleTitleClick} className="uppercase text-xl font-open">leah webb</button>
      <button onClick={handleMenuBtnClick} className="relative flex w-8 h-8 justify-center items-center" style={{ zIndex: 999 }}>
        <MenuIco isActive={isActiveState} />
      </button>
      <div ref={menuDropRef} className="hidden fixed inset-0 w-full h-screen z-50 px-4 bg-white transform transition-all opacity-0 -translate-y-8 duration-300 ease-out">
        <button className="px-2 mt-4 flex font-robo font-light"><UserIco classes={"w-6 h-6"} /><span className="ml-2 capitalize">log in</span></button>
        <div onClick={handleMenuClick} className="flex flex-col mt-12 font-robo font-light items-start">
          <Link to="/about" className="capitalize text-xl py-4 px-2">about</Link>
          <Link to="/programs" className="capitalize text-xl py-4 px-2">programs</Link>
          <Link to="/blog" className="capitalize text-xl py-4 px-2">blog</Link>
          <Link to="/contact" className="capitalize text-xl py-4 px-2">contact</Link>
        </div>
      </div>
    </div>
  )
}

export default TopNav