import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "../../Components/Navbar";
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
import img_conta_corrente from "../../shared/images/conta-corrente.jpg";
import img_acoes from "../../shared/images/img-acoes.jpg";
import img_renda_fixa from "../../shared/images/img-renda-fixaa.png";

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
        <h1 className="h1-add-invest">Adicionar Investimento</h1>
        <div className="container-ai">
          <div class="card">
            <img src={img_conta_corrente} class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Conta Corrente</h5>
              <p class="card-text">
                A conta corrente ou conta à ordem é uma conta de depósito mantida num banco ou outra instituição
                financeira por uma pessoa física ou jurídica com o propósito de segurança e rapidez de acesso à demanda
                através de uma variedade de diferentes canais.
              </p>
              <Button onClick={openCheckingAccount}>Adicionar</Button>
            </div>
          </div>
          <div class="card">
            <img src={img_acoes} class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Ações</h5>
              <p class="card-text">
                Ações são as parcelas que compõem o capital social de uma empresa, ou seja, são as unidades de títulos
                emitidas. Quando as ações são emitidas por companhias abertas ou assemelhadas, são negociados em bolsa
                de valores ou no mercado de balcão.
              </p>
              <Button onClick={openStock}>Adicionar</Button>
            </div>
          </div>
          <div class="card">
            <img src={img_renda_fixa} class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Renda Fixa</h5>
              <p class="card-text">
                Renda fixa é um termo que se refere a qualquer tipo de investimento que possui regras de remuneração
                definidas no momento da aplicação no título. Essas regras estipulam o prazo e a forma que a remuneração
                será calculada e paga ao investidor.
              </p>
              <Button onClick={openFixedRate}>Adicionar</Button>
            </div>
          </div>
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
