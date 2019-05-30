import React from 'react';
import ReactDOM from 'react-dom';
import Searchbox from './Searchbox';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Map from './Map';
import './SearchResults.css';



class SearchResults extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const cardStyle = {
        display: 'block',
        transitionDuration: '0.3s',
        height: '200px'
      },
      headlineStyle = {
        fontSize: '1.1rem'
      };
    return (

            <Grid id="SearchResults" container spacing={16}>
              <Grid item xs={6} id="text-results">
              {this.props.newsHeadlines.map(article => (
                      <Card className="newsCard" style={cardStyle}>
                        <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                  {article.publishedAt}
                                </Typography>
                                <Typography variant="h5" component="h4" className="headline" style={headlineStyle}>
                                  {article.title}
                                </Typography>
                                <Typography color="textSecondary">
                                  {article.author}
                                </Typography>
                                <Typography component="p">
                                  {article.description}
                                  </Typography>

                                  <Typography color="textSecondary">{}</Typography>

                        </CardContent>
                      <CardActions>
                        <Button size="small">Learn More</Button>
                      </CardActions>
                      </Card>
                ))}
              </Grid>
              <Grid item xs={6}>
                <Map/>
              </Grid>
            </Grid>

    );
  }
}

export default SearchResults;
