import React, { Component } from 'react';

class EditFishForm extends Component {
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
