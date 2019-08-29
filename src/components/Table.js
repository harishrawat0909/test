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

    sortByName = () => {
       this.state.data.sort((d1, d2) => {
            //(d1 > d2) ? 1 : -1
        })
    }

    render() {
        return (
            <React.Fragment>
                <AddRowForm addRowToArray={this.addRowToArray}/>
                <table className="table" border="1">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th><i className="fa fa-sort" onClick={this.sortByName}></i> Name</th>
                            <th>Age</th>
                            <th>Hobby</th>
                            <th>Action</th>
                        </tr>
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