import React from "react";
import phoneIcon from '../Pictures/pngguru.com.png'
import './ContactPage.css'

const ContactPage = () => {
    const linked = 'https://www.linkedin.com/in/maciej-nowacki-12b4581b3/'
    return <>
        <div className="kontaktInfo">
            <p className="centeredText">Skontaktuj się ze mną poprzez:</p>
            <br />
            <div className="kontaktInfoCredentials">
                <a href={linked}><img src="https://static-exp1.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" alt="LinkedIn" /> <span>LinkedIn</span></a>
                <br />
                <a href="mailto:nowacki.maciej.pr@gmail.com?subject=Wiadomość%20z%20portfolio"><img src="https://ssl.gstatic.com/ui/v1/icons/mail/images/favicon5.ico" alt="gmail" /><span>E-mail: </span></a>
                nowacki.maciej.pr@gmail.com
                <br />
                <p className="centeredText">Lub</p>
                <a href='tel:502891350'>
                    <img src={phoneIcon} alt="phone" />
                    <br />
                    <span>Call me</span>
                </a>
                <span>(+48) 502-891-350</span>
            </div>
        </div>
    </>
}

export default ContactPage