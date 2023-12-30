// import React from 'react';

// class MetaMaskButton extends React.Component {
//   handleOpenMetaMask = () => {
//     if (typeof window.ethereum !== 'undefined') {
//       // MetaMask is available, you can interact with it here
//       window.ethereum
//         .request({ method: 'eth_requestAccounts' })
//         .then((accounts) => {
//           // Handle the user's accounts here
//           console.log('MetaMask accounts:', accounts);
//         })
//         .catch((error) => {
//           console.error('MetaMask error:', error);
//         });
//     } else {
//       // MetaMask is not installed or not accessible
//       console.error('MetaMask is not installed or not accessible.');
//     }
//   };

//   render() {
//     return (
//       <button onClick={this.handleOpenMetaMask}>Open MetaMask</button>
//     );
//   }
// }

// export default MetaMaskButton;

import React from 'react';

class MetaMaskButton extends React.Component {
  handleOpenMetaMask = async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        // Request access to the user's Ethereum accounts
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });

        // Handle the user's accounts here
        console.log('MetaMask accounts:', accounts);
      } else {
        // MetaMask is not installed or not accessible
        console.error('MetaMask is not installed or not accessible.');
      }
    } catch (error) {
      console.error('MetaMask error:', error);
    }
  };

  render() {
    return (
      <button onClick={this.handleOpenMetaMask}>Connect to MetaMask</button>
    );
  }
}

export default MetaMaskButton;
