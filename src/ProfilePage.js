var React = require('react');
var NavBar = require('./NavBar');
var InputBox = require('./InputBox');

var ProfilePage = React.createClass({
  render: function () {
    return (
      <div>
       <NavBar />
         <br/>
         <InputBox />
        <h1>ANTEATERS</h1>
        <p>These things look like they could hurt your dick if they strangled it.</p>
        <br />
      </div>
    );
  }
});
module.exports = ProfilePage;
