import React, { Component } from 'react';
import './app.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
    console.log('this.props', this.props)
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMout() {
    // sets delay to prevent endless loop
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  getTimeUntil(deadline) {
    // calcuates difference between deadline and current time
    const time = Date.parse(deadline) - Date.parse(new Date());
    console.log('time', time);

    // converts parsed time to seconds
    const seconds = Math.floor((time/1000)%60);

    // converts parsed time to minutes
    const minutes = Math.floor((time/1000/60)%60);

    // converts parsed time to hours
    const hours = Math.floor(time/(1000*60*60)%24);

    // converts parsed time to days
    const days = Math.floor(time/(1000*60*60*24));

    // displays calculations into a statement in the console. 
    console.log('seconds', seconds, 'minutes', minutes, 'hours', days, 'days');
    
    this.setState({days, hours, minutes, seconds});
  }

  // Add a 0 infront of single numbers
  leading0(num) {
    return num < 10 ? '0' + num : num;
  }

  render() {
    // this.getTimeUntil(this.props.deadline);

    return (
      <div>
        <div className="Clock-days">{this.state.days} days</div>
        <div className="Clock-hours">{this.state.hours} hours</div>
        <div className="Clock-minutes">{this.state.minutes} minutes</div>
        <div className="Clock-seconds">{this.state.seconds} seconds</div>
      </div>
    )
  }
}

export default Clock;