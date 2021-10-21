import './TextInput.module.scss';
import { Input} from 'reactstrap';

export function TextInput(props) {
  return (
    <div>
      <Input
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
      />
    </div>
  );
}
export default TextInput;
