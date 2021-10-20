import './TextInput.module.scss';
export function TextInput(props) {
  return (
    <div>
      <input
        className={props.className}
        type="text"
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
      />
    </div>
  );
}
export default TextInput;
