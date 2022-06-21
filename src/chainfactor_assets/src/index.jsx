import * as React from "react";
import { render } from "react-dom";
import { chainfactor } from "../../declarations/chainfactor";

import Create from '../components/create.jsx';
import Read from '../components/read.jsx';
import Delete from '../components/delete.jsx';

const MyHello = () => {

  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');

  async function doCreateNFT() {
    const createNFT = await chainfactor.createNFT( parseInt(name));
    setMessage(createNFT);
  }

  async function doCreateDAO() {
    const balNFT = await chainfactor.createDAO();
    setMessage(balNFT);
  }



  return (
    <div style={{ "fontSize": "20" }}>
      <div style={{ "backgroundColor": "lightgreen" }}>
        <p><h3>ChainFactor</h3></p>
      </div>


      <div style={{ margin: "30px" }}>
        <input
          id="name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        ></input>
        <button onClick={doCreateDAO}>createDAO!</button>
        createDAO is: "
        <span style={{ color: "blue" }}>{message}</span>"
      </div>

      <div style={{ margin: "30px" }}>
        <input
          id="name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        ></input>
        <button onClick={doCreateNFT}>createNFT!</button>
        createNFT is: "
        <span style={{ color: "blue" }}>{message}</span>"
      </div>


      <div style={{ "backgroundColor": "lightblue" }}>
        <p>
           <h3>Enter Invoice</h3>
        </p>
      </div>
      <div>
        <Create/>
        <hr/>
        <Read/>
        <hr/>
        <Delete/>
      </div>
    </div>
  );
};

render(<MyHello />, document.getElementById("app"));
