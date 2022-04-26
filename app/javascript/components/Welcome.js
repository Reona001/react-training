import React from 'react'

// function Welcome(props) {
//   return <h1>Hello, { props.name } </h1>;
// }

// function Names() {
//   return (
//     <div>
//       <Welcome name="Kalvin" />
//       <Welcome name="Sarah" />
//       <Welcome name="Thomas" />
//       <Welcome name="Joan" />
//     </div>
//   );
// }

// export default Welcome




function Message(props) {
  return <h1>Hello, {props.name} </h1>;
}

class Welcome extends React.Component {


  render() {
    return (
      <div>
        <Message name="Kalvin" />
        <Message name="Sarah" />
        <Message name="Thomas" />
        <Message name="Joan" />
     </div>
    )
  }
}

export default Welcome
