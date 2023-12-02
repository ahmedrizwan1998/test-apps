import React from 'react'
import './possibilities.css'
import Iframe from 'react-iframe'
import Image from "next/image"
import arrow from '../../../../public/img/arrow.svg';


const Possibilities = () => {
    return (
        <div className="container possibilityDiv d-flex flex-column pt-5">
            <div className='top mx-auto w-75' style={{ color: "white" }}>
                <h1 style={{ fontSize: "50px", fontWeight: "300", fontFamily: 'serif' }}>Mall Of: Endless Possibilities</h1>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='mx-auto pt-5 pb-5'>
                <Iframe url="https://www.w3schools.com"
                    width="1000px"
                    height="400px"
                    id=""
                    className=""
                    display="block"
                    position='relative'
                />
            </div>
            <div className='access-ticket-card d-flex p-4'>
                <div className='w-50'>
                    <h6 className="card-subtitle mb-4 ">25 SR/GUEST</h6>
                    <h5 className="card-title pb-4" style={{ fontSize: "29px", fontFamily: "serif" }}>Get your General Access Ticket</h5>
                    <p className="card-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='w-50'>
                    <span className='arw-icon ps-5'><Image className='ms-auto' src={arrow} alt='arrow' /></span>
                </div>
            </div>
        </div>
    )
}

export default Possibilities
