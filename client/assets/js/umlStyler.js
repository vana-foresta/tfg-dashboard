import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Button from './button.js'
import OptionDisplayer from './optionDisplay.js'
class UmlStyler extends Component {


  selectNodeSvg() {
    let userInput = document.getElementById("contractSearch").value;
    let contract = `#${userInput}`;
    d3.select(contract).select("polygon").attr("fill", "red");
  }
  clearSearch() {
    let userInput = document.getElementById("contractSearch").value;
    let contract = `#${userInput}`;
    d3.select(contract).select("polygon").attr("fill", "#f2f2f2");
  }

  render () {

    return (
      <div>
        <OptionDisplayer title="Diagram Interactivity" options={['Select Element', 'Delete Node', 'Greeting']}/>
        <div className="input-group md-form form-sm form-2 pl-0">
          <input  id="contractSearch" className="form-control my-0 py-1 red-border" type="text" placeholder="Search" aria-label="Search" />
        </div>
        <span id="buttons">
          <button onClick={this.selectNodeSvg.bind(this)} type="button" className="btn btn-success">Find!</button>
          <button onClick={this.clearSearch.bind(this)} type="button" className="btn btn-danger">Clear</button>
        </span>
      </div>
    );
  }
}
 export default UmlStyler;