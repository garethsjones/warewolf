/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var ContactRow = require('./ContactRow.jsx');

var ContactTable = React.createClass({
  render() {
    var renderRow = function(contact) {
      return <ContactRow contact={contact}/>
    };

    return (
      <div className="table-responsive">
        <table className=".table table-striped">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
          {this.props.contacts.map(renderRow)}
        </table>
      </div>
    );
  }
});

module.exports = ContactTable;
