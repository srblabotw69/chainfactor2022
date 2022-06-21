import React from 'react';

import { chainfactor } from "../../declarations/chainfactor";

const $ = document.getElementById.bind(document);
const idl = require('../utilities/idl');

class Delete extends React.Component {

  constructor() {
    super();
    this.state = { success: null };
  }

  delete(event) {
    event.preventDefault();
    const invoiceId = parseInt($('delete-invoice-id').value, 10);
    chainfactor.delete(invoiceId).then((success) => {
      this.setState({ success });
    });
  }

  render() {
    return (
      <div>
        <h4>Delete a Invoice</h4>
        <form onSubmit={ this.delete.bind(this) }>
          <label htmlFor="delete-invoice-id">Identifier: </label>
          <input id="delete-invoice-id" type="number"/>
          <br/>
          <button type="submit">Submit</button>
        </form>
        <div id="delete-response">
          <pre>
            <code>{ JSON.stringify(this.state, null, 2) }</code>
          </pre>
        </div>
      </div>
    );
  }
}

export default Delete;
