import { Container, Row } from "react-bootstrap";
import CarCard from "../../components/CarCard";

const Home = () => {
    return (
        <Container className="mt-5 pt-5">
            <Row className="row-cols-4">
                {/* Map Students to Student Card*/}
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
            </Row>
        </Container>
    );
};

export default Home;
