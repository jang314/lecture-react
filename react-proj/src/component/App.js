// import 는 ES6문법  var React = require('react')
import React from 'react';
import Contact from './Contact';




class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <Contact/>

    )
  }
}


export default App;
// module.export = App
