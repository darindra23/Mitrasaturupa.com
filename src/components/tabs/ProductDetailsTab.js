import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { FiThumbsUp, FiMeh, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom'
import reviewimg2 from '../../assets/images/testi-img1.jpg'
import Divider from '../other/Divider';

export default class ProductDetailsTab extends Component {
    render() {
        return (
            <div className="product-tabs-width">
                <Tabs>
                    <TabList className="product-details-tabs d-flex">
                        <Tab>Description</Tab>
                        <Tab>Additional Information</Tab>
                        <Tab>Reviews</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="description">
                            <h1>About Cuckoo Clock</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.</p>
                            <p>
                                Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.
                            </p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="information">
                            <h1>Additional Info:</h1>
                            <div className="table">
                                <h3>General</h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Material</td>
                                            <td>Aluminium, Plastic</td>
                                        </tr>
                                        <tr>
                                            <td>Color</td>
                                            <td>Golden</td>
                                        </tr>
                                        <tr>
                                            <td>Type</td>
                                            <td>Cuckoo Clock</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="table">
                                <h3>Dimensions</h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Length</td>
                                            <td>98 mm</td>
                                        </tr>
                                        <tr>
                                            <td>Width</td>
                                            <td>205 mm</td>
                                        </tr>
                                        <tr>
                                            <td>Height</td>
                                            <td>208 mm</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="reviews" id="reviews">
                            <h1>Customer Reviews</h1>
                            <ul className="review-lists">
                                <li className="d-flex">
                                    <div className="image">
                                        <img src={reviewimg2} alt="Reviews" />
                                    </div>
                                    <div className="details">
                                        <h3 className="d-flex">Adam Smith <span>17 Mar, 2020 - 4:00 pm</span></h3>
                                        <ul className="rating d-flex">
                                            <li><FaStar /></li>
                                            <li><FaStar /></li>
                                            <li><FaStar /></li>
                                            <li><FaStar /></li>
                                            <li><FaStarHalfAlt /></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                        <div className="helpful-btns">
                                            <p>Was this review...? <Link to="#"><FiThumbsUp /> Helpful</Link> <Link to="#"><FiMeh /> Funny</Link></p>
                                        </div>
                                    </div>
                                </li>
                                <li className="d-flex">
                                    <div className="image">
                                        <img src={reviewimg2} alt="Reviews" />
                                    </div>
                                    <div className="details">
                                        <h3 className="d-flex">Amanda Evil <span>19 Mar, 2020 - 5:00 pm</span></h3>
                                        <ul className="rating d-flex">
                                            <li><FaStar /></li>
                                            <li><FaStar /></li>
                                            <li><FaStar /></li>
                                            <li><FaStar /></li>
                                            <li><FaStarHalfAlt /></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                        <div className="helpful-btns">
                                            <p>Was this review...? <Link to="#"><FiThumbsUp /> Helpful</Link> <Link to="#"><FiMeh /> Funny</Link></p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <Divider />
                            <div className="review-fields">
                                <h2>Write A Review</h2>
                                <form>
                                    <div className="review-rating-field-grid d-grid">
                                        <div className="ratings-review">
                                            <h4>Rate This Item <sup>*</sup></h4>
                                            <div className="ratings-star d-flex">
                                                <input type="radio" name="star" id="star1" /><label htmlFor="star1"></label>
                                                <input type="radio" name="star" id="star2" /><label htmlFor="star2"></label>
                                                <input type="radio" name="star" id="star3" /><label htmlFor="star3"></label>
                                                <input type="radio" name="star" id="star4" /><label htmlFor="star4"></label>
                                                <input type="radio" name="star" id="star5" /><label htmlFor="star5"></label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">Your Name <sup>*</sup></label>
                                            <input type="text" placeholder="Your Name" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">Your Email <sup>*</sup></label>
                                            <input type="Email" placeholder="Email Address" required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Your Message <sup>*</sup></label>
                                        <textarea id="message" placeholder="Write Message"></textarea>
                                    </div>
                                    <button type="submit" className="theme-button">Post Your Review <FiChevronRight className="icon" /></button>
                                </form>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}


