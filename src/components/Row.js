import React, {Component} from 'react'

class Row extends Component {
    constructor() {
        super()   
    }

    render() {
        let {name, age, hobby} = this.props
        return (
            <tr>
                <td>{this.props.index+1}</td>
                <td>{hobby}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td>
                    <i class="fa fa-edit"></i>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fa fa-trash"></i>
                </td>
            </tr>
        )
    }

}

export default Row