import React, { useState } from 'react';
import imgpic from "../../assets/avatar.png"
import {BsTrash,BsFillPencilFill} from "react-icons/bs"
import InsideTicket from '../InsideTicket/InsideTicket';
import { DeleteTickets } from '../../State/TicketsSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import picimage from "../../assets/PDF_file_icon.svg.png"
import {BsTrash3} from "react-icons/bs"
import { editTicket } from '../../State/TicketsSlice';

const TicketDetailsCompo = ({TicketDetails}) => {

  const dispatch= useDispatch()
  const navigate = useNavigate()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteRecord=()=>{
    dispatch(DeleteTickets(TicketDetails.id))
    navigate("/")
  }

  const [ subject ,setSubject ]= useState(TicketDetails.subject)
  const [Description,setDescription]=useState(TicketDetails.description)
  const [from,stefrom] = useState(TicketDetails.from)
  const [to,steto] = useState(TicketDetails.to)


  const formhandler=(e)=>{
    e.preventDefault();
    let data={
      id:TicketDetails.id,
      description:Description,
      status:TicketDetails.status,
      to:to,
      from:from,
      subject:subject
    }
   dispatch(editTicket(data))
   navigate("/")

  }

  return (
    <>
    
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <div style={{display:"flex",alignItems:"center"}} >
        <div>
          <Modal.Title style={{fontSize:"20px"}}>Edit Company Ticket </Modal.Title>
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
            value={subject}
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
            value={from}
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
              value={to}
              />
            </Form.Group>

        </div>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Description*</Form.Label>
          <Form.Control as="textarea" rows={3} value={Description}  onChange={(e)=>setDescription(e.target.value)}
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
          Update
        </Button>
      </Modal.Footer>

      </Form>


    </Modal.Body>

  </Modal>

    
    
    
    
    

    <div style={{padding:"20px",backgroundColor:"white",borderRadius:"10px",margin:"20px",maxWidth:"596px"}}>
     

      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between", borderBottom:"2px solid #F7F6F6"}}>
      
        <div style={{display:"flex",alignItems:"center", gap:"10px"}}>
          <img src={imgpic} style={{width:"64px", height:"64px"}} alt='p'></img>
          <div>
            <h1 style={{fontSize:"20px",fontWeight:"500"}}>User Name</h1>
           <div style={{display:"flex", alignItems:"center",gap:"8px"}}>
              <h1 style={{fontSize:"14px", fontWeight:"500",color:"#616363"}}>27 Jon 2023</h1>
              <h1 style={{fontSize:"14px", fontWeight:"500",color:"#616363"}}>From: {TicketDetails.from}</h1>
            </div>
          </div>
        </div>
      
      
        <div style={{display:"flex" , alignItems:"center" ,gap:"15px"}}>
          <BsFillPencilFill style={{color:"#000000",fontSize:"22px" ,cursor:"pointer"}} onClick={handleShow}></BsFillPencilFill>
          <BsTrash style={{color:"#FF4444",fontSize:"22px", cursor:"pointer"}} onClick={deleteRecord}></BsTrash>
        </div>
      
      </div>

      <InsideTicket TicketDetails={TicketDetails}></InsideTicket>

    </div>
    </>
  );
}

export default TicketDetailsCompo;
