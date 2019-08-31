import {UPDATE_USER} from './type'
import axios from 'axios'

export const updateUser = (id, userdata) => dispatch => {
    axios.put(`http://localhost:8000/api/update/${id}`, userdata).
    then(res => dispatch({
        type : UPDATE_USER,
        payload : res.data
    }))
}