import React, { Component } from 'react';
import PropTypes from 'prop-types';


class EditFishForm extends Component {
  static propTypes = {
    fish: PropTypes.shape({
      name: PropTypes.string,
      status: PropTypes.string,
      desc: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func,
  }

  handleChange = (event) => {
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    this.props.updateFish(this.props.index, updatedFish);
  }

  render() {
    const {
      name,
      price,
      status,
      desc,
      image,
    } = this.props.fish;
    const { deleteFish, index } = this.props;
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={name}
        />
        <input
          type="number"
          name="price"
          onChange={this.handleChange}
          value={price}
        />
        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={desc}
        />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={image}
        />
        <button onClick={() => deleteFish(index)}>Remove Fish</button>
      </div>
    );
  }
}

export default EditFishForm;
