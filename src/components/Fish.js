import React, { PureComponent } from 'react';
import { formatPrice } from '../helpers';

class Fish extends PureComponent {
  handleClick = () => {
    const { addToOrder, index } = this.props;
    addToOrder(index);
  }

  render() {
    const {
      image,
      name,
      price,
      desc,
      status,
    } = this.props.details;
    const isAvailable = status === 'available';
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={this.handleClick}>
          {isAvailable ? 'Add To Order' : 'Sold Out'}
        </button>
      </li>
    );
  }
}

export default Fish;
