import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert, Card } from 'react-bootstrap';
import { useAuthState } from '../../contexts/userContext/useAuth';
import SucessoRegistro from '../SucessoRegistro';

const NovoUsuario = () => {
    const { registrarUsuario, validarSenha } = useAuthState();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');
    const [modalberto, setModalAberto] = useState(false);

    const paraFecharModalSucesso = () => {
        setModalAberto(false);
    };

    const enviarFormularioRegistro = async (e) => {
        e.preventDefault();
        if (validarSenha(senha)) {
            setMensagemErro('');
            try {
                await registrarUsuario({ nome, email, senha });
                setModalAberto(true);
            } catch (error) {
                console.error(error);
            }
        } else {
            setMensagemErro('A senha deve ter pelo menos 8 caracteres, incluindo pelo menos 1 letra e 1 número.');
        }
    };

    return (
        <Container className="h-1/2 my-10">
            {modalberto && (
                <SucessoRegistro isOpen={modalberto} onClose={paraFecharModalSucesso} />
            )}
            <Row className="h-100 justify-content-center align-items-center">
                <Col xs={12} md={6} lg={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-center mb-3">Registre-se</Card.Title>
                            <Form onSubmit={enviarFormularioRegistro}>
                                {mensagemErro && <Alert variant="danger">{mensagemErro}</Alert>}
                                <Form.Group className="mb-3" controlId="nome">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control
                                        type="nome"
                                        name="nome"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                        placeholder="Digite seu Nome"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={email}
                                        placeholder="Digite seu email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="senha">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="senha"
                                        value={senha}
                                        placeholder="Digite uma senha"
                                        onChange={(e) => setSenha(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Button type="submit" className="w-100 text-uppercase bg-orange-500 border-none hover:bg-orange-600">
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

export default NovoUsuario;
