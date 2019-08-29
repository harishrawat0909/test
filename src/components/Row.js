import React, {Component} from 'react'

class Row extends Component {

    render() {
        let {name, age, hobby} = this.props
        return (
            <tr>
                <td>{this.props.index+1}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td>{hobby}</td> 
                <td>
                    <i className="fa fa-edit"></i>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="fa fa-trash"></i>
                </td>
            </tr>
        )
    }

}

export default Row