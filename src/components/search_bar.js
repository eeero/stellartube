import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    //Call parent method from parent class Component.
    super(props);
    //Each instance of class-component has its own copy of state.
    this.state = {searchTerm : ''}
  }

  render() {
    //return <input onChange={e => console.log(e.target.value)}/>;
    return (
      //Name toplevel div the same as the component.
      <div className="search-bar">
        <img src="http://everythingstellar.com/wp-content/uploads/2015/02/logo-1.png" />
        <input
          //State controls the value.
          value={this.state.searchTerm}
          //onChange={e => this.setState({term: e.target.value})} />
          onChange={e => this.onInputChange(e.target.value)}
          placeholder="You have found the Stellar Tube!"
          />
      </div>
    );
  }

  onInputChange(searchTerm){
    this.setState({searchTerm});
    //Calls function from index.js
    this.props.onSearchTermChange(searchTerm);
  }

}

export default SearchBar;
