import FeatherIcon from "feather-icons-react";
import user from "../Images/user.jpg";
import { Icon } from "react-icons-kit";
import { ic_ac_unit } from 'react-icons-kit/md/ic_ac_unit'
import { ic_radio_button_checked } from 'react-icons-kit/md/ic_radio_button_checked';
import {ic_lens} from 'react-icons-kit/md/ic_lens'
const Max_card = () => {
    return (
        <div className="max_card">
            <div className="card">
                <div className="upper">
                    <img src={user} alt="cant load" />
                    <h2>Binay Pratap Singh</h2>
                    <h3>26, New Delhi</h3>
                    <div className="available" style={{ color: "#31d531" }}>
                        <Icon size={20} icon={ic_lens} style={{  marginRight:"5px"}} />
                        <h4 style={{ color: "#000000" }}>Available Immediately</h4>
                    </div>
                </div>
                <div className="lower">
                    <h3>Skills</h3>
                    <div className="skill">
                        <button>Python</button>
                        <button>SQL</button>
                        <button>Java</button>
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

        </div>
    )
}
export default Max_card;