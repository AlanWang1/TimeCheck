import React from 'react';

class UserNavbar extends React.Component {
    render() {
        return (
            <nav className="navbar is-spaced">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <h1 className="title">TimeCheck</h1>
                    </div>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            Notifications
                        </div>
                        <div className="navbar-item">
                            <figure className="image">
                                <img src={this.props.profilePhoto} className="is-rounded like-button" alt="Profile" />
                            </figure>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default UserNavbar;