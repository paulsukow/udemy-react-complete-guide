import React, { Component } from 'react';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types'

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);

  }

  componentWillMount() {
    console.log('[Person.js] Inside component will mount');
  }

  componentDidMount() {
    console.log('[Person.js] Inside component did mount');
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }

  render () {
    console.log('[Person.js] Inside render');
    return (
      <Aux>
        <p onClick={this.props.click}>I'm a {this.props.name} I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input
          ref={(inp) => { this.inputElement = inp }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    )}
  //   return [
  //     <p key="1" onClick={this.props.click}>I'm a {this.props.name} I am {this.props.age} years old!</p>,
  //     <p key="2">{this.props.children}</p>,
  //     <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
  //   ]
  // }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
}

export default withClass(Person, classes.Person);
