import React from 'react';
import SignIn from "./signin"
import SignUp from "./signup"
import SimpleTable from "./table"
import Welcome from './welcome'


function App() {
  return (
    <div className="App">
      <div><SignIn/></div>
      <div><SignUp/></div>
      <div><SimpleTable/></div>
      <div><Welcome/></div>
          Learn React
    </div>
  );
}

export default App;
