import React, {Component} from 'react'
import AddRowForm from './AddRowForm';
import Row from './Row'

class Table extends Component {

    constructor() {
        super()
        this.state = {
            data : [
                        {name: "ABC", age: 28, hobby: "Reading"},
                        {name: "DEF", age: 19, hobby: "Travelling"},
                        {name: "GHI", age: 50, hobby: "Football"},
                        {name: "JKL", age: 21, hobby: "Cricket"},
                    ],
            sortType : ''

        }
    }

    addRowToArray = (userdata) => {
        this.setState({
            data : [...this.state.data, userdata]
        })
    }

    sorter = (type, change) => {
        const data = this.state.data.sort((d1, d2) => {
            if(type=='ASC') return d1.age - d2.age
            else return d2.age - d1.age
        })
        this.setState({
            data : data,
            sortType : change
        })
    }

    sortByName = () => {
        if (this.state.sortType == 'ASC') {
            this.sorter('ASC', 'DESC')
        } else {
            this.sorter('DESC', 'ASC')
        }
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
                            <th><i className="fa fa-sort" onClick={this.sortByName}></i> Age</th>
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