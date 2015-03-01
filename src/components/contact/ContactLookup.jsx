/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var PouchDB = require('../../scripts/pouchdb-3.2.0.min');
var db_contact = new PouchDB('http://localhost:5984/contact');
var _ = require('lodash');

var ContactTable = require('./ContactTable.jsx');

var ContactLookup = React.createClass({
  getInitialState() {
    this.search("");
    return {term: '', contacts: []}
  },
  handleSubmit(e) {
    e.preventDefault();
  },
  onChange(e) {
    this.search(e.target.value);
  },
  search(searchTerm) {
    this.setState({term: searchTerm});
    var self = this;

    db_contact.query('customer/searchable',
      {'startkey': searchTerm, 'endkey': searchTerm + "\u9999"}
    ).then(function (data) {
        self.setState({contacts: _.pluck(data.rows, 'value')})
      })
  },
  render() {
    return (
      <div>
        <form onsubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.term} />
        </form>
        <h1>{this.state.term}</h1>
        <ContactTable contacts={this.state.contacts}/>
      </div>
    );
  }
});

module.exports = ContactLookup;
