import React from 'react';

// class StorePicker extends Component {
//   render() {
//     return (
//       <form>
//         <h2>Please Enter A Store</h2>
//       </form>
//     );
//   }
// }

const StorePicker = () => (
  <form className="store-selector">
    <h2>Please Enter A Store</h2>
    <input type="text" required placeholder="Store Name" />
    <button type="submit">Visit Store</button>
  </form>
);


export default StorePicker;
