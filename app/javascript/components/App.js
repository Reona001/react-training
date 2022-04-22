import React from 'react'

class App extends React.Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/" component={About}/>
          <Route exact path="/" component={Contact}/>
        </Switch>
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
