import './Button.module.scss';
export function Button(props) {
  return (
    <div>
      <input
        className={props.className}
        id={props.id}
        type="submit"
        value={props.value}
      />
    </div>
  );
}
export default Button;
