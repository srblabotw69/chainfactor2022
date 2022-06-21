import React from 'react';

import { chainfactor } from "../../declarations/chainfactor";

const $ = document.getElementById.bind(document);
const idl = require('../utilities/idl');

class Read extends React.Component {

  constructor() {
    super();
    this.state = { invoice: null };
  }

  read(event) {
    event.preventDefault();
    const invoiceId = parseInt($('read-invoice-id').value, 10);
    chainfactor.read(invoiceId).then((result) => {
      const invoice = idl.fromOptional(result);
      if (invoice) {
        invoice.details = idl.fromList(invoice.details);
      };
      this.setState({ invoice });
    });
  }

  render() {
    return (
      <div>
        <h2>Read a Invoice</h2>
        <form onSubmit={ this.read.bind(this) }>
          <label htmlFor="read-invoice-id">Identifier: </label>
          <input id="read-invoice-id" type="number"/>
          <br/>
          <button type="submit">Submit</button>
        </form>
        <div id="read-response">
          <pre>
            <code>{ JSON.stringify(this.state, null, 2) }</code>
          </pre>
        </div>
      </div>
    );
  }
}

export default Read;
