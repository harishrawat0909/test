import React, {Component} from 'react'

class AddRowForm extends Component {

    constructor() {
        super()
        this.state = {
            name : '',
            hobby: '',
            age : ''
        }
    }

    getFieldValue = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitRow = (e) => {
        e.preventDefault()
        const userdata = {
            name : this.state.name,
            age : this.state.age,
            hobby : this.state.hobby
        }
        this.props.addRowToArray(userdata)
    }

    render() {
        return (
            <form onSubmit={this.submitRow} className="form-inline">
                <div className="form-group">
                    <input 
                        type="text"
                        name="name"  
                        className="form-control col-sm-4"
                        placeholder="Name"
                        onChange={this.getFieldValue} 
                    />
                    <input 
                        type="text"
                        name="hobby"  
                        className="form-control col-sm-4"
                        placeholder="Hobby"
                        onChange={this.getFieldValue} 
                    />
                    <input 
                        type="text"
                        name="age"  
                        className="form-control col-sm-2"
                        placeholder="Age"
                        onChange={this.getFieldValue} 
                    />
                    <button className="btn btn-success col-sm-2">
                        Submit Row
                    </button> 
                </div>
            </form>
        )
    }
}

export default AddRowForm