import {FETCH_USERS} from './type'
import axios from 'axios'

const fetchUsers = () => dispatch => {
    axios.get('http://localhost:8000/api/fetch').
    then(res => dispatch({
        type : FETCH_USERS,
        payload : res.data
    }))
}

export default fetchUsers