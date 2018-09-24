import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { Form, FormGroup, Label, Input } from 'reactstrap';

const Login = () => (
    <div className="formulario">
         <Form>
        <FormGroup>
          <Label for="exampleEmail">Correo</Label>
          <Input type="email" name="email" id="boxEmail" placeholder="Ingrese su correo" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Contraseña</Label>
          <Input type="password" name="password" id="boxPassword" placeholder="Ingrese su contraseña" />
        </FormGroup>
       
      </Form>

    </div>
)
     
export default Login;