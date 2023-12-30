import { useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import HeadDesign from "components/Headers/HeadDesign.js";

import FileUpload from '../../../variables/FileUpload';
// import './Share.css';

// function App() {
const Share = () => {
  return (
    <>
    <HeadDesign />
    <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h1 className="mb-0">NFT Minter</h1>
              </CardHeader>
              <CardBody>
                <FileUpload></FileUpload>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default Share;