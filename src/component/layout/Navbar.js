import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
  static defaultPropTypes = {
    title: 'ITP Drums',
    icon: 'fas fa-drums',
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i class="fas fa-drum"> </i> {this.props.title}
        </h1>
        x
      </nav>
    );
  }
}

export default Navbar;
