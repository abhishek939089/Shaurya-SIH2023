import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TransactionDetails() {
  const [transactionData, setTransactionData] = useState({});
  const transactionHash = '0x80b10fCfF4a99CdB96251dE1436707B5afeCe048'; // Replace with the actual transaction hash
  const apiKey = 'YourPolygonScanAPIKey'; // Replace with your PolygonScan API key

  useEffect(() => {
    // Make an API request to PolygonScan when the component mounts
    axios
      .get(`https://api.polygonscan.com/api/v1/tx/${transactionHash}?apikey=${apiKey}`)
      .then(response => {
        const data = response.data.result;
        setTransactionData(data);
      })
      .catch(error => {
        console.error('Error fetching transaction data:', error);
      });
  }, [transactionHash, apiKey]);

  return (
    <div>
      <h1>Transaction Details</h1>
      <div>
        <h2>Transaction Hash: {transactionHash}</h2>
        <p>Sender: {transactionData.from}</p>
        <p>Recipient: {transactionData.to}</p>
        <p>Status: {transactionData.txreceipt_status === '1' ? 'Successful' : 'Failed'}</p>
        <p>Gas Used: {transactionData.gasUsed} Wei</p>
        <p>Gas Price: {transactionData.gasPrice} Wei</p>  
      </div>
    </div>
  );
}

export default TransactionDetails;
