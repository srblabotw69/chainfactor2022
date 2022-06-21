import React from 'react';
import Button from 'react-bootstrap/Button';

import { chainfactor } from "../../declarations/chainfactor";

const $ = document.getElementById.bind(document);
const idl = require('../utilities/idl');

class Create extends React.Component {

  constructor() {
    super();
    this.state = { invoiceId: null };
  }

  create(event) {
    event.preventDefault();
    const name = $('create-name').value;
    //const n = parseInt($('create-details-count').value, 10);  
    const n = 5;
    const details = [];
    for (var i = 0; i < n; i++) {
      const detail = $('create-detail-' + i).value;
      details.push(detail);
    };
    const invoice = { name, details };
    invoice.details = idl.toList(invoice.details);
    chainfactor.create(invoice).then((invoiceId) => {
      this.setState({ invoiceId });
    });
  }

  toggle() {
    const n = parseInt($('create-details-count').value, 10);
    const container = $('create-details-container');
    while (container.hasChildNodes()) {
      container.removeChild(container.lastChild);
    };
    for (var i = 0; i < n; i++) {
      const label = document.createElement('label');
      label.setAttribute('for', 'create-detail-' + i);
      label.innerHTML = 'Detail #' + (i + 1) + ': ';
      container.appendChild(label);
      const input = document.createElement('input');
      input.id = 'create-detail-' + i;
      input.type = 'text';
      container.appendChild(input);
      const br = document.createElement('br');
      container.appendChild(br);
    };
  }

  render() {
    return (
      <div>
        <h4>Create an Invoice</h4>
        <form onSubmit={ this.create.bind(this) }>
          <label htmlFor="create-name">Name: </label> <br/> 
          <input id="create-name" type="text"/>
          <div id="create-details-container"> 
            <label for="create-detail-0">Details #1: </label>
            <input id="create-detail-0" type="text"></input><br/>
            <label for="create-detail-1">Details #2: </label>
            <input id="create-detail-1" type="text"></input><br/>
            <label for="create-detail-2">Details #3: </label>
            <input id="create-detail-2" type="text"></input><br/>
            <label for="create-detail-3">Details #4: </label>
            <input id="create-detail-3" type="text"></input><br/>
            <label for="create-detail-4">Details #5: </label>
            <input id="create-detail-4" type="text"></input>
          </div>
           <div id="create-details-container"/>
          <Button variant="primary" type="submit">Submit</Button>
         </form>
        <div id="create-response">
          <pre>
            <code>{ JSON.stringify(this.state, null, 2) }</code>
          </pre>
        </div>
      </div>
    );
  }
}

export default Create;
