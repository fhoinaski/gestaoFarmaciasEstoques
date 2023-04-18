import React, { useState } from 'react';
import { useAuthState } from '../../contexts/userContext/useAuth';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const {loginUser, updateUserData, userData } = useAuthState();
    const [erro, setErro] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await loginUser(userData);
        console.log(user);
        if (user === null) {
          setErro('Senha fora dos requisitos');
        } else {
          setErro('');             
        }
      };
      
    

    return (
        <Container className="h-100 my-6">
        <Row className="h-100 justify-content-center align-items-center">
            <Col xs={12} md={6} lg={4}>
                <Card>
                    <Card.Body>
                        <Card.Title className="text-center mb-3">Faça seu login</Card.Title>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={userData.email}
                                    onChange={(e) => updateUserData("email", e.target.value)}
                                    placeholder="Digite seu Email"
                                    required
                                    autoComplete="email"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={userData.password}
                                    onChange={(e) => updateUserData("password", e.target.value)}
                                    placeholder="Digite sua senha"
                                    required
                                    autoComplete="current-password"
                                />
                            </Form.Group>
                            {erro && (
                                <Alert variant="danger" className="mb-3">{erro}</Alert>
                            )}
                            <Button variant="warning" type="submit" className="w-100 text-uppercase">
                                Entrar
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
);
};
    

export default Login;
