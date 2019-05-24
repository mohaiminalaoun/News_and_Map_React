import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import SearchResults from './SearchResults';
import countryApiCall from '../api/newsAPI';



class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      newsHeadlines: [
        {
          publishedAt:'',
          author:'',
          source:{},
          description:'',
          title:''
        }], // DEAFULT
    };
    this.sendCountyRequest = this.sendCountyRequest.bind(this);

  }

  sendCountyRequest(event) {
    let callback = (res) => {
      let articles = JSON.parse(res).articles.map((article) => {
        return article;
      })

      this.setState({newsHeadlines: articles});
    }
    countryApiCall(event.target.value, callback);
  }

  render() {
    return (
      <div>
      <Header sendCountyRequest={this.sendCountyRequest}/>
      <SearchResults newsHeadlines={this.state.newsHeadlines}/>
      </div>

    );
  }
}

export default Content;
