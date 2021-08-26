import React,{ useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { createPost, storeUserData} from '../Actions/Action'
import '../Components/TestStyle.css'
import Modal from 'react-modal'
import { Container, Button,Row, Col,Form } from 'react-bootstrap';

function ModalEdit() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const formData = useSelector(state => state.user.formData)
    const dispatch = useDispatch();

    const handleAddChange = (e) => {
         let userData = { ...formData };
         userData = Object.assign({}, userData, {[e.target.name]: e.target.value});
         dispatch(storeUserData(userData));  
    }
    
    const handleDataSubmit = () => {
        dispatch(createPost(formData));
        console.log("saved clicked data", formData)
    }


    return (
        <div>
        
        <Container>
                <h2 style={{background: "#7f9db7"}}>Add the details</h2>
                <Button color="primary" onClick={() => setModalIsOpen(true)}>ADD</Button>  
        </Container>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
       
        >
        <Container>
            <Row>
                <Col>
                    <Form>
                    <h2  style={{background: "#7f9db7"}}>Add the Details</h2><hr/>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{fontWeight: "bold"}}>User Id</Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder="Enter the User Id" 
                                name="userId"
                                onChange={handleAddChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{fontWeight: "bold"}}>Title</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter the Title" 
                                name="title"
                                onChange={handleAddChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label style={{fontWeight: "bold"}}>Body</Form.Label>
                            <Form.Control
                                as="textarea" 
                                type="text" 
                                placeholder="Enter the text for Body" 
                                name="body"
                                onChange={handleAddChange}
                            />
                        </Form.Group>
                    </Form>
                    <div className="btn"> 
                    <Button  onClick={handleDataSubmit}>Save</Button>
                    <Button  onClick={() => setModalIsOpen(false)}>Cancel</Button>
                    </div>
                </Col>
            </Row>
 
        </Container>
           
                
        </Modal>
            
        </div>
    )
}

export default ModalEdit
