/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Link = require('../components/Link.jsx');
var DefaultLayout = require('../layouts/DefaultLayout.jsx');
var ContactLookup = require('../components/contact/ContactLookup.jsx');

var ContactsPage = React.createClass({
  getDefaultProps() {
    return {
      title: 'Contacts',
      layout: DefaultLayout,
      breadcrumb: (
        <ol className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li className="active">Contacts</li>
        </ol>
      )
    };
  },
  render() {
    return (
      <div className="container">
        <p>
          Contacts
        </p>
        <ContactLookup/>
      </div>
    );
  }
});

module.exports = ContactsPage;
