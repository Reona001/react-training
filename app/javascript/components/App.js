import React from 'react'
// unsupported: import { Route, Switch } from 'react-router-dom'
// new:
import { Routes, Route } from 'react-router-dom'

//https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
import Home from './Home'
import About from './About'
import Contact from './Contact'

class App extends React.Component {
  render () {
    return (
      <div>
          <Routes>
            <Route  path="/home" element={<Home />} />
            <Route  path="/about" element={<About />} />
            <Route  path="/contact" element={<Contact />}/>
          </Routes>
      </div>
    // <div>Hello World</div>
    // https://www.youtube.com/watch?v=5F_JUvPq410&ab_channel=zayne
    // ./bin/webpack-dev-server
    // yarn add react-router
    // yarn add react-router-dom
    )
  }
}

export default App
