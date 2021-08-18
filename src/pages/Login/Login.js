import login from '../../assets/login.svg';
import './Login.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

function Login() {
        let history = useHistory();

        function back() {
                history.replace("/");
        }
        return(
                <div className="form-login-container">
                        <div className="background-image">
                                <div className="login-back-icon-wrapper">
                                        <FontAwesomeIcon icon={faArrowLeft} onClick={back}/>
                                </div>
                                <img src={login} alt="money background" className="login-background mt-4"></img>
                        </div>
                        <div className="login-wrapper">
                                <h2 className="home-title text-center w-100">Đăng Nhập</h2>
                                <Form className="mt-4">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Text className="text-muted">
                                Username
                                </Form.Text>
                                <Form.Control type="text" placeholder="Username" />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Text className="text-muted">
                                Password
                                </Form.Text>
                                <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100 mt-2">
                                Submit
                                </Button>
                                </Form>
                                <div className="mt-5 w-100 text-center">Chưa có account? <a href="javascript:undefined">Đăng ký</a></div>
                        </div>
                </div>
        )
}

export default Login;