import React, { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import './add-investment.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ModalStock from './stock/ModalStock';
import ModalFixedRate from './fixedrate/ModalFixedRate';
import ModalDirectTreasuary from './directtreasury/ModalDirectTreasury';
import ModalCheckingAccount from './checkingaccount/ModalCheckingAccount';

function AddInvestment() {
  useEffect(() => {
    document.title = "Adicionar investimento"
  }, []);
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


  return (
    <>
      <Navbar />
      <div className='add-investment'>
        <h3>Adicionar investimento</h3>
        <div className='investment-options'>
          <Button color="danger" onClick={openCheckingAccount}>Conta Corrente</Button>
          <Button color="danger" onClick={openDirectTreasuary}>Tesouro Direto</Button>
          <Button color="danger" onClick={openFixedRate}>Renda Fixa</Button>
          <Button color="danger" onClick={openStock}>Ação</Button>
        </div>


        <Modal isOpen={modalStock} toggle={openStock}>
          <ModalHeader toggle={openStock}>Cadastro de Ativos</ModalHeader>
          <ModalStock />
          <ModalFooter>
            <Button color="primary" onClick={openStock}>
              Do Something
            </Button>{' '}
            <Button color="secondary" onClick={openStock}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>


        <Modal isOpen={modalFixedRate} toggle={openFixedRate}>
          <ModalHeader toggle={openFixedRate}>Cadastro de Renda Fixa</ModalHeader>
          <ModalFixedRate />
          <ModalFooter>
            <Button color="primary" onClick={openFixedRate}>
              Do Something
            </Button>{' '}
            <Button color="secondary" onClick={openFixedRate}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>


        <Modal isOpen={modalDirectTreasuary} toggle={openDirectTreasuary}>
          <ModalHeader toggle={openDirectTreasuary}>Cadastro de Tesouro Direto</ModalHeader>
          <ModalDirectTreasuary />
          <ModalFooter>
            <Button color="primary" onClick={openDirectTreasuary}>
              Do Something
            </Button>{' '}
            <Button color="secondary" onClick={openDirectTreasuary}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>


        <Modal isOpen={modalCheckingAccount} toggle={openCheckingAccount}>
          <ModalHeader toggle={openCheckingAccount}>Cadastro de Conta Corrente</ModalHeader>
          <ModalCheckingAccount />
          <ModalFooter>
            <Button color="primary" onClick={openCheckingAccount}>
              Do Something
            </Button>{' '}
            <Button color="secondary" onClick={openCheckingAccount}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>

    </>
  );
}

export default AddInvestment;