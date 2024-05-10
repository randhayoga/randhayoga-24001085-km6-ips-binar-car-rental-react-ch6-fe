import { Card, Image, Form, InputGroup, Button } from "react-bootstrap";

const Profile = () => {
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
                    <Card.Title className="text-center fs-2 mb-3">
                        Your Profile
                    </Card.Title>
                    <div className="d-flex flex-column align-items-center mb-4">
                        <Image
                            src="images/profileTemp.jpg"
                            className="img-profile"
                            roundedCircle
                        />
                    </div>
                    <InputGroup className="mb-3">
                        <InputGroup.Text
                            id="nama-addon"
                            className="custom-label"
                        >
                            Nama
                        </InputGroup.Text>
                        <Form.Control
                            placeholder="Linus Sebastian" // fetch from API
                            aria-label="nama"
                            aria-describedby="nama-addon"
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
                            placeholder="linussebastian@binar.com" // fetch from API
                            aria-label="mail"
                            aria-describedby="mail-addon"
                            disabled
                        />
                    </InputGroup>
                </Card.Body>
            </Card>
        </>
    );
};

export default Profile;
