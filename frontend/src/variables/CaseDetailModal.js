import React, {useState, useEffect} from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function CaseDetailModal({ isOpen, toggle, selectedCase }) {
  const [transactions, setTransactions] = useState([]);

  const getTransaction = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/getTransaction", {
        method: 'GET',
      });
      const data = await response.json();
      setTransactions(data); // Update state with the fetched data
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  }

  useEffect(() => {
    getTransaction();
  }, []);
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        Case Details ({selectedCase ? selectedCase.caseNo + ' - ' + selectedCase.caseName : ''})
      </ModalHeader>
      <ModalBody>
        {selectedCase ? (
          <>
            <p>Primary Client: {selectedCase.primaryClient}</p>
            <p>Status: {selectedCase.status}</p>
            <p>Date Opened: {selectedCase.dateOpened}</p>
            <p>Date Closed: {selectedCase.dateClosed || 'none'}</p>
            {transactions.map(transaction => (
            <p>Evidences: {<a href={`https://mumbai.polygonscan.com/tx/${transaction.transactionHash}`} target="_blank">Transaction</a>}</p>
            ))}</>
        ) : (
          <p>No case selected.</p>
        )}
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-secondary" onClick={toggle}>
          Close
        </button>
      </ModalFooter>
    </Modal>
  );
}

export default CaseDetailModal;