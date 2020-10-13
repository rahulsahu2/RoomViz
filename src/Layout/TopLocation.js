import React, { Component } from 'react';
// import Home from '../Home'  
// import {  
//     Route, Switch, Redirect  
// } from 'react-router-dom';  
export class TopLocation extends Component {
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
    render() {
        return (
            <section class="locations-1" id="locations">
                <div class="locations py-5">
                    <div class="container py-md-3">
                        <div class="heading text-center mx-auto">
                            <h3 class="head">Popular Locations</h3>
                            <p class="my-3 head "> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                            Nulla mollis dapibus nunc, ut rhoncus
                      turpis sodales quis. Integer sit amet mattis quam.</p>
                        </div>
                        <div class="row mt-3 pt-5">
                            <div class="col-md-4 col-sm-6">
                                <div class="box16">
                                    <img class="img-fluid" src="assets/images/g1.jpg" alt=""></img>
                                    <div class="box-content">
                                        <h3 class="title">Austin</h3>
                                        <span class="post">2 Listings</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <div class="box16">
                                    <img class="img-fluid" src="assets/images/g2.jpg" alt=""></img>
                                    <div class="box-content">
                                        <h3 class="title">Chicago</h3>
                                        <span class="post">2 Listings</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 mt-lg-0 pt-lg-0 mt-md-4 pt-md-2">
                                <div class="box16">
                                    <img class="img-fluid" src="assets/images/g3.jpg" alt=""></img>
                                    <div class="box-content">
                                        <h3 class="title">Dallas</h3>
                                        <span class="post">2 Listings</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 mt-md-4 pt-md-2">
                                <div class="box16">
                                    <img class="img-fluid" src="assets/images/g4.jpg" alt=""></img>
                                    <div class="box-content">
                                        <h3 class="title">Houston</h3>
                                        <span class="post">2 Listings</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 mt-md-4 pt-md-2">
                                <div class="box16">
                                    <img class="img-fluid" src="assets/images/g5.jpg" alt=""></img>
                                    <div class="box-content">
                                        <h3 class="title">Jacksonville</h3>
                                        <span class="post">2 Listings</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 mt-md-4 pt-md-2">
                                <div class="box16">
                                    <img class="img-fluid" src="assets/images/g6.jpg" alt=""></img>
                                    <div class="box-content">
                                        <h3 class="title">New Jersey</h3>
                                        <span class="post">2 Listings</span>
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

export default TopLocation