import React, { Component } from 'react';

export default class Search extends Component {
    constructor(){
        super();
        this.state = {
            query: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('searched')
    }
    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state.query)
    }
    render(){
        return (
            <div>
                <h2>Search: </h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="query" onChange={this.handleInput} value={this.state.query} placeholder="search" />
                    <button type="submit" value="Submit">Search</button>
                </form>
            </div>
        )
    }
}