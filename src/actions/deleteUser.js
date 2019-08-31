import {DELETE_USER} from './type'
import axios from 'axios'

export const deleteUser = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/delete/${id}`).
    then(res => dispatch({
        type : DELETE_USER,
        payload : res.data
    }))
}