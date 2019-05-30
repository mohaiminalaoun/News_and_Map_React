import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import SearchResults from './SearchResults';
import countryApiCall from '../api/newsAPI';
import twitterApiCall from '../api/twitterAPI';



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
        userInfo : null
    };
    this.sendTwitterReq = this.sendTwitterReq.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);

  }

  sendTwitterReq(event) {
    let callback = (res) => {
      //let articles = JSON.parse(res).articles.map((article) => {
      //  return article;
      //})

      let articles = JSON.parse(res).map((info) => {
        var tInfo = {};
        tInfo.title = info.text;
        tInfo.description = info.user.location;
        tInfo.author = info.user.screen_name;
        tInfo.publishedAt = info.created_at;

        return tInfo;
      })


      this.setState({newsHeadlines: articles});
    }
    twitterApiCall(event.target.value, callback);
  }

  getUserInfo(res) {
    this.setState({userInfo: res})
  }

  render() {
    return (
      <div>
      <Header sendTwitterReq={this.sendTwitterReq} userInfo={this.state.userInfo} getUserInfo={this.getUserInfo}/>
      <SearchResults newsHeadlines={this.state.newsHeadlines}/>
      </div>

    );
  }
}

export default Content;
