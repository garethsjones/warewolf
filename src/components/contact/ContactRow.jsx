/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var ContactRow = React.createClass({
  render() {
    return (
      <tr>
       <td>{this.props.contact.firstName}</td>
       <td>{this.props.contact.lastName}</td>
       <td>{this.props.contact.email}</td>
      </tr>
    );
  }
});

module.exports = ContactRow;
