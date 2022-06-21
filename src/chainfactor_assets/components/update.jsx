import React from 'react';

import { chainfactor } from "../../declarations/chainfactor";

const $ = document.getElementById.bind(document);
const idl = require('../utilities/idl');

class Update extends React.Component {

  constructor() {
    super();
    this.state = { success: null };
  }

  update(event) {
    event.preventDefault();
    const invoiceId = parseInt($('update-invoice-id').value, 10);
    const name = $('update-name').value;
    // const n = parseInt($('update-details-count').value, 10);
    n = 5;
    const details = [];
    for (var i = 0; i < n; i++) {
      const detail = $('update-detail-' + i).value;
      details.push(detail);
    };
    const invoice = { name, details };
    chainfactor.details = idl.toList(invoice.details);
    chainfactor.update(invoiceId, invoice).then((success) => {
      this.setState({ success });
    });
  }

  toggle() {
    // const n = parseInt($('update-details-count').value, 10);
    n = 5;
    const container = $('update-details-container');
    while (container.hasChildNodes()) {
      container.removeChild(container.lastChild);
    };
    for (var i = 0; i < n; i++) {
      const label = document.createElement('label');
      label.setAttribute('for', 'update-detail-' + i);
      label.innerHTML = 'Detail #' + (i + 1) + ': ';
      container.appendChild(label);
      const input = document.createElement('input');
      input.id = 'update-detail-' + i;
      input.type = 'text';
      container.appendChild(input);
      const br = document.createElement('br');
      container.appendChild(br);
    };
  }

  render() {
    return (
      <div>
        <h2>Update a Invoice</h2>
        <form onSubmit={ this.update.bind(this) }>
          <label htmlFor="update-invoice-id">Identifier: </label>
          <input id="update-invoice-id" type="number"/>
          <br/>
          <label htmlFor="update-name">Name: </label>
          <input id="update-name" type="text"/>
          <br/>
          <label htmlFor="update-details-count">Details: </label>
          
           <div id="update-details-container"> 
            <label for="update-detail-0">Details #1: </label>
            <input id="update-detail-0" type="text"></input><br/>
            <label for="update-detail-1">Details #2: </label>
            <input id="update-detail-1" type="text"></input><br/>
            <label for="update-detail-2">Details #3: </label>
            <input id="update-detail-2" type="text"></input><br/>
            <label for="update-detail-3">Details #4: </label>
            <input id="update-detail-3" type="text"></input><br/>
            <label for="update-detail-4">Details #5: </label>
            <input id="update-detail-4" type="text"></input>
          </div>
           <div id="update-details-container"/>


          <button type="submit">Submit</button>
        </form>
        <div id="update-response">
          <pre>
            <code>{ JSON.stringify(this.state, null, 2) }</code>
          </pre>
        </div>
      </div>
    );
  }
}

export default Update;
