/* import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';
Amplify.configure(config);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
 */

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import React from "react";
import { createRoot } from "react-dom/client";
import config from "./amplifyconfiguration.json";
import App from "./App.jsx";
import "./index.css";

Amplify.configure(config);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authenticator initialState="signIn">
      <App />
    </Authenticator>
  </React.StrictMode>
)



