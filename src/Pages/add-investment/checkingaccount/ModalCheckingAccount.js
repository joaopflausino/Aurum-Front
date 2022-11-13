import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function ModalCheckingAccount(args) {
  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <div>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="broker">
                Instituição
              </Label>
              <Input
                id="broker"
                name="brokerName"
                placeholder="Instituição"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="stockId">
                Título
              </Label>
              <Input
                id="stockId"
                name="stockName"
                placeholder="Nome da renda fixa"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="buyDate">
                Data Inicial
              </Label>
              <Input
                id="buyDate"
                name="buyDateName"
                type="date"
              />
            </FormGroup>
            <FormGroup>
              <Label for="initialValue">
                Valor Inicial
              </Label>
              <Input
                id="initialValue"
                name="initialValueName"
                placeholder="Valor investido"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="yield">
                Rendimento
              </Label>
              <Input
                id="yield"
                name="yieldName"
                placeholder="Rendimento anual"
                type="text"
              />
            </FormGroup>
            <Button>
              Adicionar ação
            </Button>
          </Form>
        </ModalBody>
    </div>
  );
}

export default ModalCheckingAccount;