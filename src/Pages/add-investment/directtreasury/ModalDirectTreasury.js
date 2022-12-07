import Axios from 'axios';
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function ModalDirectTreasuary(args) {
  const [broker, setBroker] = React.useState(null);

  const api = Axios.create({
    baseURL: "http://localhost:8080/api",
  });

  React.useEffect(() => {
    api.get("/broker").then((response) => {
      setBroker(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const json = {
      "broker": {
        "id": 1
      },
      "title": data.title,
      "initialDate": data.initialDate,
      "yieldRate": parseFloat(data.yieldRate),
      "initialValue": parseFloat(data.initialValue),
      "finalDate": data.finalDate,
      "quantity": parseFloat(data.yieldRate),
    };
    api
      .post("/treasuryDirect", json)
      .then((response) => {
        console.log(response);
      });
  }

  if (!broker) return null;

  return (
    <div>
      <ModalBody>
        <Form id="modalForm" onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="broker">
              Instituição
            </Label>
            <Input
              id="broker"
              name="broker"
              type="select"
            >
              {broker.map((b, index) => {
                return (
                  <>
                    <option key={index}>{b.name}</option>
                  </>);
              })}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="title">
              Título
            </Label>
            <Input
              id="title"
              name="title"
              placeholder="Nome do tesouro direto"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="initialDate">
              Data Inicial
            </Label>
            <Input
              id="initialDate"
              name="initialDate"
              type="date"
            />
          </FormGroup>
          <FormGroup>
            <Label for="finalDate">
              Data Final
            </Label>
            <Input
              id="finalDate"
              name="finalDate"
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
            <Label for="yieldRate">
              Rendimento
            </Label>
            <Input
              id="yieldRate"
              name="yieldRate"
              placeholder="Rendimento final"
              type="text"
            />
          </FormGroup>
        </Form>
      </ModalBody>
    </div>
  );
}

export default ModalDirectTreasuary;