import {useState} from "react";
import { useUserContext } from "context/UserContext";
import axios from "axios";
// import '../assets/css/FileUpload.css';
// import MetaMaskButton from "./MetaMaskButton";
import {
  Row,
  Button,
  Card,
  CardBody,
  CardHeader,
  Collapse,
  Container,
} from "reactstrap";
import { useNavigate } from "react-router-dom";


const FileUpload=()=>{
  
const navigate = useNavigate()
  
const [file,setFile]=useState(null);
const [cid,setCid]=useState("");
const [errorMessage, setErrorMessage] = useState("");
const [transaction,setTransaction]=useState("");
const [isOpen1, setIsOpen1] = useState(true);
const [isOpen2, setIsOpen2] = useState(false);
const [isOpen3, setIsOpen3] = useState(true);
const [message1, setMessage1] = useState('');
const [message2, setMessage2] = useState('');
const [title, setTitle] = useState('');
const [name, setName] = useState();
const[password, setPassword] = useState('');

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

    const handleSubmit = async(event)=>{
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
                   console.log(data.cid)
                   console.log(data.transactionHash)
                   console.log("https://mumbai.polygonscan.com/tx/"+data.transactionHash)
                 })
                 .catch(error=>{
                     console.error(error);
                 })
             }

             if (message1 && message2) {
              await fetch('http://localhost:5000/share', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, message1, message2 }),
              });
            }
          } catch (error) {
            alert(error);
          }
        };
    const retreieveFile=(event)=>{
        try{
            const data = event.target.files[0];
            setFile(data);
            event.preventDefault();
        }catch(error){
            alert("Retrieve File Does Not Worked");
        }
    }

    // login file name
      // login name of user
      const loginName = async(event)=>{
  try {

    const response = await axios.post('http://localhost:5000/login', { name, password });
       setName(name)
       setPassword(password);
    if (response && response.data) {
      console.log(response.data);
      alert("Success");

      navigate('/');
    } else {
      setErrorMessage("Login failed: Response did not contain data.");
    }
  } catch (error) {
    console.warn("An error occurred:", error);

    if (error.response && error.response.data) {
      console.warn(error.response.data);
      setErrorMessage("Please Enter Correct password !!!");
    } else {
      console.warn("Unknown error occurred.");
      setErrorMessage("An unknown error occurred.");
    }
  }
};


loginName()



    
return<>

    
  <div className="form">

    <form onSubmit={handleSubmit}>

      <div className="row mb-3">
      <Button
        color="primary"
        onClick={() => toggleAccordion(3)}
        style={{ marginBottom: "1rem", width: "100%" }}
      >
        Transmission Data
      </Button>
      <Collapse isOpen={isOpen3} style={{ width: "100%" }}>
        <Card>
          <CardHeader>Please Enter the Whole detail to Complete the Transaction</CardHeader>
          <CardBody>
          <label htmlFor="message1">Sent from</label>
            <div className="mb-3">
              <input
                className="form-control" 
                id="description" 
                name="Description_txt" 
                placeholder=""
                value={message1} 
                onChange={(e) => setMessage1(e.target.value) } 
                required />
            </div>
            {/* <Button color="success" onClick={handleSubmit}>Submit</Button> */}
          </CardBody>
          <CardBody>
          <label htmlFor="message1">Sent to</label>
            <div className="mb-3">
              <input
                className="form-control" 
                id="description" 
                name="Description_txt" 
                value={message2} 
                onChange={(e) => setMessage2(e.target.value)} 
                required />
            </div>
            {/* <Button color="success" onClick={handleSubmit}>Submit</Button> */}
          </CardBody>
        </Card>
      </Collapse>

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

        {/* <Button
          color="primary"
          onClick={() => toggleAccordion(2)}
          style={{ marginBottom: "1rem", width: "100%" }}
        >
          Permissions
        </Button>
        <Collapse isOpen={isOpen2} style={{ width: "100%" }}>
          <Card>
            <CardHeader>Give Permissions to the Sender</CardHeader>
            <CardBody>
            <div className="mb-3 ml-5" style={{ display: "flex", gap: "20px" }}>
                <div className="form-check mr-3">
                    <input className="form-check-input" type="radio" id="viewer" name="fileType" value="viewer" required />
                    <label className="form-check-label" htmlFor="viewer">
                        Viewer
                    </label>
                </div>
                <div className="form-check mr-3">
                    <input className="form-check-input" type="radio" id="commenter" name="fileType" value="commenter" required />
                    <label className="form-check-label" htmlFor="commenter">
                        Commenter
                    </label>
                </div>
                <div className="form-check mr-3">
                    <input className="form-check-input" type="radio" id="editor" name="fileType" value="editor" required />
                    <label className="form-check-label" htmlFor="editor">
                        Editor
                    </label>
                </div>
              </div>
            </CardBody>
          </Card>
        
        </Collapse> */}

{/* <Button
        color="primary"
        onClick={() => toggleAccordion(3)}
        style={{ marginBottom: "1rem", width: "100%" }}
      >
        Message
      </Button>
      <Collapse isOpen={isOpen2} style={{ width: "100%" }}>
        <Card>
          <CardHeader>Please Enter the Whole detail to Complete the Transaction</CardHeader>
          <CardBody>
          <label htmlFor="message1">Sent from</label>
            <div className="mb-3">
              <input
                className="form-control" 
                id="description" 
                name="Description_txt" 
                value={message1} 
                onChange={(e) => setMessage1(e.target.value)} 
                required />
            </div>
          </CardBody>
          <CardBody>
          <label htmlFor="message1">Sent to</label>
            <div className="mb-3">
              <input
                className="form-control" 
                id="description" 
                name="Description_txt" 
                value={message2} 
                onChange={(e) => setMessage2(e.target.value)} 
                required />
            </div>
            <Button color="success" onClick={handleSubmit}>Submit</Button>
          </CardBody>
        </Card>
      </Collapse> */}

        {/* <Button
          color="primary"
          onClick={() => toggleAccordion(3)}
          style={{ marginBottom: "1rem" }}
        >
          Accordion Item #3
        </Button>
        <Collapse isOpen={isOpen3}>
          <Card>
            <CardHeader>Accordion Item #3</CardHeader>
            <CardBody>
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.
            </CardBody>
          </Card>
        </Collapse> */}
        <label htmlFor="exampleFormControlInput1">Title</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" value={title} 
                onChange={(e) => setTitle(e.target.value)}  required/>
      </div>


      <div className="img-ctr mt-3">
        {cid && <a href={`https://${cid}.ipfs.dweb.link`}><img src={`https://${cid}.ipfs.dweb.link`} height={"250px"} /></a>}

      </div>
      <div className="transaction mb-3">
        {transaction && <a href={`https://mumbai.polygonscan.com/tx/${transaction}`} target="_blank" style={{ color: "green" }}>Transaction Detials</a>}
      </div>

      <div className="form-group" style={{ display: "flex", gap: "20px" }}>
        <input type="file" className="choose mt-2" onChange={retreieveFile} id="upload" />
        
        {/* Label associated with the button */}
        {/* <label htmlFor="upload" className="btn btn-info">
          Upload
        </label> */}
      </div>
        
      <button className="btn" style={{backgroundColor:'#2ECC71',color:"white"}}>Share</button>
    </form>
      {/* <MetaMaskButton /> */}
  </div>
</>
}
export default FileUpload;