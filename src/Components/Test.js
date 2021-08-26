import React,{ useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getUser} from '../Actions/Action'
import '../Components/TestStyle.css'
import ModelEdit from '../Components/ModalEdit'
import { Table,Container, Button } from 'react-bootstrap'

function Test() {

    const user = useSelector(state => state.user.user)

    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(getUser())
    }, [])
  

    return (
        <Container>
        <ModelEdit />
        <hr />
        <Table bordered hover>
            <thead>
                <tr style={{fontWeight:"bold"}}>
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
                                        <Button style={{color:"Black",fontWeight:"bold"}}>EDIT</Button>
                                    </td>
                                    <td> 
                                        <Button style={{color:"Black",fontWeight:"bold"}}>DELETE</Button>
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
