import './Button.module.scss';
import { Button } from 'reactstrap';

export function FormButton(props) {
  return (
    <div>
      <Button
        onClick={props.onClick}
        disabled={props.disabled}
        size={props.size}
        outline={true}
        color={"secondary"}
        className={props.className}
        id={props.id}
        type="submit">
        {props.value}
      </Button>
    </div>
  );
}
export default FormButton;
