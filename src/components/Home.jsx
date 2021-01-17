import React from 'react';
import '../style/style.css'

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <header class="site-header">
                    <img class="profile-pic" 
                    src="https://media-exp1.licdn.com/dms/image/C5603AQE3DEGX8psVlQ/profile-displayphoto-shrink_400_400/0/1584415747675?e=1616630400&v=beta&t=cK3MK96n9k0grC3A87OfGLqYl42tod2ZlZIag_CPvvc"/>
                        <div class="site-header-content">
                            <h1>Hi, I am Pavan Gowda</h1>
                            <h3>I am a full stack developer</h3>
                            <h5>Watch this space for more projects </h5>
                        </div>
                </header>
            </div>
                );
            }
        
}