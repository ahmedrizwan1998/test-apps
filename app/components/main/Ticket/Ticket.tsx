import Image from "next/image"
import React from 'react'
import arrow from '../../../../public/img/arrow.svg';
import ticketImg from '../../../../public/img/little-krazy.png';
import './ticket.css';

const Ticket = () => {
    return (
        <div className="container ticketDiv">
            <div className="d-flex w-75 flex-column pb-5 ps-5">
                <h1 className="pb-3" style={{ textAlign: "left" }}>Book General Access ticket and enjoy the attractions for free</h1>
                <button className="Book_Btn d-flex w-50 ps-4">Book General Access Ticket <span className='ps-5'><Image className='ms-auto' src={arrow} alt='arrow' /></span></button>
            </div>
            <div className="d-flex imgDiv">
                <div className="d-flex flex-column">
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
                </div>
            </div>
        </div>
    )
}

export default Ticket
