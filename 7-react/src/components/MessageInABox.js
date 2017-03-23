import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

export default class MessageInABox extends React.Component {
  render() {
    return(
      <div>
        <Card>
          <CardHeader
            title={this.props.title}
            subtitle={this.props.subtitle}
          />
          <CardText>
            {this.props.message}
          </CardText>
        </Card>
        <br />
      </div>
    )
  }
}
