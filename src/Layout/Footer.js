import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <section class="w3l-footer-29-main" id="footer">
                <div class="footer-29">
                    <div class="grids-forms-1 pb-5">
                        <div class="container">
                            <div class="grids-forms">
                                <div class="main-midd" style={{textAlign: 'left', alignSelf: 'stretch'}}>
                                    <h4 class="title-head">Newsletter – Get Updates & Latest News</h4>
                                </div>
                                <div class="main-midd-2">
                                    <form action="#" method="post" class="rightside-form">
                                        <input type="email" name="email" placeholder="Enter your email"></input>
                                        <button class="btn" type="submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="container pt-5">
                            <div class="d-grid grid-col-4 footer-top-29">
                                <div class="footer-list-29 footer-1" style={{textAlign: 'left', alignSelf: 'stretch'}}>
                                    <h6 class="footer-title-29">About Us</h6>
                                    <ul>
                                        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
                                    </ul>
                                    <div class="main-social-footer-29">
                                        <h6 class="footer-title-29">Social Links</h6>
                                        <a href="#facebook" class="facebook"><span class="fa fa-facebook"></span></a>
                                        <a href="#twitter" class="twitter"><span class="fa fa-twitter"></span></a>
                                        <a href="#instagram" class="instagram"><span class="fa fa-instagram"></span></a>
                                        <a href="#google-plus" class="google-plus"><span class="fa fa-google-plus"></span></a>
                                        <a href="#linkedin" class="linkedin"><span class="fa fa-linkedin"></span></a>
                                    </div>
                                </div>
                                <div class="footer-list-29 footer-2" style={{textAlign: 'left', alignSelf: 'stretch'}}>
                                    <ul>
                                        <h6 class="footer-title-29">Useful Links</h6>
                                        <li><a href="services.html">Management</a></li>
                                        <li><a href="services.html">Reporting</a></li>
                                        <li><a href="services.html">Tracking</a></li>
                                        <li><a href="services.html">All Users</a></li>
                                        <li><a href="contact.html">Support</a></li>
                                    </ul>
                                </div>
                                <div class="footer-list-29 footer-3" style={{textAlign: 'left', alignSelf: 'stretch'}}>
                                    <div class="properties">
                                        <h6 class="footer-title-29">Featured Properties</h6>
                                        <a href="services.html"><img src="assets/images/g7.jpg" class="img-responsive" alt=""></img><p>We Are Leading International Consultiing Agency</p></a>
                                        <a href="services.html"><img src="assets/images/g8.jpg" class="img-responsive" alt=""></img><p>Digital Marketing Agency all the foundational tools</p></a>
                                        <a href="services.html"><img src="assets/images/g9.jpg" class="img-responsive" alt=""></img><p>Doloremque velit sapien labore eius itna</p></a>
                                    </div>
                                </div>
                                <div class="footer-list-29 footer-4" style={{textAlign: 'left', alignSelf: 'stretch'}}>
                                    <ul>
                                        <h6 class="footer-title-29">Quick Links</h6>
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="services.html">Services</a></li>
                                        <li><a href="services.html"> Blog</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="bottom-copies text-center">
                                <p class="copy-footer-29">© 2020 Estate Agent. All rights reserved | Designed by <a href="https://w3layouts.com">W3layouts</a></p>
                            </div>
                        </div>
                    </div>
                    <button onclick="topFunction()" id="movetop" title="Go to top">
                        <span class="fa fa-angle-up"></span>
                    </button>
            </section >
        )
    }
}

export default Footer