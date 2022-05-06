import React from 'react';
import join from '../assets/images/join.gif';
import './JoinCommunity.css'; 

const JoinCommunity = () => {
    return (
        <>
            <section id="JoinCommunity" className="container section">
                <div className="row">
                    <div className="col-lg-6 joinimg">
                        <img src={join} className="join" alt="" />
                    </div>
                    <div className="col-lg-6 container">
                        <div className="JoinCommunityContent">
                            <h2 className="JoinCommunityHeader">Join Keploy API Community</h2>
                            <p className="JoinCommunitySubHeader">Meet students, mentors and educators around the world excited about APIs and technology</p>
                            <a href="https://discord.gg/jdTCGQFFw3" target="_blank">
                                <button type="button" className="btn btn-dark JoinCommunityButton px-4 py-2">
                                Join Discord
                                </button>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    );
};

export default JoinCommunity;