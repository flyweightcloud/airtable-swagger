import React, { useEffect } from 'react';
import './App.css';
import { Form } from './components/form'
import { FontSizes } from '@fluentui/react/lib/Styling';
import { Depths, initializeIcons } from '@fluentui/react';

const documentStyle = {
  marginTop: "3em",
  boxShadow: Depths.depth4,
  padding: "2em",
  backgroundColor: "#ffffff",
  width: "100%",
  minWidth: "350px",
  maxWidth: "700px",
}

function App() {

  useEffect(() => {
    initializeIcons(/* optional base url */);
  });

  return (
    <div className="App">
      <main>
        <img src='flyweight_logo_800.png' height='127' width='300' alt="Flyweight Logo"/>
        <h1 style={{fontSize: FontSizes.size42, paddingBottom: "1em", paddingTop:"1em",}}>
          Airtable to Swagger Conversion
        </h1>
        <Form />
        <div style={documentStyle}>
          <h4>About</h4>
          <p>This application converts your Airtable tables to Swagger files which can then be used
            to consume the Airtable API directly from the Microsoft Power Platform.
          </p>
          <h4>How to use this app</h4>
          <p>Start by visiting <a href='https://airtable.com/api' target='_blank' rel="noreferrer">https://airtable.com/api</a> in order to find your Airtable API URL.
            You will also need to provide your Airtable API key, which can be found in your 
            account page (<a href="https://airtable.com/account" target="_blank" rel="noreferrer">https://airtable.com/account</a>)
          </p>
          <p>
            Enter in the details above and click generate. The generated swagger file will be emailed to the email address you provided.
            You can then import this file into your Power Platform project as a "Custom Connector".
          </p>
          <h4>Support</h4>
          <p>
            This project is maintained by Flyweight.Cloud, which provides low code tooling for building cloud applications.
            If you have any questions, please contact us at <a href="mailto:team@flyweight.cloud">team@flyweight.cloud</a>
          </p>
          <p>
            This project is provided without warranty and under the terms of the MIT license.
          </p>
          <h4>Open Source</h4>
          <p>
            Flyweight believes open source is the key to faster low code adoption. You can find the source code to this swagger builder at <a href='https://github.com/flyweightcloud/airtable2swagger' target='_blank' rel="noreferrer">https://github.com/flyweightcloud/airtable2swagger</a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
