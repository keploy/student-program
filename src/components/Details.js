import React from 'react';
import learn from '../assets/images/learn.gif';
import grow from '../assets/images/grow.gif';
import teach from '../assets/images/teach.gif';
import './Details.css'; 

const Details = () => {
    return (
        <>
            <section id="Details" className="container section">
                <div className="DetailsContainer">
                    <h2 className="DetailsHeader">What's in it for you?</h2>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="row ps-lg-5">
                            <div className="detailscontentpics">
                                <img src={learn} className="DetailsPic" alt="" />
                            </div>
                                <div className="DetailsColumnContent row">
                                    <h2 className="m-0 DetailsColumnContentHeader">Learn</h2>
                                    <div className="DetailsColumnContentText">
                                        <p>Get one-on-one training about APIs and Keploy by the Keploy team.<br/>
                                        Perks:<br/>
                                        🎁 Exclusive swag kit by Keploy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="row ps-lg-5">
                                <div className="detailscontentpics">
                                    <img src={teach} className="DetailsPic" alt="" />
                                </div>
                                <div className=" DetailsColumnContent">
                                    <h2 className="m-0 DetailsColumnContentHeader">Teach</h2>
                                    <div className="DetailsColumnContentText">
                                        <p>Take sessions in your college or community and spread awareness about the world of APIs and Keploy.<br/>
                                        Perks:<br/>
                                        🖼 Recognition on our Website</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="row ps-lg-5">
                                <div className="detailscontentpics">
                                    <img src={grow} className="DetailsPic" alt="" />
                                </div>
                                <div className="DetailsColumnContent">
                                    <h2 className="m-0 DetailsColumnContentHeader">Grow</h2>
                                    <div className="DetailsColumnContentText">
                                        <p>The Keploy team will help you in creating your own community in your college if you wish to.<br/>
                                        Perks:<br/>
                                        🌟 Mentorship on how to build and grow a community<br/></p>
                                        {/* 🎁 Get Keploy swags for your community</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Details;