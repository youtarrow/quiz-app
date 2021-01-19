import React from "react";
import Questions from "../Questions.json";
class Faq extends React.Component {
  state = {
    val: "",
  };
  render() {
    return (
      <section>
        <div className="faq">
          <h2 className="faq__question">
            <span className="faq__icon">Q. </span>
            <span className="faq__text">
              {Questions.QandA[this.props.count].Q}
            </span>
          </h2>
        </div>
        <div className="choice">
          <span className="faq__text">
            テスト；{Questions.QandA[this.props.count].A}
          </span>
          <form id="inputForm">
            <ul className="choice__list">
              <li className="choice__item">
                <input
                  type="radio"
                  name="answer"
                  value="YES"
                  checked={this.state.val === "YES"}
                  onChange={(e) => this.setState({ val: e.target.value })}
                />
                YES
              </li>
              <li className="choice__item">
                <input
                  type="radio"
                  name="answer"
                  value="NO"
                  checked={this.state.val === "NO"}
                  onChange={(e) => this.setState({ val: e.target.value })}
                />
                NO
              </li>
            </ul>
          </form>
        </div>
      </section>
    );
  }
}

export default Faq;
