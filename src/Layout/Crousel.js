import React, { Component } from 'react';

export class Crousel extends Component {
    render() {
        return (
            <section class="form-12" id="home">
                <div class="form-12-content" style={{background: 'url("./assets/images/3.jpg") no-repeat'}}>
                    <div class="container">
                        <div class="grid grid-column-2 ">
                            <div class="column2">
                            </div>
                            <div class="column1">
                                <form action="/" method="Get">
                                    <div class="blog-search form d-flex search-form">
                                        <input type="search" class="form-control" placeholder="Enter Location, Property, Landmark" name="search" required="required"></input>
                                        <button type="submit" class="btn search-btn"><span class="fa fa-search"></span></button>
                                    </div>
                                    <div class="form-top">
                                        <select id="sel1">
                                            <option>All Actions</option>
                                            <option>Rent</option>
                                            <option>Sale</option>
                                            <option>Sold Out</option>
                                        </select>
                                        <select id="sel2">
                                            <option>All Types</option>
                                            <option>Apartment</option>
                                            <option>Business</option>
                                            <option>House</option>
                                            <option>Luxury</option>
                                            <option>Residential</option>
                                            <option>Restaurant</option>
                                            <option>Single Family</option>
                                            <option>Villa</option>
                                        </select>
                                    </div>
                                    <div class="form-top">
                                        <select id="sel3">
                                            <option>All Cities</option>
                                            <option>Baja California Sur</option>
                                            <option>Campo Aereo Chapultepec</option>
                                            <option>Cuernavaca</option>
                                            <option>Estado de</option>
                                            <option>Florida</option>
                                        </select>
                                        <select id="sel4">
                                            <option>Min Rooms</option>
                                            <option>All Rooms</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                        </select>
                                    </div>
                                    <div class="form-top">
                                        <select id="sel5">
                                            <option>All Bed Rooms</option>
                                            <option>Min Bed Rooms</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                        </select>
                                        <select id="sel6">
                                            <option>All Baths</option>
                                            <option>Min Baths</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                        </select>
                                    </div>
                                    <button type="submit" class="btn">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Crousel