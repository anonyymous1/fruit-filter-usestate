import React, { Component } from 'react';

// components
import List from './List'
import Input from './Input'

class FruitContainer extends Component {
    constructor(props){
        super()
        this.state = {
            // initialize the fruit list to the full list passed into props
            fruitsToDisplay: props.fruits,
            // initialize the filter value to an empty string
            filterValue: ""
        };
    }

    handleFilterChange = (e) => {
        e.preventDefault();
        let filterValue = e.target.value;
        // remove the fruits that dont contain the filter value
        const filterFruitList = this.props.fruits.filter(fruit =>{
            return fruit.toLowerCase().includes(filterValue.toLowerCase());
        })

        this.setState({ fruitsToDisplay: filterFruitList, filterValue })
    }

    render(){
        // inside of input component, to access props, i will say props.value
        // inside of List component, to access props, i will say props.fruits
        console.log("STATE");
        console.log(this.state.fruitsToDisplay);
        console.log("PROPS");
        console.log(this.props.fruits);
        return(
            <div>
                <Input value={this.state.filterValue} onChange={this.handleFilterChange}/>
                <List fruits={this.state.fruitsToDisplay}/>
            </div>
        )
    }
}

export default FruitContainer;