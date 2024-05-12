import { Card, Image, Form, InputGroup, Button } from "react-bootstrap";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/actions/auth";

const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);
    useEffect(() => {
        dispatch(getProfile(navigate, null, "/login"));
    }, [dispatch, navigate]);

    return (
        <>
            <style type="text/css">
                {`
                    .img-profile {
                        object-fit: cover;
                        height: 200px;
                        width: 200px;
                    }
                    .custom-label {
                        width: 90px;
                    }
                `}
            </style>

            <Card>
                <Card.Body>
                    <Form>
                        <Card.Title className="text-center fs-2 mb-3">
                            Your Profile
                        </Card.Title>
                        <div className="d-flex flex-column align-items-center mb-4">
                            {user?.photo && (
                                <Image
                                    src="images/profileTemp.jpg"
                                    className="img-profile"
                                    roundedCircle
                                />
                            )}
                        </div>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                id="nama-addon"
                                className="custom-label"
                            >
                                Nama
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="nama"
                                aria-describedby="nama-addon"
                                value={user?.name}
                                disabled
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                id="mail-addon"
                                className="custom-label"
                            >
                                Email
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="mail"
                                aria-describedby="mail-addon"
                                value={user?.email}
                                disabled
                            />
                        </InputGroup>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
};

export default Profile;
