import React, { Component } from 'react';

class AddFishForm extends Component {
  nameRef = React.createRef();

  priceRef = React.createRef();

  statusRef = React.createRef();

  descRef = React.createRef();

  imageRef = React.createRef();

  createFish = (e) => {
    e.preventDefault();
    const { addFish } = this.props;
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };
    addFish(fish);
    e.currentTarget.reset();
  }

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input name="price" ref={this.priceRef} type="number" placeholder="Price" />
        <select name="status" ref={this.statusRef}>
          <option>Fresh!</option>
          <option>Sold Out</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Description" />
        <input name="image" type="text" ref={this.imageRef} placeholder="Image" />
        <button type="submit">Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
