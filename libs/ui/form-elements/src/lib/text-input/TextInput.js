import './TextInput.module.scss';
import { Input } from 'reactstrap';

export function TextInput(props) {
  return (
    <div>
      <Input
        onChange={props.onChange}
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        required={props.required}
      />
    </div>
  );
}
export default TextInput;
