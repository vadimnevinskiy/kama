import React from 'react';
const Profile = () => {
    return (
        <div className='content'>
            <div className="user">
                <div className="user-avatar">
                    <img src="https://f3.mylove.ru/J1NuDGy2QF.jpg"/>
                </div>
                <div className="user-name">
                    <h3>MrBluff</h3>
                    <div className="status">
                        Заходил 6 минут назад
                    </div>
                </div>
            </div>
            <div className="mypost">
                <div className="post-item">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolorem esse est explicabo
                    labore maxime molestiae obcaecati quaerat sequi similique.
                </div>
                <div className="post-item">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi magni suscipit.
                </div>
            </div>
        </div>
    );
}

export default Profile;
