import React from 'react'
import './ProfileCard.css'
import avatar from '../image/profile-image.jpg'


function ProfileCard(props) {
  return (
    
    <div className='card-contain'>
        <div className='header'>
            <img src={avatar} alt="profile" />
        </div>
        <div className='contact-contain'>
            <h1 className='name-text'>{props.name}</h1>
            <h2 className='status-text'>{props.status}</h2>
            <div className= 'buttomPanel'> 
              <a className='line-button' href={props.contact.get("line")}/>
              <a className='mail-button' href="mailto:sss@gmail.com"/>
              <a className='call-button' href= {"tel:${" + props.contact.get("call") + "}" }  />
            </div>
        </div>
  
    </div>

  )
}

function EmailButtonAction(props) {
  return window.open('mailto:' + props.contact.get("mail"))
}

export default ProfileCard