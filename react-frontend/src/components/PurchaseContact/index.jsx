import './style.scss'
export default function PurchaseContact() {
    return (
        <>
            <p className='heading'>Contact Information</p>
            <div className='contact-info'>
                <div className='contact-form'>
                    <div className='contact-form-label'>
                        New address ? 
                        <span> (optional)</span>
                    </div>
                    <input className='contact-form-input' id="address" name="address" placeholder='Addrress'/>
                </div>
                {/* <div className='contact-form'>
                    <div className='contact-form-label'>First Name</div>
                    <input className='contact-form-input' id="name" name="name" placeholder='First Name'/>
                </div>
                <div className='contact-form'>
                    <div className='contact-form-label'>Name</div>
                    <input className='contact-form-input' id="name" name="name" placeholder='Last Name'/>
                </div> */}
            </div>
        </>
    )
}