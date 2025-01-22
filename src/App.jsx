/* import './App.css'
import LoginForm from '../src/Components/LoginForm/LoginForm'
import Login from '../src/Components/LoginPage/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginForm descripcion={'Iniciar Sesión'}/>}/>
        <Route path='/contenido-sesion' element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App
 */

import React from "react";
import { Button, View, Heading, Text } from "@aws-amplify/ui-react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import "./App.css";
import Login from '../src/Components/LoginPage/Login'

function App() {
  const { signOut } = useAuthenticator();

  return (
    <View padding="2rem">
      <Heading level={1}>¡Bienvenido a la aplicación!</Heading>
      <Login/>
        <Button variation="primary" marginTop="2rem" onClick={signOut}>
        Cerrar sesión
      </Button>
    </View>
  );
}

export default App;