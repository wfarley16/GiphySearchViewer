import React from "react";

import Card from "./card";

class Cards extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { index } = this.state;
    this.setState({ index: index + 1 });
  }

  render() {
    const { index } = this.state;
    const { results } = this.props;
    return (
      <>
        {results && <Card result={results[index]} index={index} handleClick={this.handleClick} />}
      </>
    );
  }
}

export default Cards;