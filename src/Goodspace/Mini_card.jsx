import FeatherIcon from "feather-icons-react";
import user from "../Images/user.jpg";
import { Icon } from "react-icons-kit";
import { ic_ac_unit } from 'react-icons-kit/md/ic_ac_unit'
import { ic_radio_button_checked } from 'react-icons-kit/md/ic_radio_button_checked';
import {ic_lens} from 'react-icons-kit/md/ic_lens';
import {ic_check_circle} from 'react-icons-kit/md/ic_check_circle'
const Mini_card = () => {
    return (
        <div className="mini_card">
            <div className="card">
                <div className="upper">
                    <p className="edit">Edit</p>
                    <img src={user} alt="cant load" />
                    <h2>John L. Jene</h2>
                    <h3>26, New Delhi</h3>
                    <div className="available" style={{ color: "#31d531"}}>
                        <Icon size={20} icon={ic_lens} style={{  marginRight:"5px"}} />
                        <h4 style={{ color: "#000000" }}>Available Immediately</h4>
                    </div>
                </div>
                <div className="lower">
                    <h3>Skills</h3>
                    <div className="skill">
                        <button>Python</button>
                        <button>SQL</button>
                        <button>SQL</button>
                    </div>
                    <div className="type_work">
                        <p>Type Of Work</p>
                        <FeatherIcon icon="clock" className="down_icon" />
                    </div>
                    <small>work from Home</small>
                    <div className="compensation">
                        <p>Compensation</p>
                        <FeatherIcon icon="hard-drive" className="down_icon" />
                    </div>
                    <div className="month">
                        <p>Per Month</p>
                        <p>24k - 90k</p>
                    </div>
                    <div className="Hour">
                        <p>Per Hour</p>
                        <p>24k - 90k</p>
                    </div>
                </div>
            </div>
            <div className="try_premium">
                    <div style={{ color: "#ffad24" }}>
                        <Icon size={30} icon={ic_ac_unit} />
                    </div>
                    <div className="para">Try Premium Features</div>
            </div>
            <div className="imediatly">
                    <div style={{ color: "rgb(49, 213, 49)" }}>
                        <Icon size={20} icon={ic_check_circle} style={{  marginRight:"5px"}}/>
                    </div>
                    <div className="para" style={{  marginRight:"5px"}}>Available Immediately</div>
                    
                    <FeatherIcon icon="chevron-down" className="down_icon" size={15}/>
                </div>

        </div>
    )
}
export default Mini_card;