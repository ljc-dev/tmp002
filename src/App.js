import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import smoothscroll from 'smoothscroll-polyfill'
import Footer from './components/Footer'
import Home from './components/Home'
import ScrollToTopBtn from './components/ScrollToTopBtn'
import TopNav from './components/TopNav'
function App() {
  //make smooth scroll work on all browsers
  smoothscroll.polyfill()

  return (
    <Router>
      <TopNav />
      <Switch>
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
