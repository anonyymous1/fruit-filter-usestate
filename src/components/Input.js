import React, { Component } from 'react';

class Input extends Component {
    constructor(props){
        super()
        this.state = {};
    }
    render(){
        return(
            <div>
                <label htmlFor="fruit-filter">Filter these Fruits: </label>
                <input type="text" value={this.props.filterValue} onChange={this.props.onChange} name="fruit-filter"/>
            </div>
        )
    }
}

export default Input;