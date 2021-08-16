import React from 'react';
import money from '../assets/money.svg';
import './Home.scss';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
        return (
                <div className="home-container">
                        <div className="background-wrapper">
                                <h2 className="home-title">My Finance</h2>
                                <img src={money} alt="money background" className="home-background mt-4"></img>
                        </div>
                        <div className="mt-4">
                                <div>Ứng dụng quản lý tài chính hiệu quả</div>
                                <Button className="w-100 mt-4">Đăng nhập</Button>
                                <Button variant="outline-dark" className="w-100 mt-3">Đăng ký</Button>
                        </div>
                </div>
        )
}

export default Home
