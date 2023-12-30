import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, Container, Row, Col, Button, Modal, ModalHeader, Form, FormGroup, ModalBody, Label, Input } from "reactstrap";
import HeadDesign from 'components/Headers/HeadDesign';

function Users() {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ user: ''});
  const [master, setMaster] = useState('');

  const getUsers = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/getuser", {
        method: 'GET',
      });
      const data = await response.json();
      setUsers(data); // Update state with the fetched data
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearchInputChange = (e) => {
    const { value } = e.target;
    setMaster(value); // Update master state with search input
  };

  useEffect(() => {
    getUsers();
  }, []);

  const filteredData = users.filter(user =>
    user.name.includes(master) || 
    user.metaWallet.includes(master) || 
    user.Wallet.includes(master) || 
    user.contract.includes(master) || 
    user.email.includes(master) 
    )

  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
        <div className="d-flex justify-content-between align-items-center pt-0 mb-4">
                    <h6></h6>
                    <Button color="success" onClick={toggleModal}>
                        Search
                    </Button>
                </div>

                <Modal isOpen={isModalOpen} toggle={toggleModal} size='lg'>
                    <ModalHeader toggle={toggleModal}>
                        <Input
                            type="search"
                            name="search"
                            id="search"
                            placeholder="Search User"
                            value={master}
                            onChange={handleSearchInputChange}
                            className='ml-7'
                            style={{
                              alignContent: "center",
                              display: "block", // Ensures the input takes up the full width
                              margin: "0 auto",  // Centers the input horizontally
                              width: '200%',
                              borderColor: 'blue', borderStyle: 'solid', borderRadius: '2px'
                            }}
                        />
                    </ModalHeader>
                    <ModalBody>
                    { filteredData.map(user => (
                         <Col lg="4" xl="12" mb="6" ml='3' key={user._id}>
                         <Card className="card-stats mb-6 mb-xl-4">
                           <CardBody>
                             <Row>
                             <div className="col">
         <div className="mb-3">
           <label className="text-uppercase text-muted">Name</label>
           <h5 className="font-weight-bold mb-0">{user.name}</h5>
         </div>
         <div className="mb-3">
           <label className="text-uppercase text-muted">Phone</label>
           <h5 className="font-weight-bold mb-0">{user.phone}</h5>
         </div>
         <div className="mb-3">
           <label className="text-uppercase text-muted">Contract Address</label>
           <h5 className="font-weight-bold mb-0">{user.contract}</h5>
         </div>
         <div className="mb-3">
           <label className="text-uppercase text-muted">Wallet Address</label>
           <h5 className="font-weight-bold mb-0">{user.Wallet}</h5>
         </div>
         <div className="mb-3">
           <label className="text-uppercase text-muted">MetaWallet</label>
           <h5 className="font-weight-bold mb-0">{user.metaWallet}</h5>
         </div>
       </div>
       
                               <Col className="col-auto">
                                 <div className="icon icon-shape bg-success text-white ni ni-single-02">
                                   <i className="fas fa-chart-bar" />
                                 </div>
                               </Col>
                             </Row>
                             
                           </CardBody>
                         </Card>
                       </Col>
                        ))}
                    </ModalBody>
                </Modal>

          <div className="header-body">
            {/* Card stats */}
            <Row>
              {users.map(user => (
                <Col lg="2" xl="6" mb="6" key={user._id}>
                  <Card className="card-stats mb-6 mb-xl-4">
                    <CardBody>
                      <Row>
                      <div className="col">
  <div className="mb-3">
    <label className="text-uppercase text-muted">Name</label>
    <h5 className="font-weight-bold mb-0">{user.name}</h5>
  </div>
  <div className="mb-3">
    <label className="text-uppercase text-muted">Phone</label>
    <h5 className="font-weight-bold mb-0">{user.phone}</h5>
  </div>
  <div className="mb-3">
    <label className="text-uppercase text-muted">Contract Address</label>
    <h5 className="font-weight-bold mb-0">{user.contract}</h5>
  </div>
  <div className="mb-3">
    <label className="text-uppercase text-muted">Wallet Address</label>
    <h5 className="font-weight-bold mb-0">{user.Wallet}</h5>
  </div>
  <div className="mb-3">
    <label className="text-uppercase text-muted">MetaWallet</label>
    <h5 className="font-weight-bold mb-0">{user.metaWallet}</h5>
  </div>
</div>

                        <Col className="col-auto">
                          <div className="icon icon-shape bg-success text-white ni ni-single-02">
                            <i className="fas fa-chart-bar" />
                          </div>
                        </Col>
                      </Row>
                      
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Users;