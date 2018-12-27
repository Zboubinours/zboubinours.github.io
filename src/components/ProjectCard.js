import React from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};


class ProjectCard extends React.Component{
  render() {
    return (
    <Card style={{maxWidth: '345px'}}>
      <CardActionArea>
        <CardMedia style={{height: '140px'}} image={this.props.image} title={this.props.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.title}
          </Typography>
          <Typography component="p">{this.props.description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href={this.props.link} size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
}

export default ProjectCard;
