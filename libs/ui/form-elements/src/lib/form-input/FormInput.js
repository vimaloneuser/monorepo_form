import './FormInput.module.scss';
import '@edutest/ui-styles';

import sampleProfile from './images/sample-profile.jpg';

export function FormInput(props) {
  return (
    <div>
      <center>
        <h1>Welcome to FormInput that can be tested in a Storybook!!</h1>
        <button className="btn btn--lg">
          <span>This is a sample button!</span>
        </button>
        <p>Show some image:</p>
        <p>
          <img src={sampleProfile} alt="Sample Profile" />
        </p>
      </center>
    </div>
  );
}
export default FormInput;
