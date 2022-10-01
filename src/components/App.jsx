import { Component } from 'react';

import {
  Feedback,
  FeedbackList,
  FeedbackBtn,
  Statistic,
  StatisticList,
} from './AppStyled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // Сортирует отзывы
  countOwnFeedback = event => {
    const label = event.target.textContent;
    this.setState(prevState => ({
      [label]: prevState[label] + 1,
    }));
  };
  // Плюсует сумму всех отзывов
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  };

  // Высчитывает процент положительных отзывов
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();
    const countPercentage = this.countPositiveFeedbackPercentage();
    const massage = 'There is no feedback';

    return (
      <>
        <Feedback>
          <h1>Please leave feedback</h1>
          <FeedbackList>
            {Object.keys(this.state).map(option => {
              return (
                <li key={option}>
                  <FeedbackBtn type="button" onClick={this.countOwnFeedback}>
                    {option}
                  </FeedbackBtn>
                </li>
              );
            })}
          </FeedbackList>
        </Feedback>
        {total === 0 ? (
          <>
            <p>{massage}</p>
          </>
        ) : (
          <Statistic>
            <h2>Statistics</h2>
            <StatisticList>
              <li>Good: {good} </li>
              <li>Neutral: {neutral} </li>
              <li>Bad: {bad} </li>
              <li>Total: {total}</li>
              <li>PositivePercentage: {countPercentage}%</li>
            </StatisticList>
          </Statistic>
        )}
      </>
    );
  }
}
