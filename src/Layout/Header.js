import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <section class="w3l-bootstrap-header">
                <nav class="navbar navbar-expand-lg navbar-light py-lg-2 py-2">
                    <div class="container">
                        <a class="navbar-brand" href="/"><span class="fa fa-home"></span> Estate Agent</a>
                        {/* <!-- if logo is image enable this    */}
                        <a class="navbar-brand" href="/">
                            <img src="./assets/images/logo.png" alt="Your logo" title="Your logo" style={{height:'35px'}} />
                        </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon fa fa-bars"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="about.html">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="services.html">Services</a>
                                </li>

                                <li class="nav-item mr-0">
                                    <a class="nav-link" href="contact.html">Contact</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </section>
        )
    }
}

export default Header