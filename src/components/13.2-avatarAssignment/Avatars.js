import React from "react";
import SearchBar from "./SearchBar";
import Button from "./Button";
import ImageCard from "./ImageCard";

class Avatar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      search: "",
    };
  }
  async componentDidMount() {
    const api = "https://api.randomuser.me/?results=10";
    const response = await fetch(api);
    const data = await response.json();
    this.setState({ people: data.results });
  }

  onChange = (e) => {
    this.setState({ search: e.target.value.toLocaleLowerCase() });
  };

  //  this.state.people.filter((ele) => {
  //     if (
  //       `${ele.firstName}${ele.lastName}`
  //         .toLocaleLowerCase()
  //         .includes(this.state.search)
  //     )
  //       return true;
  //     else return false;
  //   })
  //   .map((ele) => {
  //     return (
  //       <Avatar
  //         key={ele.id}
  //         firstName={ele.firstName}
  //         lastName={ele.lastName}
  //         imgSrc={ele.imgSrc}
  //       />
  //     );
  //   });

  render() {
    console.log(this.state.people);
    return (
      <div>
        <SearchBar onChange={this.onChange} />
        <ImageCard pers={this.state.people} />
      </div>
    );
  }
}

export default Avatar;
