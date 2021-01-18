import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import smoothscroll from 'smoothscroll-polyfill'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Programs from './components/Programs'
import ScrollToTopBtn from './components/ScrollToTopBtn'
import TopNav from './components/TopNav'
function App() {
  //make smooth scroll work on all browsers
  smoothscroll.polyfill()

  return (
    <Router>
      <TopNav />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/programs">
          <Programs />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
      <ScrollToTopBtn />
    </Router>
  )
}

export default App
