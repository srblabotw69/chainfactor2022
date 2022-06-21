import * as React from "react";
import { render } from "react-dom";
import { chainfactor } from "../../declarations/chainfactor";

// import Create from '../../invoice_assets/components/create.jsx';
// import Read from '../../invoice_assets/components/read.jsx';
// import Update from '../../invoice_assets/components/update.jsx';
// import Delete from '../../invoice_assets/components/delete.jsx';
import Create from '../components/create.jsx';
import Read from '../components/read.jsx';
import Update from '../components/update.jsx';
import Delete from '../components/delete.jsx';

const MyHello = () => {

  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');
 
  async function doGreet() {
    const greeting = await chainfactor.greet(name);
    setMessage(greeting);
  } 

  async function doReadText() {
    const readText = await chainfactor.readText(name);
    setMessage(readText);
  } 

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

      <div style={{ "backgroundColor": "lightyellow" }}>
        <p>
          {" "}
          Invoice financing allows you to borrow against your outstanding invoices. <br/> 
          With factoring, you're selling your invoices to a factoring company at a discount.
        </p>
      </div>

      <div style={{ margin: "30px" }}>
        <input
          id="name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        ></input>
        <button onClick={doGreet}>Get Greeting!</button>
        Greeting is: "
        <span style={{ color: "blue" }}>{message}</span>"
      </div>

      <div style={{ margin: "30px" }}>
        <input
          id="name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        ></input>
        <button onClick={doReadText}>ReadText!</button>
        readText is: "
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
