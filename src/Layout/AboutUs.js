import React, { Component } from 'react';
// import Home from '../Home'  
// import {  
//     Route, Switch, Redirect  
// } from 'react-router-dom';  
export class AboutUs extends Component {
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
    render() {
        return (
            <section class="w3l-apply-6">
                {/* <!-- /apply-6--> */}
                <div class="apply-info py-5">
                    <div class="container py-lg-3">
                        <div class="heading text-center mx-auto">
                            <h3 class="head text-white">What Makes Us The Preferred Choice</h3>
                            <p class="my-3 head "> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                            Nulla mollis dapibus nunc, ut rhoncus
                          turpis sodales quis. Integer sit amet mattis quam.</p>
                        </div>
                        <div class="apply-grids-info row pt-5 mt-3">
                            <div class="apply-gd-left col-lg-7">
                                <div class="row">
                                    <div class="col-sm-6 sub-apply">
                                        <div class="apply-sec-info text-center">

                                            <span class="fa fa-university mb-4"></span>

                                            <div class="appyl-sub-icon-info">
                                                <h5><a href="#">Maximum Choices</a></h5>
                                                <p>Lorem ipsum dolor sit amet,Ea consequuntur.</p>
                                            </div>

                                        </div>

                                    </div>
                                    <div class="col-sm-6 sub-apply mt-sm-0 mt-5">
                                        <div class="apply-sec-info text-center">

                                            <span class="fa fa-bath mb-4"></span>

                                            <div class="appyl-sub-icon-info">
                                                <h5><a href="#">Buyers Trust Us</a></h5>
                                                <p>Lorem ipsum dolor sit amet,Ea consequuntur.</p>
                                            </div>

                                        </div>

                                    </div>
                                    <div class="col-sm-6 sub-apply mt-5">
                                        <div class="apply-sec-info text-center">

                                            <span class="fa fa-cubes mb-4"></span>

                                            <div class="appyl-sub-icon-info">
                                                <h5><a href="#">Seller Prefer Us</a></h5>
                                                <p>Lorem ipsum dolor sit amet,Ea consequuntur.</p>
                                            </div>

                                        </div>

                                    </div>
                                    <div class="col-sm-6 sub-apply mt-5">
                                        <div class="apply-sec-info text-center">

                                            <span class="fa fa-hospital-o mb-4"></span>

                                            <div class="appyl-sub-icon-info">
                                                <h5><a href="#">Expert Guidance</a></h5>
                                                <p>Lorem ipsum dolor sit amet,Ea consequuntur.</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="apply-gd-right col-lg-5 mt-lg-0 mt-5">
                                <div class="apply-form p-md-5 p-4 mx-auto bg-white mw-100">
                                    <h4>What Makes Us </h4>
                                    <p class="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, dolore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, dolore. Vestibulum ante ipsum primis in Nulla mollis dapibus nunc Integer sit amet mattis quam.</p>
                                    <p class="mt-3"> Vero, dolore. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc Integer sit amet mattis quam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutUs