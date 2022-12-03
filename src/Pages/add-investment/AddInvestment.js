import React, { useState } from 'react';
import { useEffect } from 'react';
import './add-investment.css';
import { Modal, ModalHeader, ModalFooter, Button, Tooltip } from 'reactstrap';
import ModalStock from './stock/ModalStock';
import ModalFixedRate from './fixedrate/ModalFixedRate';
import ModalDirectTreasuary from './directtreasury/ModalDirectTreasury';
import ModalCheckingAccount from './checkingaccount/ModalCheckingAccount';
import Navbar from '../../components/Navbar';

function AddInvestment() {
  // modal stock
  const [modalStock, setModalStock] = useState(false);
  const openStock = () => setModalStock(!modalStock);

  // modal fixed rate
  const [modalFixedRate, setModalFixedRate] = useState(false);
  const openFixedRate = () => setModalFixedRate(!modalFixedRate);

  // modal direct treasury
  const [modalDirectTreasuary, setModalDirectTreasuary] = useState(false);
  const openDirectTreasuary = () => setModalDirectTreasuary(!modalDirectTreasuary);

  // modal chechking account
  const [modalCheckingAccount, setModalCheckingAccount] = useState(false);
  const openCheckingAccount = () => setModalCheckingAccount(!modalCheckingAccount);

  const [tooltipOpenCC, setTooltipOpenCC] = useState(false);
  const toggleCC = () => setTooltipOpenCC(!tooltipOpenCC);

  const [tooltipOpenRF, setTooltipOpenRF] = useState(false);
  const toggleRF = () => setTooltipOpenRF(!tooltipOpenRF);

  const [tooltipOpenAcao, setTooltipOpenAcao] = useState(false);
  const toggleAcao = () => setTooltipOpenAcao(!tooltipOpenAcao);


  return (
    <>
      <Navbar />
      <div className='main-add-investment'>
        <div className='investment-options'>
          <div className='title-investment'>
            <h1>Adicionar Investimento</h1>
          </div>
          <Button onClick={openCheckingAccount} id="btn-conta-corrente">Conta Corrente</Button>
          <Tooltip placement="right" isOpen={tooltipOpenCC}
            target="btn-conta-corrente"
            toggle={toggleCC} id="tooltip-cc">
              Aqui é possível que você adicione um investimento que esteja aplicado em uma conta corrente. 
              Desse modo, é necessário que o rendimento mensal seja informado, além da data inicial e a instiuição que se encontra esse investimento.</Tooltip>
          <Button onClick={openFixedRate} id="btn-renda-fixa">Renda Fixa</Button>
          <Tooltip placement="right" isOpen={tooltipOpenRF}
            target="btn-renda-fixa"
            toggle={toggleRF} id="tooltip-rf" >Aqui é possível que você adicione um investimento que esteja aplicado em uma renda fixa. 
            Desse modo, é necessário que o rendimento total seja informado, além da data inicial, data final e a instiuição que se encontra esse investimento.</Tooltip>
          <Button onClick={openStock} id="btn-acao">Ação</Button>
          <Tooltip placement="right" isOpen={tooltipOpenAcao}
            target="btn-acao"
            toggle={toggleAcao} id="tooltip-acao">Aqui é possível que você adicione um investimento que esteja aplicado em um ativo. 
            Nessa categoria de investimento, é possível a adição de 100 diferentes ações da bolsa americana (NASDAQ) e da bolsa de ativos brasileira (B3)</Tooltip>
        </div>


        <Modal isOpen={modalStock} toggle={openStock} size="lg">
          <ModalHeader toggle={openStock}>Cadastro de Ativos</ModalHeader>
          <ModalStock />
          <ModalFooter>
            <Button form="modalForm" color="primary" type="submit" onClick={openStock}>
              Salvar
            </Button>{' '}
            <Button color="secondary" onClick={openStock}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={modalFixedRate} toggle={openFixedRate} size="lg">
          <ModalHeader toggle={openFixedRate}>Cadastro de Renda Fixa</ModalHeader>
          <ModalFixedRate />
          <ModalFooter>
            <Button form="modalForm" type="submit" color="primary" onClick={openFixedRate}>
              Salvar
            </Button>{' '}
            <Button color="secondary" onClick={openFixedRate}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={modalDirectTreasuary} toggle={openDirectTreasuary} size="lg">
          <ModalHeader toggle={openDirectTreasuary}>Cadastro de Tesouro Direto</ModalHeader>
          <ModalDirectTreasuary />
          <ModalFooter>
            <Button form="modalForm" type="submit" color="primary" onClick={openDirectTreasuary}>
              Salvar
            </Button>{' '}
            <Button color="secondary" onClick={openDirectTreasuary}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={modalCheckingAccount} toggle={openCheckingAccount} size="lg">
          <ModalHeader toggle={openCheckingAccount}>Cadastro de Conta Corrente</ModalHeader>
          <ModalCheckingAccount />
          <ModalFooter>
            <Button form="modalForm" color="primary" type="submit" onClick={openCheckingAccount}>
              Salvar
            </Button>{' '}
            <Button color="secondary" onClick={openCheckingAccount}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}

export default AddInvestment;