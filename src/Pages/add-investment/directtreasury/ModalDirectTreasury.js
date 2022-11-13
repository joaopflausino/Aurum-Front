import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function ModalDirectTreasuary(args) {
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
              <Label for="finalDate">
                Data Final
              </Label>
              <Input
                id="finalDate"
                name="finalDateName"
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
                placeholder="Rendimento final"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="quantity">
                Quantidade
              </Label>
              <Input
                id="quantity"
                name="quantityName"
                placeholder="Quantidade de ativos investida"
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

export default ModalDirectTreasuary;