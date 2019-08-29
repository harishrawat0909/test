import React, {Component} from 'react'
import AddRowForm from './AddRowForm';
import Row from './Row'

class Table extends Component {

    constructor() {
        super()
        this.state = {
            data : [
                        {name: "ABC", age: 18, hobby: "Reading"},
                        {name: "DEF", age: 19, hobby: "Travelling"},
                        {name: "GHI", age: 20, hobby: "Football"},
                        {name: "JKL", age: 21, hobby: "Cricket"},
                    ]
        }
    }

    addRowToArray = (userdata) => {
        this.setState({
            data : [...this.state.data, userdata]
        })
    }

    render() {
        return (
            <React.Fragment>
                <AddRowForm addRowToArray={this.addRowToArray}/>
                <table className="table" border="1">
                    <thead>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Hobby</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((d, index) => {
                                return (
                                    <Row {...d} index={index} key={index}/>
                                )
                            })
                        }
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default Table