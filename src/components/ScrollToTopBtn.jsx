import { useScrollToTop } from "../hooks/scrollHooks";
import UpIco from "../icons/upIco";

function handleScrollToTopBtnClick() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

const ScrollToTopBtn = () => {
  const { scrollToTopRef } = useScrollToTop(null)
  return (
    <button onClick={handleScrollToTopBtnClick} ref={scrollToTopRef} className="hidden border border-gray-100 rounded-full bg-gray-800 text-gray-200 flex fixed bottom-12 right-6 w-10 h-10 justify-center items-center outline-none">
      <span className="sr-only">scroll to top</span>
      <UpIco classes="w-6 h-6" />
    </button>
  )
}

export default ScrollToTopBtn;