import React from 'react';
import '../App.css';
import Email from './Email';

class Contact extends React.Component {
    render() {
        return (
            <div className="fluid-container">
                <div style={{
                    backgroundImage: `url("./images/Bgcontact.jpg")`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }} className="row">
                    <div className="col-sm-4">
                        <div className="my-5">
                            <h3 className="text-center">CONTACT US</h3>
                            <p className="text-center text-secondary" style={{ fontSize: '14px' }}>To receive great deals</p>
                        </div>
                        <div className="text-center">
                            <a href="#" className="py-3">
                                <i class='fas fa-map-marker p-3 rounded-circle mb-4' style={{ fontSize: "36px" }}></i>
                                <h6>ADDRESS</h6>
                                <p className="px-1" style={{ fontSize: '14px' }}>102 Nguyen Dinh Chinh, Ward 15, Phu Nhuan District, HCMC, Vietnam</p>
                            </a>
                        </div>
                        <div className="text-center">
                            <a href="#" className="py-3">
                                <i class='fas fa-headphones-alt p-3 rounded-circle mb-4' style={{ fontSize: "36px" }}></i>
                                <h6>PHONE NUMBER</h6>
                                <p className="px-1" style={{ fontSize: '14px' }}>078.5511.547</p>
                            </a>
                        </div>
                        <div className="text-center">
                            <a href="#" className="py-3">
                                <i class='fas fa-mail-bulk p-3 rounded-circle mb-4' style={{ fontSize: "36px" }}></i>
                                <h6>EMAIL</h6>
                                <p className="px-1" style={{ fontSize: '14px' }}>lykemchoem@gmail.com</p>
                                <p className="px-1" style={{ fontSize: '14px' }}>hoaithuong2347@gmail.com</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <Email />
                    </div>
                </div>
                <div className="container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.201757241531!2d106.67615171480814!3d10.795853992308283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d6786d52bf%3A0x77a4a2db8949796e!2zMTAyIE5ndXnhu4VuIMSQw6xuaCBDaMOtbmgsIFBoxrDhu51uZyAxNSwgUGjDuiBOaHXhuq1uLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1618474081695!5m2!1svi!2s" className="w-100" style={{ height: '500px' }}></iframe>
                </div>
            </div >
        );
    }
}
export default Contact;
