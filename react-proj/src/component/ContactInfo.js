import React from 'react';


export default class ContactInfo extends React.Component {
  render() {
    return (
      <div>
        <div onClick={this.props.onClick}>{this.props.contact.name} : {this.props.contact.phone}</div>

      </div>
    )
  }
}
