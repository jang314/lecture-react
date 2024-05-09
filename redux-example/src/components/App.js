import React, {Component, PropTypes } from 'react';
import Counter from './Counter'

class App extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div><Counter/></div>
    );
  }
}

export default App;
