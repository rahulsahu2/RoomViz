import React, { Component } from 'react';
import TopMenu from './Layout/TopMenu';
import Header from './Layout/Header'
import Footer from './Layout/Footer'
export class Layout extends Component {
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
    render() {
        return (
            <div>
                <div id="wrapper">
                    <TopMenu></TopMenu>
                    <div id="content-wrapper" class="d-flex flex-column">
                        <div id="content">
                            <Header />
                            <div class="error">
                                <div class="mainbox">
                                    <div class="err">4</div>
                                    <i class="far fa-question-circle fa-spin"></i>
                                    <div class="err2">4</div>
                                    <div class="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? 
                                    Never existed in the first place?<p>Let's go <a href="/"><b>HOME</b></a> and try from there.</p></div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout