import React from 'react'
import PropTypes from 'prop-types'
import myImage from './Moi.jpg'

function hundleName(click) {
click.peventDefault()
alert("hello i'm Kahouach Fakhri")
}
const Profile = (props) => {
    const styleObejct = {
        fullName :{
            fontSize: 40,
            color: 'red',
            paddingLeft: 10,
        },

        bio: {
            fontSize: 20,
            color: 'black',
            paddingLeft: 15,
        },

        profession: {
            fontSize: 25,
            color: 'white',
            paddingLeft: 15,
        }
    }
    return (
        <div>
            
            <a href="/" onClick={click => hundleName(click)}>
                Check Here
            </a>
            <div style={styleObejct}>
            <h1 style={styleObejct.fullName}> {props.fullName} </h1>
            <p style={styleObejct.bio}> {props.bio} </p>
            <h3 style={styleObejct.profession}> {props.profession} </h3>
            </div>
            <div className="pic">
                <img src={myImage} alt="" width="100" height="100"></img>
                {props.chidren}
            </div>
            
        </div>
    )
}

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
}

export default Profile
