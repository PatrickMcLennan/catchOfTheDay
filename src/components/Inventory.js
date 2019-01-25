import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import Login from './Login';
import base, { firebaseApp } from '../base';

class Inventory extends Component {
  static propTypes = {
    fishes: PropTypes.object.isRequired,
    updateFish: PropTypes.func.isRequired,
    deleteFish: PropTypes.func.isRequired,
    loadSampleFishes: PropTypes.func.isRequired,
    addFish: PropTypes.func.isRequired,
    storeId: PropTypes.string.isRequired,
  };

  state = {
    uid: null,
    owner: null,
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = async (authData) => {
    const { storeId } = this.props;
    // 1. Look up the current store in the firebase databse
    const store = await base.fetch(storeId, { context: this });
    // 2. claim it if there is no owner
    if (!store.owner) {
      // save it as our own
      await base.post(`${storeId}/owner`, {
        data: authData.user.uid,
      });
    }
    // 3. Set hte state of the the inventory component to reflect the current user
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid,
    });
  }

  authenticate = (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  }

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ uid: null });
  }

  render() {
    const { uid, owner } = this.state;
    const {
      fishes,
      updateFish,
      addFish,
      deleteFish,
      loadSampleFishes,
    } = this.props;
    const logout = <button onClick={this.logout}>Log Out</button>;

    // 1. Check if they are logged in
    if (!uid) {
      return <Login authenticate={this.authenticate} />;
    }
    // 2. Check if they are the owner of the store

    if (uid !== owner) {
      return (
        <div>
          <p>Sorry, you are not the owner</p>
          {logout}
        </div>
      );
    }

    // They must be the owner at this point, so just render out the inventory
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {logout}
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
        <button onClick={loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
