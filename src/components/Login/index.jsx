import { Card, FloatingLabel, Form, Button } from "react-bootstrap";

function Login() {
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
                        background-color: #091B6F;
                    }
                `}
            </style>

            <Card>
                <Card.Body>
                    {/* Add route to home */}
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <Card.Img
                            src="images/logo.png"
                            className="logo-size mb-4 mt-2"
                        />
                    </div>
                    <Card.Title className="text-center fs-3 mb-0">
                        Welcome back,
                    </Card.Title>
                    <Card.Text className="text-center fs-5 mb-4">
                        please sign in to continue
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
                            controlId="floatingPassword"
                            label="Password"
                            className="mb-5"
                        >
                            <Form.Control
                                type="password"
                                placeholder=""
                                required
                            />
                        </FloatingLabel>

                        <div className="d-grid gap-2 mt-5">
                            <Button
                                variant="primary"
                                size="lg"
                                className="btn-blue"
                                type="submit"
                            >
                                Sign In
                            </Button>
                            <Button variant="link" size="lg">
                                {/* Add route to register */}
                                Doesn't have an account? Sign up
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}

export default Login;
