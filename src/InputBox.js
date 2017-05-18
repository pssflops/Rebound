var React = require('react');

var TextBox = React.createClass({
  getInitialState: function() {
    return {typed: ''};
  },
  onChange: function(event) {
    this.setState({typed: event.target.value});
  },
  render: function() {
    return <div>
        <input  type="text"  id="nameBox" name="InputBox" placeholder="enter your name" onChange={this.onChange}/>
        <span className="arse">Hello {this.state.typed}!</span>
      </div>
  }
});

module.exports = TextBox;
