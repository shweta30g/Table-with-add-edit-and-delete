import React,{ useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getUser,storeUserData } from '../Actions/Action'
import '../Components/TestStyle.css'
import ModelEdit from '../Components/ModalEdit'
import ModalDelete from '../Components/ModalDelete'
import { Table,Container, Button } from 'react-bootstrap'
import { FaRegEdit } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'

function Test() {

    const user = useSelector(state => state.user.user);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [deleteState, setDeleteState] = useState(false);
    const [deleteID, setDeleteID] = useState();


    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(getUser())
    }, [])

    const handleDelete = (data) =>{
        setDeleteState(true);
        setDeleteID(data.id)
    }
    const handleEdit = (data) => {
        setModalIsOpen(true);
        dispatch(storeUserData(data));
    }
  
  
  
 
    return (
        <Container>
        
        <Container>
        
        <h2 style={{background: "#7f9db7"}}>Add the details</h2>
             <Button color="primary" onClick={() => setModalIsOpen(true)}>ADD</Button>  
        </Container>
        <hr />
        {modalIsOpen && 
        <ModelEdit isOpen={modalIsOpen} setClose={() => setModalIsOpen(false)}/>
        }
        {deleteState && 
        <ModalDelete isOpen={deleteState} setClose={() => setDeleteState(false )} id={deleteID}/>
        }
       
        
        <Table bordered hover>
            <thead>
                <tr style={{fontWeight:"bold",background: "#7f9db7"}}>
                    <td>USER ID</td>
                    <td>TITLE</td>
                    <td>BODY</td>
                    <td>ACTIONS</td>
                </tr>
            </thead>
            <tbody> 
                {user.map((userdetail) => {
                return(
                    <tr key={userdetail.id}>
                        <td>{userdetail.userId}</td>
                        <td>{userdetail.title}</td>
                        <td>{userdetail.body}</td>
                        <td>
                            <Table>
                                <tr>
                                    <td> 
                                    <span className="icon"><FaRegEdit onClick={() => {handleEdit(userdetail)}}/></span>
                                
                                    </td>
                                    <td> 
                                    <span className="icon"><AiFillDelete  onClick={() => {handleDelete(userdetail)}}/></span>
            
                                    </td>
                                </tr>
                            </Table>
                        </td>
                        
                        
                    </tr>
                )
                })}
            </tbody>
        </Table>
        </Container>
    )
}

export default Test
