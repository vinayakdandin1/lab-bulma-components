import React from 'react';
import Navbar from './components/navbar/Navbar.js'
import FormField from './components/formfield/FormField.js'
import Message from './components/message/Message.js'
import Signup from './components/signUp/Signup.js'
import 'bulma/css/bulma.css'

const App = () => {
  return (
    <div>
      {/* <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> */}
      <Signup />
      <Message title="Hello world"> <div> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.</div>  </Message>
    </div>
  )
};

export default App;
