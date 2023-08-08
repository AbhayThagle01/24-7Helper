import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    const backg={
        background:"linear-gradient(to bottom, white,#5fc3ef, white)"
    
    }
    return (
        <div style={backg}>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4"> About Us </h1>
                        <p className="lead mb-4">
                        24*7 Helper is the perfect place to turn to for<br/> all your Apartment, Villa, Office and<br/> beyond requirements — from setting up new<br/> build projects to maintenance help.<br/> We provide first-rate, reliable service<br/> to Residential and Commercial sectors. <br/>Your satisfaction is our commitment!<br/>

We take pride in delivering<br/> services rendered by professionals who have been verified and qualified. We offer a wide range of services, including plumbing, electrical work, painting, carpentry,
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
