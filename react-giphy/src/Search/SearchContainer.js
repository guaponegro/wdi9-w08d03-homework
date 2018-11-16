import React, { Component } from 'react';
import Search from './Search';
import Results from '../ResultsContainer/Results';

export default class SearchContainer extends Component {
    constructor(){
        super();
        this.state = {
            query: '',
            results: [],
        }
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    onChange = (e) => {
        console.log(e.currentTarget.value)
        this.setState({
            query: e.currentTarget.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state.query)
        const query = this.state.query;

        try {
            const findGif = await fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=eL3jgNbh8QBIbriwoMEHw3JyYZVPryH5`);
            const findGifJSON = await findGif.json();
            console.log(findGifJSON.data)
            this.setState({results: findGifJSON.data})
        } catch (err) {
            console.log(err)
            return err
        }
    }
    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state.query)
    }
    addQuery = (query) => {
        this.setState({results: [...this.state.results, query]});
    }
    getResults = async () => {
        const query = this.state.query;
        const results = await fetch
    }
    render(){
        return (
            <div>
                <Search value={this.state.value} handleSubmit={this.handleSubmit} onChange={this.onChange}/>
                <Results results={this.state.results}/>
            </div>
        )
    }
}