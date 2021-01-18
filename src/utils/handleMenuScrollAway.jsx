import { useEffect, useRef } from "react"

let lastScrolledPx = 0
let scrollEndTimeout

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
  // console.log(scrolledPx)
  // console.log(scrolledPx, lastScrolledPx);
  if (scrolledPx - lastScrolledPx > 0) {
    // scrolled down
    // console.log("down");
    if (scrolledPx - lastScrolledPx > 200 && !menuRef.current.classList.contains("opacity-0")) {
      menuRef.current.classList.add("opacity-0")
      setTimeout(() => {
        menuRef.current.classList.add("hidden")
      }, 400)
    }
  } else {
    // scrolled up
    // console.log("up");
    if (scrolledPx - lastScrolledPx < -200 && menuRef.current.classList.contains("hidden")) {
      menuRef.current.classList.remove("hidden")
    }
    setTimeout(() => {
      if (menuRef.current.classList.contains("opacity-0")) {
        menuRef.current.classList.remove("opacity-0")
      }
    }, 100)
  }

  if (scrollEndTimeout) {
    clearTimeout(scrollEndTimeout)
  }
  scrollEndTimeout = setTimeout(() => {
    lastScrolledPx = scrolledPx
  }, 200)
}