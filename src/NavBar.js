var React = require('react');

var NavBar = React.createClass({
  render: function () {
    var pages = ['home', 'blog', 'pics', 'bio', 'art', 'about', 'contact'];

    var navLinks = pages.map(function(page,i){
      return (
        <a href={'/' + page} key={'link-' +i} >
          {page}
        </a>
      );
    });

    return <nav>{navLinks}</nav>;
  }
});
module.exports = NavBar;
