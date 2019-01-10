import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import Login from './Login';

class Inventory extends PureComponent {
  static propTypes = {
    addFish: PropTypes.func,
    loadSampleFish: PropTypes.func,
    fishes: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number,
    }),
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
  }

  authenticate = () => {
    alert('ya');
  }

  render() {
    const {
      addFish,
      loadSampleFishes,
      fishes,
      updateFish,
      deleteFish,
    } = this.props;
    return <Login authenticate={this.authenticate} />;
    return (
      <div className="inventory">
        <h2>Inventory!!</h2>
        {Object.keys(fishes).map(key => (
          <EditFishForm
            key={key}
            index={key}
            fish={fishes[key]}
            updateFish={updateFish}
            deleteFish={deleteFish}
          />
        ))}
        <AddFishForm addFish={addFish} />
        <button onClick={loadSampleFishes}>Load Sample Fishes</button>
      </div>
    );
  }
}

export default Inventory;
