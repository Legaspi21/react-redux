import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = { term: ''};
    }
    
    render() {
        return (
            <div> 
               
                <input 
                value={this.state.term}
                onChange={event => this.setState({term: event.target.value})} />
                <h1>Value of the input: {this.state.term}</h1>
            </div>
    )
            }
    

}


export default SearchBar;