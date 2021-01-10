import React from 'react';

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.value
    }
  }

  updateValue = () => {
    this.setState({
      color: "#333"
    })
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.updateValue}>
      </div>
    );
  }
}

export default Cell;