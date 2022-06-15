import React, { Component } from 'react';
import "./About.css";
import profile_image from "../assets/profile_image.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src = {profile_image}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Sarah Wimbish</div>
            <div className="brief_description">
              CS @ UVA
            </div>
          </div>
        </div>
      </div>
    )
  }
}