import React from 'react';
import ReactDOM from 'react-dom';
import newsAPI from '../api/newsAPI';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import './Searchbox.css';



class Searchbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      newsHeadlines: this.props.newsHeadlines
    };
    this.onEnter = this.onEnter.bind(this);
  }

  /*Keep only letters numbers and spaces*/
  convertInput(str) {
    return str.replace(/[^a-z0-9]/gi,'');
  }

  onEnter(event) {
    if(event.key == 'Enter'){
       this.props.sendCountyRequest(event);
       event.target.blur();
     }
  }

  render() {
    //console.log(newsapi("bangladesh"));
    return (
      <TextField
        className="Searchbox"
        id="sb"
        label="Search for Gossip"
        type="search"
        margin="normal"
        variant="outlined"
        onKeyPress={this.onEnter}
        tabIndex="0">
      </TextField>

    );
  }
}

Searchbox.propTypes = {
  newsHeadlines: PropTypes.array,
  sendCountyRequest: PropTypes.func
};

export default Searchbox;
