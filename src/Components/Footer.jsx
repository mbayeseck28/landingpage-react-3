import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer bg-body-secondary py-5 px-4'>
        <div className="container">
        <div className="haut">
        <div className="row">
            <div className="offset-sm-1 col-sm-5  mb-3 mb-sm-0">
                <div className="card bg-body-secondary cont border-0">
                    <h6 className="card-title fw-semibold">NEXT INVEST</h6>
                    <p className="card-text textFoot">Copyright © 2020. LogoIpsum. All rights reserved.</p>
                </div>
            </div>
            <div className="col-sm-2 ">
                <div className="card bg-body-secondary cont border-0">
                    <p className='titleFoot fw-semibold'>Services</p>
                    <a href="#test">Email Marketing</a>
                    <a href="#test">Campaigns</a>
                    <a href="#test">Branding</a>
                    <a href="#test">Offline</a>
                </div>
            </div>
            <div className="col-sm-2 ">
                <div className="card bg-body-secondary cont border-0">
                    <p className='titleFoot fw-semibold'>Services</p>
                    <a href="#test">Our Story</a>
                    <a href="#test">Benefits</a>
                    <a href="#test">Team</a>
                    <a href="#test">Careers</a>
                </div>
            </div>
            <div className="col-sm-1 ">
                <div className="card bg-body-secondary conta border-0">
                    <a href="#test">^</a>
                </div>
            </div>
        </div>
        </div>
      <div className="bas mt-5">
      <div className="row">
            <div className="offset-sm-1 col-sm-5 mb-3 mb-sm-0">
                <div className="card bg-body-secondary cont border-0">
                    <p className="card-title formTit fw-semibold">Subscribe to our new</p>
                    <form className="d-flex " role="search">
                        <input className="form-control bg-body-secondary me-2" type="search" placeholder="Email address" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>

                </div>
            </div>
            <div className=" offset-sm-4 col-sm-2">
                <div className="card bg-body-secondary socio cont border-0">
                    <a href="#test"><FaFacebook /></a>
                    <a href="#test"><FaInstagram /></a>
                    <a href="#test"><FaTwitter /></a>
                </div>
            </div>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Footer
