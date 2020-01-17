import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import ProfileHeader from "./ProfileHeader.js";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image_url: "",
      description: "ff",
      res: ""
    };
  }

  async componentDidMount() {
    const res = await axios.get("http://localhost:3001/users/3");
    console.log(res);

    this.setState({
      name: res.data.username,
      image_url: res.data.image_url,
      description: res.data.description
    });
  }

  render() {
    return (
      <div id="profile">
        <ProfileHeader
          name={this.state.name}
          image_url={this.state.image_url}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default Profile;
