import React from 'react'
import Image from "next/image"
import arrow from '../../../../public/img/arrow.svg';
import experienceImg from '../../../../public/img/vida.png';
import './experience.css';

const Experience = () => {
    return (
        <div className="container ticketDiv">
            <div className="d-flex w-75 flex-column pb-5 ps-5">
                <h1 className="pb-3" style={{ textAlign: "left" }}>Book General Access ticket and enjoy the attractions for free</h1>
                <button className="Book_Btn d-flex w-50 ps-4">Book General Access Ticket <span className='ps-5'><Image className='ms-auto' src={arrow} alt='arrow' /></span></button>
            </div>
            <div className="d-flex cardsDiv">
                <div className="card" style={{ width: "18rem" }}>
                    <Image src={experienceImg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                {/* <div className="d-flex flex-column">
                    <Image className='ms-auto ticketImg p-4' src={ticketImg} alt='ticket' />
                    <h3 style={{ textAlign: 'center', fontSize: "30" }}>Little Krazy</h3>
                </div>
                <div className="d-flex flex-column">
                    <Image className='ms-auto ticketImg p-4' src={ticketImg} alt='ticket' />
                    <h3 style={{ textAlign: 'center', fontSize: "30" }}>Little Krazy</h3>
                </div>
                <div className="d-flex flex-column">
                    <Image className='ms-auto ticketImg p-4' src={ticketImg} alt='ticket' />
                    <h3 style={{ textAlign: 'center', fontSize: "30" }}>Little Krazy</h3>
                </div> */}
            </div>
        </div>
    )
}

export default Experience
