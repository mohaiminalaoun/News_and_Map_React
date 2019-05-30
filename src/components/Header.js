import React from 'react';
import ReactDOM from 'react-dom';
import Searchbox from './Searchbox';
import PropTypes from 'prop-types';
import { Button, AppBar, Toolbar, Typography } from '@material-ui/core';
import GoogleLogin from 'react-google-login';
import Chip from '@material-ui/core/Chip';
import './Header.css'


class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      value: '',
      renderLogin: <GoogleLogin
          clientId={process.env.GOOGLE_API_KEY+".apps.googleusercontent.com"}
          buttonText="Login"
          onSuccess={this.responseGoogle.bind(this)}
          onFailure={this.responseGoogle.bind(this)}
        />
    };


  }


  responseGoogle(response){
    this.props.getUserInfo(response);
  }




  render() {
    return (
      <div>
      <header>
        <AppBar
            position="absolute"
            id="mainAppBar">
            <Toolbar>
              <Typography className="title" variant="headline" color="inherit">
                R E P O R T I R
              </Typography>
            {
              (() => {
              if (this.props && this.props.userInfo && this.props.userInfo.w3 && this.props.userInfo.w3.ig) {
                return <Chip label={this.props.userInfo.w3.ig}/>
              } else {
                return this.state.renderLogin
              }

            })()
            }

            </Toolbar>
        </AppBar>
      <Searchbox newsHeadlines={this.props.newsHeadlines} sendTwitterReq={this.props.sendTwitterReq}/>
      </header>
      </div>
    );
  }
};


Header.propTypes = {
  newsHeadlines: PropTypes.array,
  sendTwitterReq: PropTypes.func
};

export default Header;
