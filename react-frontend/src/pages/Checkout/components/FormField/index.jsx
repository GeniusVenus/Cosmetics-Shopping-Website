import "./style.scss";
import FormText from "./text";
import FormRadio from "./radio";
export default function FormField(props) {
  return (
    <>
    {props.type != "radio" ? 
      <FormText {...props}></FormText>  :
      <FormRadio {...props}></FormRadio>}
    </>
  );
}
