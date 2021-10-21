import './FormInput.module.scss';
import '@edutest/ui-styles';

import sampleProfile from './images/sample-profile.jpg';

import { Form, FormGroup } from 'reactstrap';
import { FormButton, FormLabel, TextInput } from '../..';

export function FormInput({ submit }) {

  const formSubmit = (event) => {
    let cName = event.target.cName.value,
      cLocation = event.target.cLocation.value, cAddress = event.target.cAddress.value;
    submit({ cName, cLocation, cAddress });
    event.preventDefault();
  }

  return (
    <div>
      <div class="container">
        <h2>Add Center</h2>
        <Form
          onSubmit={(event) => formSubmit(event)}>
          <FormGroup>
            <FormLabel value="Center Name" for="examplePassword" />
            <TextInput type="text" name="cName" id="cName"
              placeholder="Enter Center Name" />
          </FormGroup>
          <FormGroup>
            <FormLabel value="Center Location" for="cLocation" />
            <TextInput type="text" name="cLocation" id="cLocation"
              placeholder="Enter Center City" />
          </FormGroup>
          <FormGroup>
            <FormLabel value="Address" for="cAddress" />
            <TextInput type="textarea" id="cAddress" name="text"
              placeholder="Enter Center full Address" />
          </FormGroup>
          <br />
          <FormButton value="Save Changes" />
        </Form>
      </div>
    </div>
  );
}
export default FormInput;
