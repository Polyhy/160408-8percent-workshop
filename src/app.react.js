var React = require("react");
var ReactDOM = require("react-dom");

var Timer = require("./timer.react.js");

var App = React.createClass({
	render: function(){
		return (
			<div className="container">
				<Timer/>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById("app-container"));
