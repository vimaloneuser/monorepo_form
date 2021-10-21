import './Label.module.scss';
import {Label } from 'reactstrap';

export function FormLabel(props) {
  return (
    <div>
      {/* <label
        className={props.className}
        for={props.for}
        id={props.id}>
        {props.value}
      </label> */}
      <Label
        className={props.className}
        for={props.for}
        id={props.id}>
        {props.value}</Label>
    </div>
  );
}
export default FormLabel;
