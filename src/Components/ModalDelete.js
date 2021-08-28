import React from 'react'
import { useDispatch } from "react-redux";
import { deleteUserData} from '../Actions/Action'
import { Modal , Button } from 'react-bootstrap';

function ModalDelete(props) {
    const dispatch = useDispatch();
    function handleOnDelete(id) {
       
        dispatch(deleteUserData(props.id, props.setClose))
        console.log("deleted the data")
    }
 
   

    return (
        <div>
            <Modal.Dialog 
            isOpen={props.isOpen}
            
            >
                <Modal.Header>
                    <Modal.Title>Delete the details</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Are You Sure!</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button  onClick= {() => {handleOnDelete()}}variant="primary">Delete</Button>
                    <Button  onClick= {props.setClose} variant="primary">Cancel</Button>
                </Modal.Footer>
            </Modal.Dialog>
            
        </div>
    )
}

export default ModalDelete
