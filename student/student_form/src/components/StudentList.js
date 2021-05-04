import React, { useState } from "react";
import {
    Card,
    Button,
    CardHeader,
    CardBody,
    CardTitle,
    CardText,
    Row,
    Container,
    Col,
} from "reactstrap";

const StudentList = () => {
    const [studentList, setStudentList] = useState([]);
    return (
        <Container>
            <Row>
                {studentList.map((student) => (
                    <Col md="4">
                        <Card
                            key={student.id}
                            style={{ marginTop: "2rem" }}
                            className="card-shadow"
                        >
                            <CardHeader>
                                {student.first_name} {student.last_name}
                            </CardHeader>
                            <CardBody>
                                <CardTitle tag="h5">
                                    Department : {student.dept}
                                </CardTitle>
                                <CardText>
                                    {" "}
                                    Date of joining : {student.doj}
                                </CardText>

                                <Button>Update</Button>
                                <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                >
                                    &times;
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default StudentList;
