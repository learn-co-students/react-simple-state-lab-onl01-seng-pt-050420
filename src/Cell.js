import React, { Component } from 'react';

export default class Cell extends Component{
    constructor(props) {
        super(props)
        this.state = {
            color: this.props.value
        } // ...define initial state with a key of 'color' set to the 'value' prop
      }

      colorUpdate=(event) => {
          this.setState({
              color: '#333'
          })
      } 
      render() {
        return (
          <div onClick={this.colorUpdate}style={{backgroundColor: this.state.color}}className="cell">
            
          </div>
        )
      }
}