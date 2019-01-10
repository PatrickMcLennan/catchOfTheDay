import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends Component {
  myInput = React.createRef();

  static propTypes = {
    history: PropTypes.object,
  }

  goToStore = (event) => {
    const storeName = this.myInput.current.value;
    const { props } = this;
    event.preventDefault();
    props.history.push(`/store/${storeName}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          required
          ref={this.myInput}
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
