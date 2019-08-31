import React, {Component} from 'react'
import AddRowForm from './AddRowForm';
import Row from './Row'
import {connect} from 'react-redux'
import fetchUsers from '../actions/fetchUsers'
//import SweetAlert from 'react-bootstrap-sweetalert'

class Table extends Component {

    constructor() {
        super()
        this.state = {
            sortType : '',
            showmodal : false,
        }
    }

    sorter = (type, change) => {
        this.props.data.sort((d1, d2) => {
            if(type=='ASC') return d1.age - d2.age
            else return d2.age - d1.age
        })
        this.setState({
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
                <AddRowForm/>
                <table className="table" border="1">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th><i className="fa fa-sort" onClick={this.sortByName}></i> Name</th>
                            <th><i className="fa fa-sort" onClick={this.sortByName}></i> Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.data.map((d, index) => {
                                return (
                                    <Row {...d} index={index} key={index} updateUser={this.updateUser}/>
                                )
                            })
                        }
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (state) => {
    return {
        data : state.data.users
    }
}

export default connect(mapDispatchToProps, fetchUsers)(Table)