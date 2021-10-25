import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.pers.map((ele) => {
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
        })}
      </div>
    );
  }
}

export default ImageCard;
