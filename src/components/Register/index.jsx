import { Card, FloatingLabel, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { register } from "../../redux/actions/auth";

function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [photo, setPhoto] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (password != confirmPassword) {
            toast.error(`Password and confirm password must be same!`);
            return;
        }

        setIsLoading(true);
        dispatch(register(navigate, name, email, password, photo));
        setIsLoading(false);
    };

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
                        {/* Add route to home */}
                        <Card.Img
                            src="images/logo.png"
                            className="logo-size mb-4 mt-2"
                        />
                    </div>
                    <Card.Text className="text-center fs-5">
                        Please fill in the form to continue
                    </Card.Text>
                    <Form onSubmit={onSubmit}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control
                                type="email"
                                placeholder=""
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingName"
                            label="Name"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                placeholder=""
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Password"
                            className="mb-3"
                        >
                            <Form.Control
                                type="password"
                                placeholder=""
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
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
                                onChange={(e) => setPhoto(e.target.files[0])}
                            />
                        </Form.Group>

                        <div className="d-grid gap-2 mt-5">
                            <Button
                                variant="primary"
                                size="lg"
                                className="btn-blue"
                                type="submit"
                                disabled={isLoading}
                            >
                                {isLoading ? "Processing..." : "Sign up"}
                            </Button>
                            <Button
                                variant="link"
                                size="lg"
                                disabled={isLoading}
                                onClick={() => navigate("/login")}
                            >
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
