import React from 'react';
import {BsFillFolderSymlinkFill} from "react-icons/bs"

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import picimage from "../../assets/PDF_file_icon.svg.png"

import {BsTrash3} from "react-icons/bs"

import { insertTickets } from '../../State/TicketsSlice';
import { useDispatch } from 'react-redux';

const NoTickets = () => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [ subject ,setSubject ]= useState("")
  const [Description,setDescription]=useState("")
  const [from,stefrom] = useState("")
  const [to,steto] = useState("")


  const dispatch= useDispatch()


  const formhandler=(e)=>{
    e.preventDefault();
    let Data= 
    {
      subject:subject,
      from:from,
      to:to,
      status:"InProgress",
      description:Description,
      id:Math.random()
    }
    dispatch(insertTickets(Data))

  }



  return (


 


    <>
    
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <div style={{display:"flex",alignItems:"center"}} >
        <div>
          <Modal.Title style={{fontSize:"20px"}}>Create Company Ticket </Modal.Title>
          <p style={{fontSize:"14px",color:"#616363"}}>Creating a new ticket to be sent between company departments </p>
        </div>
      </div>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={formhandler}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Subject *</Form.Label>
          <Form.Control
            type="text"
            placeholder="What is your Subject?"
            autoFocus
            required
            onChange={(e)=>setSubject(e.target.value)}
          />
        </Form.Group>

        <div style={{display:"flex",gap:"10px"}}>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>From*</Form.Label>
            <Form.Control
            type="text"
            placeholder="Select Department"
            autoFocus
            onChange={(e)=>stefrom(e.target.value)}
            required
            />
          </Form.Group>
        

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>To*</Form.Label>
              <Form.Control
              type="text"
              placeholder="Select Department"
              autoFocus
              onChange={(e)=>steto(e.target.value)}
              required
              />
            </Form.Group>

        </div>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Description*</Form.Label>
          <Form.Control as="textarea" rows={3}   onChange={(e)=>setDescription(e.target.value)}
          required placeholder='e.g. I joined Stripe’s Customer Success team to help them scale their checkout product. I focused mainly on onboarding new customers and resolving complaints.' />
        </Form.Group>


        
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Attach Photo </Form.Label>
        <Form.Control
        type="file"
        placeholder="Select Department"
        autoFocus
          />
        </Form.Group>

          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between" ,gap:"80px",border:"1px solid #eee ", borderRadius:"8px",width:"fit-content",padding:"10px"}}>
          <img src={picimage} alt='p' style={{height:"48px",width:"51px"}}></img>
          <div>
            <p style={{fontSize:"12px",color:"#616363"}}>FileName.Pdf</p>
            <p style={{fontSize:"12px",color:"#B9BCBC"}}>23.09 MB</p>
          </div>
          <BsTrash3></BsTrash3>
        </div>

        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button type='submit' variant="primary" onClick={handleClose}>
          Create
        </Button>
      </Modal.Footer>

      </Form>


    </Modal.Body>

  </Modal>
    
    
    









    <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
        <BsFillFolderSymlinkFill style={{fontSize:"100px",color:"#5B8DEF"}}></BsFillFolderSymlinkFill>
        <h1 style={{fontSize:"18px",fontWeight:"600",color:"#001011"}}>No data to show</h1>
        <p style={{fontSize:"14px",color:"#B9BCBC",fontWeight:"400"}}>Create a new Ticket Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div>
            <button onClick={handleShow} style={{backgroundColor:"#1B6792" ,color:"#FFFFFF",borderColor:"transparent",borderRadius:"8px",padding:"8px"}}>+ New ticket</button>
        </div>
    </div>


    </>

  );
}

export default NoTickets;
