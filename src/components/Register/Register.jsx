import { useContext, useState } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";

const Register = () => {

    const contextValue = useContext(authContext)
    const { handleRegister, manageProfile } = contextValue

    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")

        const name = e.target.name.value
        const image = e.target.image.value
        const email = e.target.email.value
        const password = e.target.password.value
        const conpassword = e.target.conpassword.value

        if(password.length < 6){
            setError("Password must contain at least 6 characters")
            return
        }

        if (password !== conpassword) {
            setError("password didn't match")
            return;
        }

        if(!/[A-Z]/.test(password)){
            setError("Password must contain at least one Uppercase letter")
            return
        }

        // console.log(name, image, email, password, conpassword);

        handleRegister(email, password)
        .then(res => {
            manageProfile(name, image)
        })

    }

    return (
        <div className="flex justify-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-10">
                <form onSubmit={handleSubmit} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="photo url" name="image" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" placeholder="Confirm Password" name="conpassword" className="input input-bordered" required />
                        {
                            error && <p className="text-red-500">{error}</p>
                        }
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p>New to the website? Please <NavLink to="/login" className="underline text-red-500">Login</NavLink></p>
                </form>

            </div>
        </div>
    );
};

export default Register;