import { Card, ListGroup, Ratio, Button, Col } from "react-bootstrap";
import {
    FaCog,
    FaUserFriends,
    FaMoneyCheckAlt,
    FaCar,
    FaMinusSquare,
} from "react-icons/fa";
import PropTypes from "prop-types";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/actions/auth";
import { useNavigate } from "react-router-dom";

const CarCard = ({ car }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        // Get user profile if we have token
        dispatch(getProfile(navigate, null, "/login"));
    }, [dispatch, navigate]);

    return (
        <>
            <style type="text/css">
                {`
                    .img-fit {
                        object-fit: cover;
                        height: 100%;
                        width: 100%;
                    }
                    .btn-blue {
                        background-color: #0D28A6;
                    }
                    .btn-blue:hover {
                        background-color: #091B6F;
                    }
                    .txt-container {
                        height: 100px;
                        overflow: hidden;
                    }
                `}
            </style>

            <Col className="col-12 col-md-6 col-lg-4 col-xl-3">
                <Card className="p-0 mb-4">
                    <Ratio aspectRatio="16x9">
                        <Card.Img
                            variant="top"
                            src={car?.image}
                            className="img-fit"
                        />
                    </Ratio>
                    <Card.Body>
                        <Card.Title className="fs-3">
                            {car?.year} {car?.manufacturerName} {car?.modelName}
                        </Card.Title>
                        <Card.Text className="txt-container">
                            {car?.description}
                        </Card.Text>
                        <ListGroup>
                            <ListGroup.Item>
                                <FaCog className="me-2" /> {car?.transmission}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <FaUserFriends className="me-2" />{" "}
                                {car?.capacity} {"orang"}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <FaMoneyCheckAlt className="me-2" />
                                {"Rp."}
                                {car?.rentPerDay}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <FaCar className="me-2" /> {car?.type}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <FaMinusSquare className="me-2" /> {car?.plate}
                            </ListGroup.Item>
                        </ListGroup>

                        <div className="d-grid gap-2 mt-3">
                            {/* For Users */}
                            {user?.role === "user" && (
                                <Button variant="primary" className="btn-blue">
                                    Rent
                                </Button>
                            )}

                            {/* For Admins and Superadmin */}
                            {(user?.role === "admin" ||
                                user?.role === "superadmin") && (
                                <>
                                    <Button variant="warning">Edit</Button>
                                    <Button variant="danger">Delete</Button>
                                </>
                            )}
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

CarCard.propTypes = {
    car: PropTypes.object,
};

export default CarCard;
