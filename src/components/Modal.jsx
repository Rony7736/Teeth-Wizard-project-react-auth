
const Modal = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e);
        
    }

    return (
        <div>
            {/* < button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}> open modal</button > */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">

                    <form onSubmit={handleSubmit} className="space-y-2">

                        <div className="flex justify-between items-center">
                            <h2>First Name</h2>
                            <input type="text" placeholder="Type here" name="Fname" className="input input-bordered input-primary w-full max-w-xs" />
                        </div>

                        <div className="flex justify-between items-center">
                            <h2>Last Name</h2>
                            <input type="text" placeholder="Type here" name="Lname" className="input input-bordered input-primary w-full max-w-xs" />
                        </div>

                        <div className="flex justify-between items-center">
                            <h2>Email</h2>
                            <input type="text" placeholder="Type here" name="email" className="input input-bordered input-primary w-full max-w-xs" />
                        </div>

                        <div className="flex justify-between items-center">
                            <h2>Phone Number</h2>
                            <input type="text" placeholder="Type here" name="phone" className="input input-bordered input-primary w-full max-w-xs" />
                        </div>

                        <div className="flex justify-between items-center">
                            <h2>Appointment date</h2>
                            <input type="date" placeholder="Type here" name="date" className="input input-bordered input-primary w-full max-w-xs" />
                        </div>

                        <div className="flex justify-between items-center">
                            <h2>Address</h2>
                            <input type="text" placeholder="Type here" name="address" className="input input-bordered input-primary w-full max-w-xs" />
                        </div>

                        <button className="btn btn-neutral" type="submit">Make Appointment</button>

                    </form>

                    <div className="modal-action">
                        <form method="dialog">

                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;