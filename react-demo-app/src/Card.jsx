import profilePic from './assets/justin.jpg'

function Card(){
    return(
        <div className="card">
            <img className = "card-image" src = {profilePic} alt = "Profile picture"></img> 
            <h2 className="card-title">Justin Merrill</h2>
            <p className= "card-text">NCSU Undergraduate in Computer and Electrical Engineering</p>
        </div>
    );
}

export default Card