import React from "react";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Container,
    Row,
} from "reactstrap";

const AdmissionForm = () => {
    return (
        <Row md="2">
            <Container>
                <Form className="form">
                    <FormGroup>
                        <Label for="first_name">First Name</Label>
                        <Input
                            type="text"
                            name="first_name"
                            placeholder="First name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="last_name">Last Name</Label>
                        <Input
                            type="text"
                            name="last_name"
                            placeholder="Last name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Department</Label>
                        <Input
                            type="text"
                            name="dept"
                            placeholder="Department"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Date of Admission</Label>
                        <Input
                            type="text"
                            name="doj"
                            placeholder="Date of Joining"
                        />
                    </FormGroup>
                    <Button color="success">Submit</Button>
                </Form>
            </Container>
        </Row>
    );
};

export default AdmissionForm;
