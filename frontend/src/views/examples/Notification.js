import React, { useState, useEffect } from 'react';
import {
  Badge,
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Media,
} from "reactstrap";
// core components
import Header from "components/Headers/HeadDesign";

function Notifications() {
  const [transactions, setTransactions] = useState([]);
  const [users, setUsers] = useState([]);

  const getTransaction = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/getTransaction");
      const data = await response.json();
      const transactionsWithSeen = data.map(transaction => ({ ...transaction, seen: false }));
      setTransactions(transactionsWithSeen);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  }
  
  const getUsers = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/getuser", {
        method: 'GET',
      });
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  const markAsSeen = (index) => {
    const updatedTransactions = [...transactions];
    updatedTransactions[index].seen = true;
    setTransactions(updatedTransactions);
  }

  useEffect(() => {
    getTransaction();
    getUsers();
  }, []);

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Transaction Details</h3>
              </CardHeader>
              <Table className="align-items-center table-white table-flush" responsive>
                <thead className="thead-white">
                  <tr>
                    <th>Sender</th>
                    <th>Receiver</th>
                    <th scope='col'>Received At</th>
                    <th scope='col'>Status</th>
                    <th scope="col">View Transaction</th>
                    <th scope="col">Notification</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.slice().reverse().map((transaction, index) => (
                    <tr key={index}>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("../../assets/img/theme/ethereum-6278326_1280.png")}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">{users.find(user => user.Wallet === transaction.from)?.name || 'Unknown User'}</span>
                          </Media>
                        </Media>
                      </th>
                      <td>
                        {users.find(user => user.metaWallet === transaction.to)?.name || 'Unknown User'}
                      </td>
                      <td>
                        {transaction.createdAt}
                      </td>
                      <td style={{ color: "#90EE90" }}>Success</td>
                      <td>
                        <a
                          href={`https://mumbai.polygonscan.com/tx/${transaction.transactionHash}`}
                          target="_blank"
                        >
                          Transaction
                        </a>
                      </td>
                      {index === 0 && !transaction.seen && (
                        <td>
                          <Badge color="danger" onClick={() => markAsSeen(index)}>New</Badge>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Notifications;
