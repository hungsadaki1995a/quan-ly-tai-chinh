import signup from '../../assets/signup.svg';
import './SignUp.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

function SignUp() {
        let history = useHistory();

        function back() {
                history.goBack();
        }

        function navigateLogin() {
                history.push('login')
        }

        return(
                <div className="form-signup-container">
                        <div className="background-image">
                                <div className="login-back-icon-wrapper font-size-larger">
                                        <FontAwesomeIcon icon={faArrowLeft} onClick={back}/>
                                </div>
                                <img src={signup} alt="money background" className="login-background mt-4"></img>
                        </div>
                        <div className="login-wrapper">
                                <h2 className="home-title text-center w-100">Đăng Ký</h2>
                                <Form className="mt-4">
                                <Form.Group className="mb-3" controlId="fullName">
                                <Form.Text className="text-muted">
                                Họ tên
                                </Form.Text>
                                <Form.Control type="text" placeholder="Đỗ Thanh Tiền" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="phoneNumber">
                                <Form.Text className="text-muted">
                                Số điện thoại
                                </Form.Text>
                                <Form.Control type="text" placeholder="0939511080" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="Username">
                                <Form.Text className="text-muted">
                                Username
                                </Form.Text>
                                <Form.Control type="text" placeholder="username" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Text className="text-muted">
                                Password
                                </Form.Text>
                                <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100 mt-2">
                                Đăng ký
                                </Button>
                                </Form>
                                <div className="mt-4 w-100 text-center">Đã có tài khoản? <span className="text-primary" onClick={navigateLogin}>Đăng nhập</span></div>
                        </div>
                </div>
        )
}

export default SignUp;