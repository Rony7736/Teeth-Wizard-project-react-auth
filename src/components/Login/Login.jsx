import { useContext, useState } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";

const Login = () => {

    const contextValue = useContext(authContext)
    const { handleLogin, handleGoogleLogin, handleLogout } = contextValue

    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value
        // console.log(email, password);

        handleLogin(email, password) 
        .then(res => {})
        .catch(err => {
             console.log(err.message)              
        })
    }

       

    return (

        <div className="flex justify-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl my-10">
                <form onSubmit={handleSubmit} className="card-body">

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

                    <div className="form-control mt-6">
                        <div className="flex gap-6 justify-center">
                            <button className="btn btn-primary">Login</button>

                        </div>

                    </div>
                </form>

                <div className="flex justify-around">

                    <button onClick={handleGoogleLogin} className="btn btn-primary">Google Login</button>

                    <button onClick={handleLogout} className="btn btn-primary mb-4">logout</button>

                </div>
                <p className="p-6">New to the website? Please <NavLink to="/register" className="underline text-red-500">Register</NavLink></p>
            </div>
        </div>
    );
};

export default Login;