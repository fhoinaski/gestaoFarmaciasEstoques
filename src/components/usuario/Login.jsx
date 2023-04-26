import React, { useState } from 'react';
import { useAuthState } from '../../contexts/userContext/useAuth';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AiOutlineUserAdd} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Login = () => {
  const { loginUser, atualizaDadosUsuario, dadosUsuario } = useAuthState();
  const [erro, setErro] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultado = await loginUser(dadosUsuario);    
    if (resultado.error) {
      setErro(resultado.error);
    } else {
      setErro('');
    }
  };

  return (
    <Container className="h-96 my-10">
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
                    value={dadosUsuario.email}
                    onChange={(e) => atualizaDadosUsuario("email", e.target.value)}
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
                    value={dadosUsuario.password}
                    onChange={(e) => atualizaDadosUsuario("password", e.target.value)}
                    placeholder="Digite sua senha"
                    required
                    autoComplete="current-password"
                  />
                </Form.Group>
                {erro && (
                  <Alert variant="danger" className="mb-3 text-center">{erro}</Alert>
                )}
                <Button type="submit" className="w-100 text-uppercase bg-orange-500 border-none hover:bg-orange-600">
                  Entrar
                </Button>
              </Form>
              <div className='flex justify-center items-center mt-8'>
                <p>Cadastre-se</p>
                <Link className='flex items-center' to="/registrar">
                    <p className='ml-2 text-blue-500 mr-1'> aqui</p> <AiOutlineUserAdd className='text-blue-500'/>
                </Link>
                </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
