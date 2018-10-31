import React, { Component } from 'react';

export default class Search extends Component {
    render(){
        return (
            <form>
                <input type="text" name="search"/>
                <input type="button" value="submit"/>
            </form>
        )
    }
}