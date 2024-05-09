import { Card, FloatingLabel, Form, Button } from "react-bootstrap";

function Register() {
    return (
        <>
            <style type="text/css">
                {`
                    .logo-size {
                        width: 40%;
                    }
                    .btn-blue {
                        background-color: #0D28A6;
                    }
                    .btn-blue:hover {
                        background-color: #5E70C4;
                    }
                    input[type="file"]{
                        height:50px;
                    }
                    input[type="file"]::-webkit-file-upload-button{
                        height:50px;
                    }
                `}
            </style>

            <Card>
                <Card.Body>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <Card.Img
                            src="images/logo.png"
                            className="logo-size mb-4 mt-2"
                        />
                    </div>
                    <Card.Text className="text-center fs-5">
                        Please fill in the form to continue
                    </Card.Text>
                    <Form>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control
                                type="email"
                                placeholder=""
                                required
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingName"
                            label="Name"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="" required />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Password"
                            className="mb-3"
                        >
                            <Form.Control
                                type="password"
                                placeholder=""
                                required
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingConfirmPassword"
                            label="Confirm Password"
                            className="mb-3"
                        >
                            <Form.Control
                                type="password"
                                placeholder=""
                                required
                            />
                        </FloatingLabel>
                        <Form.Group className="mb-3" controlId="floatingFile">
                            <Form.Label className="text-black ms-3 mb-1">
                                Profile Picture{" "}
                                <span className="text-info-emphasis">
                                    (optional)
                                </span>
                            </Form.Label>
                            <Form.Control
                                type="file"
                                accept="image/*"
                                required
                            />
                        </Form.Group>

                        <div className="d-grid gap-2 mt-5">
                            <Button
                                variant="primary"
                                size="lg"
                                className="btn-blue"
                                type="submit"
                            >
                                Sign Up
                            </Button>
                            <Button variant="link" size="lg">
                                {/* Add route to login*/}
                                Already have an account? Sign In
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}

export default Register;
