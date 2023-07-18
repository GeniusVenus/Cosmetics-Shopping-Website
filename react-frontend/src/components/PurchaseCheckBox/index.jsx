import './style.scss'
export default function PurchaseCheckBox(props) {
    return (
        <>
            <div>
                <form>
                    <input type="checkbox" id={props.id} className="checkbox-input"
                    name={props.id} value={props.id}/>
                    <label for={props.id} className="checkbox-text">{props.text}</label>
                </form>
            </div>
        </>
    )
}