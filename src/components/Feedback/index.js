// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {feed: false}

  sendFeedback = () => {
    this.setState({feed: true})
  }

  render() {
    const {feed} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="feedback-bg-container">
        <div className="feedback-card">
          {!feed ? (
            <>
              <h1 className="feedback-heading">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="emojis-card">
                <li className="emoji">
                  <img
                    alt={emojis[0].name}
                    className="img"
                    onClick={this.sendFeedback}
                    src={emojis[0].imageUrl}
                    key={emojis[0].id}
                  />
                  <p className="name">{emojis[0].name}</p>
                </li>
                <li className="emoji">
                  <img
                    alt={emojis[1].name}
                    className="img"
                    onClick={this.sendFeedback}
                    src={emojis[1].imageUrl}
                    key={emojis[1].id}
                  />
                  <p className="name">{emojis[1].name}</p>
                </li>
                <li className="emoji">
                  <img
                    alt={emojis[2].name}
                    className="img"
                    onClick={this.sendFeedback}
                    src={emojis[2].imageUrl}
                    key={emojis[2].id}
                  />
                  <p className="name">{emojis[2].name}</p>
                </li>
              </ul>
            </>
          ) : (
            <>
              <img src={loveEmojiUrl} className="img" alt="love emoji" />
              <h1>Thank You</h1>
              <p>
                We will use your feedback to improve our customer support
                performance
              </p>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
