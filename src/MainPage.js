var React = require('react');
var AnteaterProfile = require('./AnteaterProfile');
var ProfilePage = require('./ProfilePage');
import logo from './logo.svg';

var MainPage = React.createClass({
  render: function () {
    return (
      <div className="profile">
      <img src={logo} className="App-logo" alt="fuck you!" />
      <ProfilePage />
        <h1>Here is an Ant Eater.</h1>
        <AnteaterProfile />
        <footer>
        <h5>eat a ballsack for lunch!!</h5>
        </footer>
      </div>
    );
  }
});

module.exports = MainPage;
