import Axios from 'axios';
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function ModalStock(args) {
  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  const [stock, setStock] = React.useState(null);
  const [broker, setBroker] = React.useState(null);

  const api = Axios.create({
    baseURL: "http://localhost:8080/api",
  });

  React.useEffect(() => {
    api.get("/stockdb").then((response) => {
      setStock(response.data);
    });
  }, []);

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
      "stock": {
        "id": data.stock
      },
      "broker": {
        "id": 1
      },
      "quantity": parseFloat(data.quantity),
      "initialValue": (parseFloat(data.quantity) * parseFloat(data.price)),
      "initialDate": data.initialDate,
      "price": parseFloat(data.price)
    };
    api
      .post("/stock", json)
      .then((response) => {
        console.log(response);
      });
  }

  if (!stock) return null;

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
                <Label for="stock">
                  Ativo
                </Label>
                <Input
                  id="stock"
                  name="stock"
                  type="select"
                >
                  {stock.map((s, index) => {
                    return (
                      <>
                        <option key={index}>{s.id}</option>
                      </>);
                  })}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="initialDate">
                  Data
                </Label>
                <Input
                  id="initialDate"
                  name="initialDate"
                  type="date"
                />
              </FormGroup>
              <FormGroup>
                <Label for="price">
                  Cotação
                </Label>
                <Input
                  id="price"
                  name="price"
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
                  name="quantity"
                  placeholder="Quantidade de ativos investida"
                  type="text"
                />
              </FormGroup>
            </Form>
          </ModalBody>
    </div>
  );
}

export default ModalStock;