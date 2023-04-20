import React, { useState } from 'react';
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";
import { useFarmaciaState } from '../contexts/farmaciaContext/useFarmacia';
import SuccessoModal from '../components/SucessoModal';
import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import AlertModal from '../components/AlertModal';


const CadastroFarmacia = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cadastroSucesso, setCadastroSucesso] = useState(false);
  const [alertaAberto, setAlertaAberto] = useState(false);
  const [textoAlert , setTextoAlert] = useState('');

  const { farmData, updateFarmData, registerFarmacia, verificaCamposObrigatorios,buscarAtualizarEndereco} = useFarmaciaState();

  // gira o card
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    
    const campoNaoPreenchido = verificaCamposObrigatorios();
    if (campoNaoPreenchido) {
      setAlertaAberto(true);
      setTextoAlert(`Preencha o campo obrigatório: ${campoNaoPreenchido}`);
    } else {
      const farmacia = registerFarmacia(farmData);
      if (farmacia) {
        setCadastroSucesso(true);
      } else {
        setAlertaAberto(true);
        setTextoAlert('CNPJ já cadastrado');
      }
    }
  };
  
  return (


    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">

      
      <div className="relative py-3 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl sm:mx-auto">
      <AlertModal 
        aberto={alertaAberto}
        textoMensagem={textoAlert}
        fechar={() => setAlertaAberto(false)}  
        />
        <SuccessoModal 
        isOpen={cadastroSucesso} 
        linkConsulta="/farmacias" 
        linkNovoCadastro="/farmacias/cadastrar" 
        textoBody='Farmácia cadastrado com sucesso' 
        textoTitulo='Registro de Farmácia'  
        onClose={() => setCadastroSucesso(false) } 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div
          className={`bg-white shadow-lg sm:rounded-3xl md:-pb-10 sm:p-20 px-4 md:px-10 transform ${isFlipped ? "pb-96 pt-16 sm:pb-72 md:pb-36" : "py-4"
            } transition-all duration-700 ease-in-out`}
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1000px',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          <div
            className={` w-full h-full top-10 md:p-0  sm:p-10 ${isFlipped ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`} style={{ backfaceVisibility: 'hidden' }}
          >
            <h1 className="text-center md:text-2xl font-semibold mb-6"> Cadastrar Farmácia </h1>
            <Container>
              <Form onSubmit={handleSubmit}>
                <Row form>
                  <Col md={12}>
                    <FormGroup>
                      <FormLabel htmlFor="razaoSocial">Razão Social</FormLabel >
                      <FormControl
                        type="text"
                        name="razaoSocial"
                        id="razaoSocial"
                        value={farmData.razaoSocial}
                        onChange={updateFarmData}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <FormLabel htmlFor="cnpj">CNPJ</FormLabel>
                      <InputMask className="input-mask"
                        mask="99.999.999/9999-99"
                        type="text"
                        name="cnpj"
                        id="cnpj"
                        value={farmData.cnpj}
                        onChange={updateFarmData}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <FormLabel htmlFor="nomeFantasia">Nome Fantasia</FormLabel >
                      <FormControl
                        type="text"
                        name="nomeFantasia"
                        id="nomeFantasia"
                        value={farmData.nomeFantasia}
                        onChange={updateFarmData}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                    <FormGroup>
                      <FormLabel htmlFor="email">E-mail</FormLabel >
                      <FormControl
                        type="email"
                        name="email"
                        id="email"
                        value={farmData.email}
                        onChange={updateFarmData}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <FormLabel htmlFor="telefone">Telefone</FormLabel >
                      <InputMask className="input-mask"
                        mask="(99) 9999-9999"
                        type="tel"
                        name="telefone"
                        id="telefone"
                        value={farmData.telefone}
                        onChange={updateFarmData}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <FormLabel htmlFor="celular">Celular</FormLabel >
                      <InputMask className="input-mask"
                        mask="(99) 9999-99999"
                        type="tel"
                        name="celular"
                        id="celular"
                        value={farmData.celular}
                        onChange={updateFarmData}
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </Container>
            <div className='flex justify-end mt-5'><span onClick={handleClick} className='text-sm flex bg-slate-50 px-3 py-1 rounded-3xl shadow-md  mx-auto md:mx-0 items-center cursor-pointer hover:bg-slate-100'>Endereço da Farmacia<FiChevronsRight className='ml-2 ' /></span></div>
          </div>
          <div
            className={`w-full h-full absolute top-10 md:top-10 left-0 md:py-0 px-4 ${isFlipped ? 'opacity-100' : 'opacity-0 '} transition-opacity duration-1000`}
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}

          >

            <h1 className="text-center md:text-2xl font-semibold mb-6">Endereço</h1>
            <Form onSubmit={handleSubmit} className="  row g-3">
              <FormGroup className="col-md-3">
                <FormLabel htmlFor="cep">Cep</FormLabel>
                <FormControl
                  type="text"
                  id="cep"
                  name="cep"
                  maxLength={8}
                  value={farmData.cep}
                  onChange={updateFarmData}
                  onBlur={(e) => buscarAtualizarEndereco(e.target.value)}

                  required
                />
              </FormGroup>
              <FormGroup className="col-md-9">
                <FormLabel htmlFor="logradouro">Logradouro</FormLabel>
                <FormControl
                  type="text"
                  id="logradouro"
                  name="logradouro"
                  value={farmData.logradouro}
                  onChange={updateFarmData}

                  required
                />
              </FormGroup>
              <FormGroup className="col-md-3">
                <FormLabel htmlFor="lagradouroNumero">Número</FormLabel>
                <FormControl
                  type="text"
                  id="logradouroNumero"
                  name="logradouroNumero"
                  value={farmData.logradouroNumero}
                  onChange={updateFarmData}
                  required
                />
              </FormGroup>
              <FormGroup className="col-md-9">
                <FormLabel htmlFor="bairro">Bairro</FormLabel>
                <FormControl
                  type="text"
                  id="bairro"
                  name="bairro"
                  value={farmData.bairro}
                  onChange={updateFarmData}
                  required
                />
              </FormGroup>
              <FormGroup className="col-12">
                <FormLabel htmlFor="complemento">Complemento</FormLabel>
                <FormControl
                  type="text"
                  id="complemento"
                  name="complemento"
                  value={farmData.complemento}
                  onChange={updateFarmData}
                />
              </FormGroup>
              <FormGroup className="col-md-9">
                <FormLabel htmlFor="cidade">Cidade</FormLabel>
                <FormControl
                  type="text"
                  id="cidade"
                  name="cidade"
                  value={farmData.cidade}
                  onChange={updateFarmData}
                  required
                />
              </FormGroup>
              <FormGroup className="col-md-3">
                <FormLabel htmlFor="estado">Estado</FormLabel>
                <FormControl
                  type="text"
                  id="estado"
                  name="estado"
                  value={farmData.estado}
                  onChange={updateFarmData}
                  required
                />
              </FormGroup>
              <FormGroup className="col-md-6">
                <FormLabel htmlFor="latitude">Latitude</FormLabel>
                <FormControl
                  type="text"
                  id="latitude"
                  name="latitude"
                  value={farmData.latitude}
                  onChange={updateFarmData}
                  required
                />
              </FormGroup>
              <FormGroup className="col-md-6">
                <FormLabel htmlFor="longitude">Longitude</FormLabel>
                <FormControl
                  type="text"
                  id="longitude"
                  name="longitude"
                  value={farmData.longitude}
                  onChange={updateFarmData}
                  required
                />
              </FormGroup>
              <div className="col-12">
                <Button className='bg-orange-500 border-0 hover:bg-orange-600 flex w-1/2 justify-center mx-auto  py-1 px-2 rounded-lg  text-white' type='submit'>
                  Registrar
                </Button>
              </div>
              <div className='flex justify-start mt-8'><span onClick={handleClick} className='text-sm flex bg-slate-50 px-3 py-1 rounded-3xl shadow-md  mx-auto md:mx-0 items-center cursor-pointer hover:bg-slate-100'><FiChevronsLeft className='mr-2 ' />Dados da Farmacia</span></div>
            </Form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastroFarmacia;
