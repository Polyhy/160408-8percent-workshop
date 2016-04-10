var React = require("react");

var LeftTime = React.createClass({
	getProgressBarLength: function(){
		var time = this.props.time.h*3600 + this.props.time.m*60
			+ this.props.time.s;
		var leftTime = this.props.leftTime.h*3600 + this.props.leftTime.m*60
			+ this.props.leftTime.s;
		return time? leftTime / time * 100: 0;
  },
	render: function(){
		var twolength = n => (n < 10? "0": "") + n;
		return(
			<div className="timer">
				<div id="timer-progressbar">
					<div style={{width: this.getProgressBarLength()+"%"}}></div>
				</div>
				<div id="left-time">
					<span ref="hour">{twolength(this.props.leftTime.h)}</span>
					<span>:</span>
					<span ref="minute">{twolength(this.props.leftTime.m)}</span>
					<span>:</span>
					<span ref="second">{twolength(this.props.leftTime.s)}</span>
				</div>
			</div>
		);		
	}
});

module.exports = LeftTime;
