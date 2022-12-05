import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import api from "../../../services/api";

function ModalFixedRate(args) {
  const [broker, setBroker] = React.useState(null);

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
      "paper": data.paper,
      "issuer": "",
      "initialDate": data.initialDate,
      "yieldRate": parseFloat(data.yieldRate),
      "initialValue": parseFloat(data.initialValue),
      "finalDate": data.finalDate
    };
    api
      .post("/fixedIncome", json)
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
              <Label for="paper">
                Título
              </Label>
              <Input
                id="paper"
                name="paper"
                placeholder="Nome da renda fixa"
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
                name="initialValue"
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
                placeholder="Rendimento anual"
                type="text"
              />
            </FormGroup>
          </Form>
        </ModalBody>
    </div>
  );
}

export default ModalFixedRate;