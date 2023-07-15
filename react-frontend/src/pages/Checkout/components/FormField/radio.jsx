export default function FormRadio (props) {
    const isTop = props.isTop == "true" ? 'radio-top' : '';
    console.log(isTop);
    return (
    <div className={'checkout-form radio-form ' + isTop}>
        <input type="radio" id={props.fieldName} name={props.name} className="radio-input"/>
        <p>{props.fieldName}</p>
    </div>
    );
}