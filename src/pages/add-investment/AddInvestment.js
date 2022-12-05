import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import "./add-investment.css";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import ModalStock from "./stock/ModalStock";
import ModalFixedRate from "./fixedrate/ModalFixedRate";
import ModalDirectTreasuary from "./directtreasury/ModalDirectTreasury";
import ModalCheckingAccount from "./checkingaccount/ModalCheckingAccount";
import api from "../../services/api";

function AddInvestment() {
  useEffect(() => {
    document.title = "Aurum Investing";
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
      <div className="main-add-investment">
        <div className="investment-options">
          <Button onClick={openCheckingAccount}>Conta Corrente</Button>
          <Button onClick={openDirectTreasuary}>Tesouro Direto</Button>
          <Button onClick={openFixedRate}>Renda Fixa</Button>
          <Button onClick={openStock}>Ação</Button>
        </div>

        <Modal isOpen={modalStock} toggle={openStock} size="lg">
          <ModalHeader toggle={openStock}>Cadastro de Ativos</ModalHeader>
          <ModalStock />
          <ModalFooter>
            <Button form="modalForm" color="primary" type="submit" onClick={openStock}>
              Salvar
            </Button>{" "}
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
            </Button>{" "}
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
            </Button>{" "}
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
            </Button>{" "}
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