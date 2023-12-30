import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, Container, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Table, Collapse} from 'reactstrap';
import HeadDesign from 'components/Headers/HeadDesign';
import CaseDetailModal from '../../variables/CaseDetailModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FileUpload from '../../variables/FileUpload';

const Cases = () => {
  const [cases, setCases] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCaseDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [formData, setFormData] = useState({ caseNo: '', caseName: '', primaryClient: '', status: 'Open', dateOpened: '', dateClosed: '' });
  const [isDateInput, setIsDateInput] = useState(false);
  const [selectedCase, setSelectedCaseId] = useState(null); // State for the selected case ID
  const [file,setFile]=useState(null);
const [cid,setCid]=useState("");
const [transaction,setTransaction]=useState("");
const [isOpen1, setIsOpen1] = useState(true);
const [isOpen2, setIsOpen2] = useState(false);
const [isOpen3, setIsOpen3] = useState(false);

const toggleAccordion = (accordion) => {
  switch (accordion) {
    case 1:
      setIsOpen1(!isOpen1);
      break;
    case 2:
      setIsOpen2(!isOpen2);
      break;
    case 3:
      setIsOpen3(!isOpen3);
      break;
    default:
      break;
  }
};

    const handleSubmit =async(event)=>{
        event.preventDefault();
         try{
             if(file){
                 const formData = new FormData();
                 formData.append("file",file);
                 const response = await fetch('http://localhost:5000/upload',{
                     method:'POST',
                     body:formData
                 }).then(response=>response.json())
                 .then(data=>{ 
                    setCid(data.cid);
                    setTransaction(data.transactionHash)
                    toast.success('Case details Submit', {
                      position: toast.POSITION.TOP_CENTER,
                    });
                   console.log(data.cid)
                   console.log(data.transactionHash)
                 })
                 .catch(error=>{
                     console.error(error);
                 })
             }
         }catch(error){
            alert(error);
         }
    }
    const retreieveFile=(event)=>{
        try{
            const data = event.target.files[0];
            setFile(data);
            event.preventDefault();
        }catch(error){
            alert("Retrieve File Does Not Worked");
        }
    }

  const getCases = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/getCases');
      const data = await response.json();
      setCases(data);
    } catch (error) {
      console.error('Error fetching cases:', error);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleCaseDetails = () => {
    setIsDetailsOpen(!isCaseDetailsOpen);
    };

    const toggleShare = () => {
      setIsShareOpen(!isShareOpen);
      };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleDateInput = () => {
    setIsDateInput(!isDateInput);
  };

  const openCaseDetail = (caseId) => {
    // Find the selected case based on caseId
    const selectedCase = cases.find((caseItem) => caseItem._id === caseId);

    setFormData(selectedCase);
    setSelectedCaseId(caseId);
    toggleCaseDetails(); // Open the detail modal
  };

  const addEvidence = (caseId) => {
    // Find the selected case based on caseId
    const selectedCase = cases.find((caseItem) => caseItem._id === caseId);

    setFormData(selectedCase);
    setSelectedCaseId(caseId);
    toggleShare(); // Open the detail modal
  };

  const addNewCase = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/postCases', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        toggleModal();
        getCases();
        toast.success('Case details Saved', {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        console.error('Error adding case:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding case:', error);
    }
  };

  useEffect(() => {
    getCases();
  }, []);

  return (
    <>
    <ToastContainer/>
    <HeadDesign />
    <Container className="mt--7" fluid>
        <Row className="mt-5">
          <div className="col">
            <Card  className="shadow">
              <CardHeader className="border-0">
                <h1 style={{fontFamily: 'sans-serif'}}>Case Management</h1>
                <div className="d-flex justify-content-between align-items-center pt-0">
                    <h6></h6>
                    <Button color="success" onClick={toggleModal}>
                        Add New Case
                    </Button>
                </div>
            
                </CardHeader>
                <Modal isOpen={isModalOpen} toggle={toggleModal}>
                    <ModalHeader toggle={toggleModal}><h3>Add New Case</h3></ModalHeader>
                    <ModalBody>
                    <Form>
                        <FormGroup>
                        <Label for="caseNo">Case No.</Label>
                        <Input
                            type="text"
                            name="caseNo"
                            id="caseNo"
                            placeholder="Enter Case No."
                            onChange={handleInputChange}
                        />
                        </FormGroup>
                        <FormGroup>
                        <Label for="caseName">Case Name</Label>
                        <Input
                            type="text"
                            name="caseName"
                            id="caseName"
                            placeholder="Enter Case Name"
                            onChange={handleInputChange}
                        />
                        </FormGroup>
                        <FormGroup>
                        <Label for="primaryClient">Primary Client</Label>
                        <Input
                            type="text"
                            name="primaryClient"
                            id="primaryClient"
                            placeholder="Enter Primary Client"
                            onChange={handleInputChange}
                        />
                        </FormGroup>
                        <FormGroup>
                        <Label for="primaryClient">Opening Date</Label>
                        <Input
                            type={isDateInput ? 'date' : 'text'} // Change type based on state
                            name="dateOpened"
                            id="dateOpened"
                            placeholder="Enter Date of Opening"
                            onChange={handleInputChange}
                            onFocus={toggleDateInput} // Set type to 'date' on focus
                            onBlur={toggleDateInput} // Set type to 'text' on blur
                        />
                        </FormGroup>
                    </Form>
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={addNewCase}>
                        Save
                    </Button>
                    <Button color="secondary" onClick={toggleModal}>
                        Cancel
                    </Button>
                    </ModalFooter>
                </Modal>
                
                <Table className="align-items-center table-light table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">CASE NO.</th>
                    <th scope="col">CASE</th>
                    <th scope="col">PRIMARY CLIENT</th>
                    <th scope="col">STATUS</th>
                    <th scope="col">DATE OPENED</th>
                    <th scope="col">DATE CLOSED</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                    {cases.map((caseItem) => (
                        <tr key={caseItem._id}>
                        <th scope="row">
                            <span className="mb-0 text-sm">{caseItem.caseNo}</span>
                        </th>
                        <td>{caseItem.caseName}</td>
                        <td>{caseItem.primaryClient}</td>
                        <td>
                            <span
                            className={`text-${
                                caseItem.status === 'Open' ? 'success' : 'danger'
                            }`}
                            >
                            {caseItem.status}
                            </span>
                        </td>
                        <td>{caseItem.dateOpened}</td>
                        <td>
                            {caseItem.dateClosed ? (
                            caseItem.dateClosed
                            ) : (
                            <span className="text-muted">none</span>
                            )}
                        </td>
                        <td className="text-right">
                            <Button color="info" size="sm" 
                                onClick={() => openCaseDetail(caseItem._id)}>
                            View
                            </Button>
                            <Button color="primary" size="sm"
                                onClick={() => addEvidence(caseItem._id)}
                            >
                              Add
                            </Button>
                        </td>
                        </tr>
                    ))}
                </tbody>

              </Table>{/* style={{color:"#90EE90"}} */}

              
            </Card>
            
          </div>
        </Row>
    </Container>
    <CaseDetailModal
      isOpen={isCaseDetailsOpen}
      toggle={toggleCaseDetails}
      selectedCase={cases.find((caseItem) => caseItem._id === selectedCase)}
    />

        
        <Modal isOpen={isShareOpen} toggle={toggleShare} selectedCase={cases.find((caseItem) => caseItem._id === selectedCase)} size='lg'>
          <ModalHeader toggle={toggleShare}>
            <h3>
              Adding Evidence - Case ({selectedCase ? selectedCase.caseNo + ' - ' + selectedCase.caseName : ''})
            </h3>
            </ModalHeader>
          <ModalBody>
          
          <div className="col">
            <Card className="shadow">
              <CardBody>
              <div className="form">

                <form onSubmit={handleSubmit}>

                  <div className="row mb-3">
                    <Button
                      color="primary"
                      onClick={() => toggleAccordion(1)}
                      style={{ marginBottom: "1rem", width: "100%" }}
                    >
                      Document Category
                    </Button>
                    <Collapse isOpen={isOpen1} style={{ width: "100%" }}>
                      <Card>
                        <CardHeader>Select the type of the Document</CardHeader>
                        <CardBody>
                          <div className="mb-3 ml-5" style={{ display: "flex", gap: "20px" }}>
                            <div className="form-check mr-3">
                                <input className="form-check-input" type="radio" id="document" name="fileType" value="document" required />
                                <label className="form-check-label" htmlFor="document">
                                    Document
                                </label>
                            </div>
                            <div className="form-check mr-3">
                                <input className="form-check-input" type="radio" id="image" name="fileType" value="image" required />
                                <label className="form-check-label" htmlFor="image">
                                    Image
                                </label>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    
                    </Collapse>
                      <label htmlFor="exampleFormControlInput1">Title</label>
                      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" required/>
                    </div>


                    <div className="img-ctr mt-3">
                      {cid && <a href={`https://${cid}.ipfs.dweb.link`}><img src={`https://${cid}.ipfs.dweb.link`} height={"250px"} /></a>}

                    </div>
                    <div className="transaction mb-3">
                      {transaction && <a href={`https://mumbai.polygonscan.com/tx/${transaction}`} target="_blank" style={{ color: "green" }}>Transaction Detials</a>}
                    </div>

                    <div className="form-group mt-3" style={{ display: "flex", gap: "20px" }}>
                      <input type="file" className="choose mt-4" onChange={retreieveFile} id="upload" />
                      
                      {/* Label associated with the button */}
                      {/* <label htmlFor="upload" className="btn btn-info">
                        Select Document
                      </label> */}
                    </div>
                      
                    <button className="btn mt-3" style={{backgroundColor:'#2ECC71',color:"white"}}>Upload as Case Document</button>
                  </form>
                    {/* <MetaMaskButton /> */}
                  </div>
                </CardBody>
              </Card>
            </div>
          </ModalBody>
      </Modal>
    </>
  );
}

export default Cases;