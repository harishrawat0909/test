import {ADD_USER} from './type'
import axios from 'axios'

const addUser = (user) => dispatch => {
    axios.post('http://localhost:8000/api/post', user).
    then(res => dispatch({
        type : ADD_USER,
        payload : res.data
    }))
}
