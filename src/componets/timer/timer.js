import React from "react";

export default class Clock extends React.Component {
  state = { secondsFromStart: 0 };

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisorForMinutes = secs % (60 * 60);
    let minutes = Math.floor(divisorForMinutes / 60);

    let divisorForSeconds = divisorForMinutes % 60;
    let seconds = Math.ceil(divisorForSeconds);
    return { "h": hours, "m": minutes, "s": seconds };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(({ secondsFromStart }) => {
        return {
          secondsFromStart: secondsFromStart + 1,
        };
      });
    }, 1000);
  }

  render() {

    const timeFromStart = this.secondsToTime(this.state.secondsFromStart);

    //transform 0 => 00;
    const getTwoDigitsNum = num => {
      return (num.toLocaleString(undefined, { minimumIntegerDigits: 2 }));
    };

    return (
      <div className="time" >
        Прошло: { getTwoDigitsNum(timeFromStart.h) }:{ getTwoDigitsNum(timeFromStart.m) }:{ getTwoDigitsNum(timeFromStart.s) }
      </div >
    );
  }
}