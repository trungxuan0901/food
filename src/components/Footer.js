import React from 'react';
import logo from '../img/logo1.png';
import '../App.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
            <div class="container-fluid text-light bgdark pt-5 pb-4">
                <div class="row">
                    <div class="col-md-2" >
                        <img src={logo} alt="" width="80%" />
                    </div>
                    <div class="col-md-2">
                        <ul>
                            <li className="py-2">
                                <Link to="/">Home Page</Link>
                            </li>
                            <li className="py-2">
                                <Link to="/Services">About Us</Link>
                            </li>
                            <li className="py-2">
                                <Link to="/Contact">Contact Us</Link>
                            </li>
                            <li className="py-2">
                                <Link to="/Cart">Payment Process</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-2">
                        <div class="block-footer">
                            <p class="title-block">Food To Go App</p>
                            <a class="apps" target="_blank" rel="noopener noreferrer nofollow"
                                href="https://itunes.apple.com/us/app/foodtogo" title="Down app iOS">
                                <span class="apps__app-store-vi" title="Down app iOS"></span>
                                <img style={{ width: '122px', height: '60px' }} alt="appstore" src="./images/Appstore.png"></img>
                            </a>
                            <a class="apps" target="_blank" rel="noopener noreferrer nofollow"
                                href="https://play.google.com/store/apps/details?id=com.foodtogo" title="Down app Android">
                                <span class="apps__play-store-vi" title="Down app Android"></span>
                                <img style={{ width: '122px', height: '60px' }} alt="android" src="./images/Android.png"></img>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <p>FoodToGo Joint Stock Company</p>
                        <p>2nd Floor, ABC Building,</p>
                        <p>102 Nguyen Dinh Chinh Street, Ward 15, Phu Nhuan District, Ho Chi Minh City</p>
                        <p>Certificate of Business Registration No: 0123456789</p>
                        <p>Dated by the Department of Planning and Investment of Ho Chi Minh City 21/06/2021,</p>
                        <p>1st Amendment, July 21, 2021</p>
                        <p>Phone number: 078.5511.547</p>
                        <p>Email: <a href="">foodtogo28@gmail.vn</a></p>
                    </div>
                    <div class="col-md-3">
                        <p style={{ fontSize: '50px' }}>
                            <a href="https://www.facebook.com/" class="fab fa-facebook-square" style={{ marginRight: '100px' }}></a>
                            <a href="https://www.instagram.com/" class="fab fa-instagram" style={{ marginRight: '170px' }}></a>
                            <a href="#">
                                <img style={{ width: '200px', height: '100px' }} alt="ĐÃ ĐĂNG KÝ BỘ CÔNG THƯƠNG" src="./images/Register.png"></img>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;
