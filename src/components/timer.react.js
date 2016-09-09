var React = require("react");

var LeftTime = require("./left-time.react.js");
var deepCopyObj = require("../modules/deep-copy-obj.js");

var Timer = React.createClass({
	timer: null,
	getInitialState: function(){
		return {
			isRun: false,
			time: {h: 0, m: 0, s: 0},
			leftTime: {h: 0, m: 0, s: 0},
		};
	},
	tick: function(){
		var t = deepCopyObj(this.state.leftTime);
		t.s -= 1;
		if (t.s < 0) {
			t.s += 60;
			t.m -= 1;
		}
		if (t.m < 0) {
			t.m += 60;
			t.h -= 1;
		}
		this.setState({leftTime: t});
		if (t.h == 0 && t.m == 0 && t.s == 0) {
			this.stopTimer();
		}
	},
	startTimer: function(){
		var inputValue = {
			h: this.refs.hour.value? Number(this.refs.hour.value): 0, 
			m: this.refs.minute.value? Number(this.refs.minute.value): 0, 
			s: this.refs.second.value? Number(this.refs.second.value): 0
		}
		if (inputValue.h + inputValue.m + inputValue.s == 0) return;
		this.setState({isRun: true, time: inputValue, leftTime: inputValue});
		this.timer = setInterval(this.tick, 1000);
	},
	stopTimer: function(){
		this.setState({
			isRun: false,
			time: {h: 0, m: 0, s: 0},
			leftTime: {h: 0, m: 0, s: 0},
		});
		clearInterval(this.timer);
	},
	render: function(){
		var timerButtonClassName = "btn--timer ";
		timerButtonClassName += this.state.isRun? "btn-stop": "btn-start";
		return(
			<div>
				<LeftTime time={this.state.time} 
									leftTime={this.state.leftTime} /> 
				<div className="input-group--time">
					<input className="input--timer" ref="hour"/>
					<span>:</span>
					<input className="input--timer" ref="minute"/>
					<span>:</span>
					 <input className="input--timer" ref="second"/>
				</div>
				<button className={timerButtonClassName} type="button"
								onClick={this.state.isRun? this.stopTimer: this.startTimer}>
					{this.state.isRun? "stop": "start"}
				</button>	
			</div>
		);
	}
});

module.exports = Timer;
