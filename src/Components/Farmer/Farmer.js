import React ,{useState} from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import "../Login and Register/Login.css"
import {CardBody} from "reactstrap"
import FarmerService from '../../Service/FarmerService';
import { useNavigate } from 'react-router-dom';
import Menus from './Menus';
import AddProduct from './AddProduct'
import DeleteProduct from './DeleteProduct';
import ViewProduct from './ViewProduct';
import EditProduct from "./EditProduct"
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

const Farmer=()=> {
  
  
  

  return (
    <div>

    <Container>
      <Card className='my-2 bg-warning'>
            <CardBody>
<h1 style={{textAlign: "center"}}>Product Details</h1>
</CardBody>
          </Card>
      <Row>
        <Col md={4}>
          
          <Menus/>
         
          </Col>
        <Col md={8}><h1>Welcome</h1>
         
         
          </Col>
      </Row>
    </Container>

    

    </div>
  );
}

export default Farmer