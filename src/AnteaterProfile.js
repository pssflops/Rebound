var React = require('react');
import './styles.css';

var AnteaterProfile = React.createClass({
  onClick: function(){
    console.log("FUCK YOU, ASSHOLE!");
  },
  render: function () {
    return (
      <div>
        <h2>How do you like my mother?</h2>
        <div className="butts">
        <img src="http://i.imgur.com/ZXWnb.jpg" alt="anteater" title="An Ant Eater."/>
         <blockquote>
             "I don't just eat ants, ants are more like a lifestyle for me."
          <span className="farts">
              <em>- Annie</em>
            </span>
        </blockquote>
       </div>
      </div>
    );
  }
});

module.exports = AnteaterProfile;
