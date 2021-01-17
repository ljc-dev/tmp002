import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import smoothscroll from 'smoothscroll-polyfill'
import Home from './components/Home'
function App() {
  //make smooth scroll work on all browsers
  smoothscroll.polyfill()

  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
