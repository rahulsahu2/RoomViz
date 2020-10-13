import React, { Component } from 'react'

export class TopMenu extends Component {
    render() {
        return (
            <section class="w3l-top-menu-1">
                <div class="top-hd">
                    <div class="container">
                        <header class="row">
                            <div class="social-top col-lg-3 col-6">
                                <li>Follow Us</li>
                                <li><a href="facebook.com"><span class="fa fa-facebook"></span></a></li>
                                <li><a href="instagram.com`"><span class="fa fa-instagram"></span></a> </li>
                                <li><a href="twitter.com"><span class="fa fa-twitter"></span></a></li>
                                <li><a href="vimeo.com"><span class="fa fa-vimeo"></span></a> </li>
                            </div>
                            <div class="accounts col-lg-9 col-6">
                                <li class="top_li"><span class="fa fa-mobile"></span><a href="tel:+142 5897555">+142 5897555</a> </li>
                                <li class="top_li1"><a href="login.html">Login</a></li>
                                <li class="top_li2"><a href="login.html">Register</a></li>
                            </div>

                        </header>
                    </div>
                </div>
            </section>
        )
    }
}

export default TopMenu