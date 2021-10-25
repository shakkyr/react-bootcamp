import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
      
    };
  }

  // onFormSubmit = (event) => {
  //   event.preventDefault();

  //   this.props.onSubmit(this.state.term);
  // };


  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>people Search</label>
            <input type="text" onChange={this.props.checker} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
