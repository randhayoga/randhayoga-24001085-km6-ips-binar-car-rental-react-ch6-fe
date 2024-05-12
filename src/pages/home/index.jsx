import { Container, Row } from "react-bootstrap";
import CarCard from "../../components/CarCard";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../redux/actions/car";

const Home = () => {
    const dispatch = useDispatch();

    const { cars } = useSelector((state) => state.car);

    useEffect(() => {
        dispatch(getCars());
    }, [dispatch]);

    return (
        <Container className="mt-5 pt-5">
            <Row className="row">
                {cars.data.length > 0 ? (
                    cars.data.map((car) => <CarCard key={car.id} car={car} />)
                ) : (
                    <h4 className="text-center">No cars available.</h4>
                )}
            </Row>
        </Container>
    );
};

export default Home;
