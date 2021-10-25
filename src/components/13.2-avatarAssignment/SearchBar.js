import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  // onFormSubmit = (event) => {
  //   event.preventDefault();

  //   this.props.onSubmit(this.state.term);
  // };
  checker = (e) => {
    this.props.pers.filter((ele) => {
      if (e == ele.name.first) {
        return (
          <div key={ele.login.uuid}>
            <p>
              {ele.name.title}.{ele.name.first}-{ele.name.last}
            </p>
            <div>From {ele.location.country}</div>
            <div>phone: {ele.phone}</div>
            <div>email: {ele.email}</div>
            <img src={ele.picture.large} />
          </div>
        );
      }
    });
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>people Search</label>
            <input type="text" onChange={this.checker} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
