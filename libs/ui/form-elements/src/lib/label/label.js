import './Label.module.scss';
export function Label(props) {
  return (
    <div>
      <label
        className={props.className}
        for={props.for}
        id={props.id}>
        {props.value}
      </label>
    </div>
  );
}
export default Label;
