// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import App from '../components/App'

// import PropTypes from 'prop-types'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    // <App />,
    <Router>
      <Routes>
        <Route path="*" element={<App/>}></Route>
      </Routes>
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})



// const Hello = props => (
//   <div>Hello {props.name}!</div>
// )

// Hello.defaultProps = {
//   name: 'David'
// }

// Hello.propTypes = {
//   name: PropTypes.string
// }
