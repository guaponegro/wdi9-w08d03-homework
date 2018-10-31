import React, { Component } from 'react';
import Search from './Search'

export default class SearchContainer extends Component {
    constructor(){
        super();
        this.state = {
            query: '',
            results: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('searched')
        this.addQuery(this.state.query)
    }
    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state.query)
    }
    addQuery = (query) => {
        this.setState({results: [...this.state.results, query]});
    }
    render(){
        return (
            <div>
                <Search query={this.state.query} handleInput={this.handleInput} handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}