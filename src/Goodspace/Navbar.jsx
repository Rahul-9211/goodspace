import FeatherIcon from "feather-icons-react";
import logo from "../Images/logo.jpg";
import user from "../Images/user.jpg";
// import React from "react";
import { Icon } from "react-icons-kit";
import React, { useState } from 'react';
import { ic_description } from "react-icons-kit/md/ic_description";
import { ic_people } from "react-icons-kit/md/ic_people";
import { ic_ac_unit } from 'react-icons-kit/md/ic_ac_unit'

const Navbar = (props) => {
    const [showResults, setShowResults] = React.useState(false)
    const [showResults2, setShowResults2] = React.useState(true)
    const [showicon, setShowicon] = React.useState("menu")
    const onClick = () => {
        if (showResults) {
            setShowicon("menu")
            return setShowResults(false) , setShowResults2(true)
        }
        else {
            setShowicon("x")
            return (setShowResults(true) , setShowResults2(false)
            )
        }
    }
    // const [state, setState] = useState(false);
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="cant load" />
            </div>
            <div className="search">
                <div className="text">
                    <FeatherIcon icon="chevron-down" className="down_icon" />
                    <div class="dropdown">
                        <button class="dropbtn">search</button>
                        <div class="dropdown-content">
                            <a href="#">India</a>
                            <a href="#">USA</a>
                            <a href="#">Pakistan</a>
                            <a href="#">Russia</a>
                            <a href="#">France</a>
                            <a href="#">Afganistan</a>
                        </div>
                    </div>
                </div>
                <div className="icon">
                    <FeatherIcon icon="search" size={30} color="#2e2e2e" />
                </div>
            </div>

            <div className="ham_burger" onClick={onClick}>
                <FeatherIcon icon={showicon} />
            </div>

            {/* {(() => {
                if (state === false) {
                    return (

                        <div className="ham_burger" onClick={() => setState(true)}>
                            <FeatherIcon icon="menu" />
                        </div>
                    )
                }
                else {
                    return (
                        <div className="ham_burger" onClick={() => setState(false)}>
                            <FeatherIcon icon="x" />
                        </div>
                    )
                }
            })()} */}
            
            {showResults2 ?
            <div className="menu_bar menu2">
                <div className="feedback">
                    <div style={{ color: "#000000" }}>
                        <Icon size={30} icon={ic_description} />
                    </div>
                    <p>Feedback</p>
                </div>
                <div className="hire">
                    <div style={{ color: "#2465ff" }}>
                        <Icon size={30} icon={ic_people} />
                    </div>
                    <p>Hire</p>
                </div>
                <div className="premium">
                    <div style={{ color: "#ffad24" }}>
                        <Icon size={30} icon={ic_ac_unit} />
                    </div>
                    <p>Premium</p>
                </div>
                <div className="notification">
                    <div style={{ color: "#000000" }}>
                        <FeatherIcon icon="bell" />
                    </div>
                    <p>Notification</p>
                </div>
                <div className="message">
                    <div style={{ color: "#000000" }}>
                        <FeatherIcon icon="message-circle" />
                    </div>
                    <p>Message</p>
                </div>
                <div className="user">
                    <img src={user} alt="cant load" />
                </div>
                    {props.content}
                </div> : null}

            {showResults ?
                <div className="menu_bar">
                    <div className="feedback">
                        <div style={{ color: "#000000" }}>
                            <Icon size={30} icon={ic_description} />
                        </div>
                        <p>Feedback</p>
                    </div>
                    <div className="hire">
                        <div style={{ color: "#2465ff" }}>
                            <Icon size={30} icon={ic_people} />
                        </div>
                        <p>Hire</p>
                    </div>
                    <div className="premium">
                        <div style={{ color: "#ffad24" }}>
                            <Icon size={30} icon={ic_ac_unit} />
                        </div>
                        <p>Premium</p>
                    </div>
                    <div className="notification">
                        <div style={{ color: "#000000" }}>
                            <FeatherIcon icon="bell" />
                        </div>
                        <p>Notification</p>
                    </div>
                    <div className="message">
                        <div style={{ color: "#000000" }}>
                            <FeatherIcon icon="message-circle" />
                        </div>
                        <p>Message</p>
                    </div>
                    <div className="user">
                        <img src={user} alt="cant load" />
                    </div>
                    {props.content}
                </div> : null}
        </div>
    );
};
export default Navbar;
