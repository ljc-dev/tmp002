import { useEffect, useRef } from "react"

const GOLDEN_RATIO = 0.4
let lockTimeout

function useScrollToTop() {
  const scrollToTopRef = useRef(null)
  useEffect(() => {
    document.addEventListener("scroll", () => handleScroll(scrollToTopRef))
    return () => document.removeEventListener("scroll", () => handleScroll(scrollToTopRef))
  }, [])
  return { scrollToTopRef, }
}

function handleScroll(scrollToTopRef) {
  if (!scrollToTopRef.current) return
  const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrollTop = document.documentElement.scrollTop
  if ((scrollTop / scrollTotal) > GOLDEN_RATIO) {
    if (scrollToTopRef.current.classList.contains("hidden")) {
      scrollToTopRef.current.classList.remove("hidden")
      if (lockTimeout) {
        clearTimeout(lockTimeout)
      }
      lockTimeout = setTimeout(() => {
        if (scrollToTopRef.current.classList.contains("opacity-0")) {
          scrollToTopRef.current.classList.remove("opacity-0")
        }
      }, 100)
    }
  } else {
    if (!scrollToTopRef.current.classList.contains("opacity-0")) {
      scrollToTopRef.current.classList.add("opacity-0")
      if (lockTimeout) {
        clearTimeout(lockTimeout)
      }
      lockTimeout = setTimeout(() => {
        scrollToTopRef.current.classList.add("hidden")
      }, 300)
    }
  }
}

export {
  useScrollToTop,
}