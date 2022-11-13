import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function ModalStock(args) {
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
                Ativo
              </Label>
              <Input
                id="stockId"
                name="stockName"
                placeholder="Nome do Ativo"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="buyDate">
                Data
              </Label>
              <Input
                id="buyDate"
                name="buyDateName"
                type="date"
              />
            </FormGroup>
            <FormGroup>
              <Label for="quotation">
                Cotação
              </Label>
              <Input
                id="quotation"
                name="quotationName"
                placeholder="Cotação do Ativo"
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

export default ModalStock;