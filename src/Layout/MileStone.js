import React, { Component } from 'react';
// import Home from '../Home'  
// import {  
//     Route, Switch, Redirect  
// } from 'react-router-dom';  
export class TopLocation extends Component {
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
    render() {
        return (
            <section class="w3l-specifications-9">
                <div class="main-w3 py-5" id="stats">
                    <div class="container py-md-3">
                        <div class="heading text-center mx-auto">
                            <h3 class="head">We Are Here For You</h3>
                            <p class="my-3 head "> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                            Nulla mollis dapibus nunc, ut rhoncus
                          turpis sodales quis. Integer sit amet mattis quam.</p>
                        </div>
                        <div class="main-cont-wthree-fea row pt-3 mt-5">
                            <div class="grids-speci1 col-lg-3 col-6">
                                <div class="spec-2 text-center">
                                    <span class="fa fa-map-marker"></span>
                                    <h3 class="title-spe">180+</h3>
                                    <p>Property Locations</p>
                                </div>
                            </div>
                            <div class="grids-speci1 midd-eff-spe col-lg-3 col-6">
                                <div class="spec-2 text-center">
                                    <span class="fa fa-users"></span>
                                    <h3 class="title-spe">100+</h3>
                                    <p>Professional Agents</p>
                                </div>
                            </div>
                            <div class="grids-speci1 las-but col-lg-3 col-6  mt-lg-0 mt-4">
                                <div class="spec-2 text-center">
                                    <span class="fa fa-building"></span>
                                    <h3 class="title-spe">250+</h3>
                                    <p>Property for Sell</p>
                                </div>
                            </div>
                            <div class="grids-speci1 las-t col-lg-3 col-6  mt-lg-0 mt-4">
                                <div class="spec-2 text-center">
                                    <span class="fa fa-home"></span>
                                    <h3 class="title-spe">3200+ </h3>
                                    <p>Property for Rent</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <!-- //specifications --> */}
            </section>
        )
    }
}

export default TopLocation