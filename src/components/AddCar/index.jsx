import { Card, FloatingLabel, Form, Button } from "react-bootstrap";

const AddCar = () => {
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
                    <Form>
                        <FloatingLabel
                            controlId="floatingManufacturer"
                            label="Manufacturer"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="" required />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingModel"
                            label="Model"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="" required />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingType"
                            label="Type"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="" required />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingYear"
                            label="Year"
                            className="mb-3"
                        >
                            <Form.Control
                                type="number"
                                placeholder=""
                                required
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingTransmission"
                            label="Transmission"
                            className="mb-3"
                        >
                            <Form.Select aria-label="Transmission" required>
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
                                required
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingPlate"
                            label="Plate"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="" required />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingDescription"
                            label="Description"
                            className="mb-3"
                        >
                            <Form.Control
                                as="textarea"
                                placeholder=""
                                required
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingAvailableAt"
                            label="Available At"
                            className="mb-3"
                        >
                            <Form.Control type="date" placeholder="" required />
                        </FloatingLabel>
                        <Form.Group className="mb-3" controlId="floatingFile">
                            <Form.Label className="text-black ms-3 mb-1">
                                Car Image
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
                                Confirm, Add Car
                            </Button>
                            <Button variant="outline-warning" size="lg">
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
