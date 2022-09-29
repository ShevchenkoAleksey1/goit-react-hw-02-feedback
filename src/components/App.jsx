// import { render } from "@testing-library/react";
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countOwnFeedback = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
        neutral: prevState.neutral + 1,
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  // countPositiveFeedbackPercentage();

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h1>Please liave feedback</h1>
        <ul>
          <li>
            <button type="button" onClick={this.countOwnFeedback}>
              Good
            </button>
          </li>
          <li>
            <button type="button" onClick={this.countOwnFeedback}>
              Neutrall
            </button>
          </li>
          <li>
            <button type="button" onClick={this.countOwnFeedback}>
              Bad
            </button>
          </li>
        </ul>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {good}</li>
          <li>Neutrall: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total:{}</li>
        </ul>
      </>
    );
  }
}
