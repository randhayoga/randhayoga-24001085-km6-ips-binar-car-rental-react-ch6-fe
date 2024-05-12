import { Container, Col, Row } from "react-bootstrap";
import AddCarComponent from "../../components/AddCar";

const AddCar = () => {
    return (
        <Container className="mt-5 pt-5">
            <Row className="row">
                <Col className="col-0 col-md-1 col-lg-2 col-xl-3"></Col>
                <Col className="col-12 col-md-10 col-lg-8 col-xl-6 mb-5">
                    <AddCarComponent />
                </Col>
                <Col className="col-12 col-md-1 col-lg-2 col-xl-3"></Col>
            </Row>
        </Container>
    );
};

export default AddCar;
