export default function FormText(props) {
    return (
    <div className='checkout-form'>
        <p>{props.fieldName}</p>
        <input placeholder={props.fieldName} id={props.fieldName} className="text-input"/>
    </div>
    );
}