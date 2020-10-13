import React, { Component } from 'react';
// import Home from '../Home'  
// import {  
//     Route, Switch, Redirect  
// } from 'react-router-dom';  
export class Services extends Component {
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
    render() {
        return (
            <section class="w3l-services2" id="services">
                <div class="features-with-17_sur py-5">
                    <div class="container py-md-3">
                        <div class="heading text-center mx-auto">
                            <h3 class="head text-white">What We Offer</h3>
                            <p class="my-3 head "> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                            Nulla mollis dapibus nunc, ut rhoncus
						  turpis sodales quis. Integer sit amet mattis quam.</p>
                        </div>
                        <div class="row pt-5 mt-3">
                            <div class="col-lg-5 features-with-17-left_sur">
                                <h4 class="lft-head">We’re Offering Unmatched Services</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, dolore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, dolore. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc Integer sit amet mattis quam.</p>
                                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam.</p>
                                <div class="stats-1">
                                    <div class="stats-1-left">
                                        <h4>2300</h4>
                                        <h6>Clients</h6>
                                    </div>
                                    <div class="stats-1-left">
                                        <h4>16</h4>
                                        <h6>Awards</h6>
                                    </div>
                                    <div class="stats-1-left">
                                        <h4>2536</h4>
                                        <h6>Projects</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7 my-lg-0 my-5 align-self-center features-with-17-right_sur">
                                <div class="features-with-17-right-tp_sur">
                                    <div class="features-with-17-left1">
                                        <span class="fa fa-laptop s4"></span>
                                    </div>
                                    <div class="features-with-17-left2">
                                        <h6><a href="#url">Fastest Service</a></h6>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, dolore.</p>
                                    </div>
                                </div>
                                <div class="features-with-17-right-tp_sur">
                                    <div class="features-with-17-left1">
                                        <span class="fa fa-database s5"></span>
                                    </div>
                                    <div class="features-with-17-left2">
                                        <h6><a href="#url">Largest Real Estate</a></h6>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, dolore.</p>
                                    </div>
                                </div>
                                <div class="features-with-17-right-tp_sur">
                                    <div class="features-with-17-left1">
                                        <span class="fa fa-lock s3"></span>
                                    </div>
                                    <div class="features-with-17-left2">
                                        <h6><a href="#url">Property Insurance</a></h6>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, dolore.</p>
                                    </div>
                                </div>
                                <div class="features-with-17-right-tp_sur">
                                    <div class="features-with-17-left1">
                                        <span class="fa fa-codepen s2"></span>
                                    </div>
                                    <div class="features-with-17-left2">
                                        <h6><a href="#url">Doorstep Process</a></h6>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, dolore.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Services