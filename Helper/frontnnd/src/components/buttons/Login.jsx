import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function loginUser(event) {
        event.preventDefault();
        console.log("login function working");
        const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        const data = await response.json();
        console.log(data);
    }

    return (
        <>
            {/* <!-- Button trigger modal --> */}
            {/* <button type="button" className="btn btn-outline-primary ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
                <span className="fa fa-sign-in me-1">Login</span> 
            </button> */}

            {/* <!-- Modal -->         className="modal fade"  id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"*/}
            
            <div style={{height:"80vh",background:"linear-gradient(to bottom, white,#5fc3ef, white)"}}>
                <div className="modal-dialog">
                    <div className="modal-content border-2 border-primary" >
                        <div className="modal-header">
                            <h5 className="modal-title">Login</h5>
                            {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        </div>
                        <div className="modal-body">
                            <form onSubmit={loginUser}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
                                    <input type="email" value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                        }} />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" value={password} className="form-control" id="exampleInputPassword1"
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                        }} />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-outline-primary w-100 mt-5">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-3' ></div>
        </>
    )
}

export default Login
