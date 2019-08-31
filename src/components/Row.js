import React, {Component} from 'react'
import {deleteUser} from '../actions/deleteUser'
import {updateUser} from '../actions/updateUser'
import {connect} from 'react-redux'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

class Row extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showmodal : false,
            name : props.name,
            age : props.age,
            id : props.id
        }
    }

    delete = (e) => {
        const id = e.target.id
        this.props.deleteUser(id)
    }

    editUser = (e) => {
        this.setState({
            showmodal : true
        })
    }

    closeModel = () => {
        this.setState({
            showmodal : false
        })
    }

    getFieldValue = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    update = (e) => {
        e.preventDefault()
        const userdata = {
            name : this.state.name,
            age : this.state.age
        }
        this.props.updateUser(this.state.id, userdata)
        this.setState({
            showmodal : false
        })
    } 

    render() {
        let {id, name, age} = this.props
        return (
            <React.Fragment>
                <tr>
                    <td>{this.props.index+1}</td>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>
                        <i className="fa fa-trash" onClick={this.delete} id={id}></i>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <i className="fa fa-edit" onClick={this.editUser}></i>
                    </td>
                </tr>
                <Modal
                    isOpen={this.state.showmodal}
                    style={customStyles}
                    >
                    <div className="row">
                        <a href="#" onClick={this.closeModel}>X</a>
                    </div>
                    <div>
                        <form onSubmit={this.update}> 
                            <input
                                type="text"
                                name="name" 
                                value={this.state.name}
                                className="form-control"
                                onChange={this.getFieldValue}
                            /><br/>
                            <input 
                                type="text" 
                                name="age" 
                                value={this.state.age}
                                className="form-control"
                                onChange={this.getFieldValue}
                            /><br/>
                            <button className="btn btn-success">Update</button>
                        </form>
                    </div>
                </Modal>
            </React.Fragment>
        )
    }

}


export default connect(null, {updateUser})(Row)