import human from "../Images/human.png"
const Home = () => {
    return (
        <div className="home">
            <div className="main_content">
                <div className="heading">
                    <p>Give Feedback to <strong>Binay Pratap Singh</strong> </p>
                </div>
                <div className="content">
                    <div className="about">
                        <p>Your Feedback is <strong>Confidential</strong> </p>
                        <p className="text">Yout feedback will be anonymous and it won't be shared with any one  </p>
                        <button>Okay</button>
                    </div>
                    <div className="image">
                        <img src={human} alt="cant load" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;