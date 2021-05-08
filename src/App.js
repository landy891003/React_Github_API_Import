import logo from './logo.svg';
import $ from "jquery";
import React from "react";
import { useHistory } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import CodeIcon from '@material-ui/icons/Code';
class UserGithub extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        userID:'', 
        username: '',
        githubtUrl: '', 
        avatarUrl: '',
        company:'',
        location:'',
        bio:'',
        followers:''
      }     
    } 
    componentDidMount() {
      $.get(this.props.source,(result) => {
        console.log(result);
        const data = result;
        if (data) {
          this.setState({
            userID:data.login,
            username: data.name,
            githubtUrl: data.html_url,
            avatarUrl: data.avatar_url,
            company:data.company,
            location:data.location,
            bio:data.bio,
            followers:data.followers
          });
        }
      });     
    }


    onClick(){
     window.location.href=this.state.githubtUrl;
    }


    render() {
      return (
        <div>
          <img src={this.state.avatarUrl}></img>
          <h2 style={{color: "#115293"}}>{this.state.username}</h2>
          <h3 style={{color: "#115293"}}>{this.state.userID}</h3>
          <span style={{display: 'inline-flex',flexDirection: 'row'}}>
            <EmojiPeopleIcon color="primary"></EmojiPeopleIcon>
            <h3 style={{color: "#115293"}}>{this.state.followers}</h3>
            <IconButton color="primary" onClick={this.onClick.bind(this)}><CodeIcon /></IconButton> 
          </span>
          <br></br>
          <span style={{display: 'inline-flex',flexDirection: 'row'}}>
            <EmojiObjectsIcon color="primary" />
            <h3 style={{color: "#115293"}}>{this.state.bio}</h3>
          </span>
          <br></br>
          <span style={{display: 'inline-flex',flexDirection: 'row'}}>
            <EmojiTransportationIcon color="primary" />
            <h3 style={{color: "#115293"}}>{this.state.company}</h3>
          </span>
          <br></br>
          <span style={{display: 'inline-flex',flexDirection: 'row'}}>
            <EditLocationIcon color="primary" />
            <h3 style={{color: "#115293"}}>{this.state.location}</h3>
          </span>
        </div>         
      );     
    } 
  } 

export default UserGithub;
