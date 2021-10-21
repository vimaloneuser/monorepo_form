import './Button.module.scss';
import { Button } from 'reactstrap';
export function FormButton(props) {
  return (
    <div>
      <Button
        className={props.className}
        id={props.id}
        type="submit">
        {props.value}
      </Button>
    </div>
  );
}
export default FormButton;
