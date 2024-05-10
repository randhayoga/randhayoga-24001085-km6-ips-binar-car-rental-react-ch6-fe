import { Card, ListGroup, Ratio, Button, Col } from "react-bootstrap";
import {
    FaCog,
    FaUserFriends,
    FaMoneyCheckAlt,
    FaCar,
    FaMinusSquare,
} from "react-icons/fa";
import PropTypes from "prop-types";

const CarCard = ({ car }) => {
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
                `}
            </style>
            <Col md={3}>
                <Card className="p-0 mb-4">
                    <Ratio aspectRatio="16x9">
                        <Card.Img
                            variant="top"
                            src="images/carTemp.jpg"
                            className="img-fit"
                        />
                    </Ratio>
                    <Card.Body>
                        <Card.Title className="fs-3">
                            Year Brand Model
                        </Card.Title>
                        <Card.Text>
                            Car description (Lorem ipsum dolor sit, amet
                            consectetur adipisicing elit.)
                        </Card.Text>
                        <ListGroup>
                            <ListGroup.Item>
                                <FaCog className="me-2" /> Transmission
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <FaUserFriends className="me-2" /> Capacity
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <FaMoneyCheckAlt className="me-2" /> Rent Per
                                Day
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <FaCar className="me-2" /> Car Type
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <FaMinusSquare className="me-2" /> Plate
                            </ListGroup.Item>
                        </ListGroup>

                        <div className="d-grid gap-2 mt-3">
                            {/* For Users */}
                            <Button variant="primary" className="btn-blue">
                                Rent
                            </Button>

                            {/* For Admins and Superadmin */}
                            <Button variant="warning">Edit</Button>
                            <Button variant="danger">Delete</Button>
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
