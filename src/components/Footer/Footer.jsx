import React from "react"
import { NavLink } from "react-router-dom"
import './Footer.css'
import facebook from '../../assets/icon-facebook.svg'
import instagram from '../../assets/icon-instagram.svg'
import pins from '../../assets/icon-pinterest.svg'
import twitter from '../../assets/icon-twitter.svg';
import address from "../../assets/map-marker-home.png"
import phone from "../../assets/telephone-cercle.png"
import email from "../../assets/cercle-enveloppe.png"
function Footer() {
    return <div className="bg-footer">
                <div className="contactLiens">
                    <div className="addressFooter">
                        <img src={address} alt="address"  />
                        <div>
                            <h4>NOTRE BUREAU PRINCIPALE</h4>
                            <p>Av.Ruphin Kisilu N°40</p>
                        </div>
                    </div>
                    <div className="phoneFooter">
                        <img  src={phone} alt="phone" />
                        <div>
                            <h4>NUMERO TELEPHONE</h4>
                            <p>+243 892 669 552</p>
                        </div>
                    </div>
                    <div className="emailFooter">
                        <img src={email} alt="email" />
                        <div>
                            <h4>E-MAIL</h4>
                            <p>nzitapuindi2 @gmail.com</p>
                        </div>
                    </div>
                    <div className="lien">
                        <NavLink to=''>
                            <img src={facebook} alt="icone facebook" />
                        </NavLink>
                        <NavLink to=''>
                            <img src={instagram} alt="icone instagrame" />
                        </NavLink>
                        <NavLink to=''>
                            <img src={pins} alt="icon pinsrest" />
                        </NavLink>
                        <NavLink to=''>
                            <img src={twitter} alt="icone twitter" />
                        </NavLink>
                    </div>
                </div>
                <div className="infoDesign">
                    <p>©Copyright in 2023 to Kollectif</p>
                    <div className="moi">
                        <p className="moiSecond">Jordache & Meddy</p>
                        <p>Kollectif Numerique</p>
                    </div>
                </div>
            </div>
}


export default Footer