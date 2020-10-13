import React, { Component } from 'react';
// import Home from '../Home'  
// import {  
//     Route, Switch, Redirect  
// } from 'react-router-dom';  
export class TopLocation extends Component {
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
    render() {
        return (
            <section class="w3l-testimonials" id="testimonials">
                <div class="customers-6-content py-5">
                    <div class="container py-lg-3">
                        <div class="heading text-center mx-auto">
                            <h3 class="head">Happy Clients</h3>
                            <p class="my-3 head "> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                            Nulla mollis dapibus nunc, ut rhoncus
                    turpis sodales quis. Integer sit amet mattis quam.</p>
                        </div>
                        <div id="customerhnyCarousel" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#customerhnyCarousel" data-slide-to="0" class="active"></li>
                                <li data-target="#customerhnyCarousel" data-slide-to="1"></li>
                                <li data-target="#customerhnyCarousel" data-slide-to="2"></li>
                            </ol>
                            {/* <!-- Carousel items --> */}
                            <div class="carousel-inner pb-5">
                                <div class="carousel-item active">
                                    <div class="customer row py-5 mt-3">
                                        <div class="col-lg-4 col-md-6">
                                            <div class="card">
                                                <img class="card-img-top img-responsive" src="assets/images/c1.jpg" alt=""></img>
                                                <div class="card-body">
                                                    <span class="fa fa-quote-left" aria-hidden="true"></span>
                                                    <h3 class="card-title">Henry Nicholas</h3>
                                                    <p class="sub-title mb-3">Engineer</p>
                                                    <p class="card-text text-center mb-4">  Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio
                              </p>
                                                    <div class="text-right">
                                                        <span class="fa fa-quote-right" aria-hidden="true"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 off-testi-2">
                                            <div class="card">
                                                <img class="card-img-top img-responsive" src="assets/images/c2.jpg" alt=""></img>
                                                <div class="card-body">
                                                    <span class="fa fa-quote-left" aria-hidden="true"></span>
                                                    <h3 class="card-title">Mark Waugh</h3>
                                                    <p class="sub-title mb-3">Engineer</p>
                                                    <p class="card-text text-center mb-4">  Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio
                              </p>
                                                    <div class="text-right">
                                                        <span class="fa fa-quote-right" aria-hidden="true"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 offset-md-3 offset-lg-0 col-md-6 off-testi">
                                            <div class="card">
                                                <img class="card-img-top img-responsive" src="assets/images/c3.jpg" alt=""></img>
                                                <div class="card-body">
                                                    <span class="fa fa-quote-left" aria-hidden="true"></span>
                                                    <h3 class="card-title">Sarina Willams</h3>
                                                    <p class="sub-title mb-3">Engineer</p>
                                                    <p class="card-text text-center mb-4">  Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio
                               </p>
                                                    <div class="text-right">
                                                        <span class="fa fa-quote-right" aria-hidden="true"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--.item--> */}
                                <div class="carousel-item">
                                    <div class="customer row py-5 mt-3">
                                        <div class="col-lg-4 col-md-6">
                                            <div class="card">
                                                <img class="card-img-top img-responsive" src="assets/images/c2.jpg" alt=""></img>
                                                <div class="card-body">
                                                    <span class="fa fa-quote-left" aria-hidden="true"></span>
                                                    <h3 class="card-title">Mark Waugh</h3>
                                                    <p class="sub-title mb-3">Engineer</p>
                                                    <p class="card-text text-center mb-4">  Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio
                              </p>
                                                    <div class="text-right">
                                                        <span class="fa fa-quote-right" aria-hidden="true"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 off-testi-2">
                                            <div class="card">
                                                <img class="card-img-top img-responsive" src="assets/images/c3.jpg" alt=""></img>
                                                <div class="card-body">
                                                    <span class="fa fa-quote-left" aria-hidden="true"></span>
                                                    <h3 class="card-title">Sarina Willams</h3>
                                                    <p class="sub-title mb-3">Engineer</p>
                                                    <p class="card-text text-center mb-4">  Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio
                               </p>
                                                    <div class="text-right">
                                                        <span class="fa fa-quote-right" aria-hidden="true"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 offset-md-3 offset-lg-0 col-md-6 off-testi">
                                            <div class="card">
                                                <img class="card-img-top img-responsive" src="assets/images/c1.jpg" alt=""></img>
                                                <div class="card-body">
                                                    <span class="fa fa-quote-left" aria-hidden="true"></span>
                                                    <h3 class="card-title">Henry Nicholas</h3>
                                                    <p class="sub-title mb-3">Engineer</p>
                                                    <p class="card-text text-center mb-4">  Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio
                              </p>
                                                    <div class="text-right">
                                                        <span class="fa fa-quote-right" aria-hidden="true"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--.item--> */}
                                <div class="carousel-item">
                                    <div class="customer row py-5 mt-3">
                                        <div class="col-lg-4 col-md-6">
                                            <div class="card">
                                                <img class="card-img-top img-responsive" src="assets/images/c3.jpg" alt=""></img>
                                                <div class="card-body">
                                                    <span class="fa fa-quote-left" aria-hidden="true"></span>
                                                    <h3 class="card-title">Sarina Willams</h3>
                                                    <p class="sub-title mb-3">Engineer</p>
                                                    <p class="card-text text-center mb-4">  Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio
                                 </p>
                                                    <div class="text-right">
                                                        <span class="fa fa-quote-right" aria-hidden="true"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 off-testi-2">
                                            <div class="card">
                                                <img class="card-img-top img-responsive" src="assets/images/c2.jpg" alt=""></img>
                                                <div class="card-body">
                                                    <span class="fa fa-quote-left" aria-hidden="true"></span>
                                                    <h3 class="card-title">Mark Waugh</h3>
                                                    <p class="sub-title mb-3">Engineer</p>
                                                    <p class="card-text text-center mb-4">  Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio
                                </p>
                                                    <div class="text-right">
                                                        <span class="fa fa-quote-right" aria-hidden="true"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 offset-md-3 offset-lg-0 col-md-6 off-testi">
                                            <div class="card">
                                                <img class="card-img-top img-responsive" src="assets/images/c1.jpg" alt=""></img>
                                                <div class="card-body">
                                                    <span class="fa fa-quote-left" aria-hidden="true"></span>
                                                    <h3 class="card-title">Henry Nicholas</h3>
                                                    <p class="sub-title mb-3">Engineer</p>
                                                    <p class="card-text text-center mb-4">  Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio
                                </p>
                                                    <div class="text-right">
                                                        <span class="fa fa-quote-right" aria-hidden="true"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--.item--> */}
                            </div>
                            {/* <!--.carousel-inner--> */}
                        </div>
                    </div>
                </div>
                {/* <!--//customers --> */}
            </section>
        )
    }
}

export default TopLocation