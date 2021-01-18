import { useEffect, useRef } from "react"


export function useScrollAway() {
  const menuRef = useRef(null)
  useEffect(() => {
    document.addEventListener("scroll", () => handleScrollAway(menuRef))
    return () => document.removeEventListener("scroll", () => handleScrollAway(menuRef))
  }, [])
  return { menuRef }
}

function handleScrollAway(menuRef) {
  const scrolledPx = document.documentElement.scrollTop
  console.log(scrolledPx)
  if (scrolledPx < 100) {
    if (menuRef.current.classList.contains("hidden")) {
      menuRef.current.classList.remove("hidden")
    }
    setTimeout(() => {
      if (menuRef.current.classList.contains("opacity-0")) {
        menuRef.current.classList.remove("opacity-0")
      }
    }, 100)
  } else {
    if (!menuRef.current.classList.contains("opacity-0")) {
      menuRef.current.classList.add("opacity-0")
      setTimeout(() => {
        menuRef.current.classList.add("hidden")
      }, 400)
    }
  }
}