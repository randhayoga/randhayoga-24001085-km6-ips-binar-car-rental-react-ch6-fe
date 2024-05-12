import { Card, FloatingLabel, Form, Button } from "react-bootstrap";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createCar } from "../../redux/actions/car";

const AddCar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [manufacturerName, setManufacturerName] = useState("");
    const [modelName, setModelName] = useState("");
    const [type, setType] = useState("");
    const [year, setYear] = useState("");
    const [transmission, setTransmission] = useState("");
    const [capacity, setCapacity] = useState("");
    const [rentPerDay, setRentPerDay] = useState("");
    const [plate, setPlate] = useState("");
    const [description, setDescription] = useState("");
    const [availableAt, setAvailableAt] = useState("");
    const [image, setImage] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        dispatch(
            createCar(
                navigate,
                manufacturerName,
                modelName,
                type,
                year,
                transmission,
                capacity,
                rentPerDay,
                plate,
                availableAt,
                description,
                image
            )
        );
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
                    <Card.Title className="text-center fs-2 mb-0">
                        Add Car
                    </Card.Title>
                    <Card.Text className="text-center fs-5">
                        Fill in the car's information
                    </Card.Text>
                    <Form onSubmit={onSubmit}>
                        <FloatingLabel
                            controlId="floatingManufacturer"
                            label="Manufacturer"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                placeholder=""
                                value={manufacturerName}
                                onChange={(e) =>
                                    setManufacturerName(e.target.value)
                                }
                                required
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingModel"
                            label="Model"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                placeholder=""
                                value={modelName}
                                onChange={(e) => setModelName(e.target.value)}
                                required
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingType"
                            label="Type"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                placeholder=""
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                required
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingYear"
                            label="Year"
                            className="mb-3"
                        >
                            <Form.Control
                                type="number"
                                placeholder=""
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                required
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingTransmission"
                            label="Transmission"
                            className="mb-3"
                        >
                            <Form.Select
                                aria-label="Transmission"
                                required
                                value={transmission}
                                onChange={(e) =>
                                    setTransmission(e.target.value)
                                }
                            >
                                <option value="">Select...</option>
                                <option value="manual">Manual</option>
                                <option value="matic">Matic</option>
                            </Form.Select>
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingCapacity"
                            label="Capacity"
                            className="mb-3"
                        >
                            <Form.Control
                                type="number"
                                placeholder=""
                                value={capacity}
                                onChange={(e) => setCapacity(e.target.value)}
                                required
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingRent"
                            label="Rent (per Day)"
                            className="mb-3"
                        >
                            <Form.Control
                                type="number"
                                placeholder=""
                                value={rentPerDay}
                                onChange={(e) => setRentPerDay(e.target.value)}
                                required
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingPlate"
                            label="Plate"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                placeholder=""
                                value={plate}
                                onChange={(e) => setPlate(e.target.value)}
                                required
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingDescription"
                            label="Description"
                            className="mb-3"
                        >
                            <Form.Control
                                as="textarea"
                                placeholder=""
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingAvailableAt"
                            label="Available At"
                            className="mb-3"
                        >
                            <Form.Control
                                type="date"
                                placeholder=""
                                required
                                value={availableAt}
                                onChange={(e) => setAvailableAt(e.target.value)}
                            />
                        </FloatingLabel>
                        <Form.Group className="mb-3" controlId="floatingFile">
                            <Form.Label className="text-black ms-3 mb-1">
                                Car Image
                            </Form.Label>
                            <Form.Control
                                type="file"
                                accept="image/*"
                                onChange={(e) => setImage(e.target.files[0])}
                                required
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
                                {isLoading
                                    ? "Processing..."
                                    : "Confirm, Add Car"}
                            </Button>
                            <Button
                                variant="outline-warning"
                                size="lg"
                                disabled={isLoading}
                                onClick={() => navigate("/")}
                            >
                                Cancel
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
};

export default AddCar;
