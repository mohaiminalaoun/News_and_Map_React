import React from 'react';
import ReactDOM from 'react-dom';
import Searchbox from './Searchbox';
import PropTypes from 'prop-types';
import { Button, AppBar, Toolbar, Typography } from '@material-ui/core';
import './Header.css'


class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      value: ''
    };
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
                ACME
              </Typography>
              <Button className="loginButton" color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        <Searchbox newsHeadlines={this.props.newsHeadlines} sendCountyRequest={this.props.sendCountyRequest}/>
      </header>
      </div>
    );
  }
};


Header.propTypes = {
  newsHeadlines: PropTypes.array,
  sendCountyRequest: PropTypes.func
};

export default Header;
