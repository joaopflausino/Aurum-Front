import Axios from "axios";
import React, { useState } from "react";
import { ModalBody, Form, FormGroup, Label, Input } from "reactstrap";
import AuthService from "../../../app/service/auth";
import "./ModalStock.css";

function ModalStock(args) {
  const auth = AuthService;

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
    const stock = {
      stock: {
        id: data.stock,
      },
      broker: {
        id: data.broker,
      },
      quantity: parseFloat(data.quantity),
      initialValue: parseFloat(data.quantity) * parseFloat(data.price),
      initialDate: data.initialDate,
      price: parseFloat(data.price),
    };
    const user = auth.getUserAuth();
    const json = { stock: stock, user: user };
    api.post("/stock", json).then((response) => {
      console.log(response);
    });
  };

  if (!stock) return null;

  if (!broker) return null;

  return (
    <div className="modalStockBody">
      <ModalBody>
        <Form id="modalForm" onSubmit={handleSubmit}>
          <div className="select-inputs">
            <FormGroup className="select-inputs-inside">
              <Label for="broker">Instituição</Label>
              <Input id="broker" name="broker" type="select">
                {broker.map((b, index) => {
                  return (
                    <>
                      <option key={index} value={b.id}>
                        {b.name}
                      </option>
                    </>
                  );
                })}
              </Input>
            </FormGroup>
            <FormGroup className="select-inputs-inside">
              <Label for="stock">Ativo</Label>
              <Input id="stock" name="stock" type="select">
                {stock.map((s, index) => {
                  return (
                    <>
                      <option key={index}>{s.id}</option>
                    </>
                  );
                })}
              </Input>
            </FormGroup>
          </div>
          <FormGroup>
            <Label for="initialDate">Data</Label>
            <Input id="initialDate" name="initialDate" type="date" />
          </FormGroup>
          <FormGroup>
            <Label for="price">Cotação</Label>
            <Input id="price" name="price" placeholder="Cotação do Ativo" type="text" />
          </FormGroup>
          <FormGroup>
            <Label for="quantity">Quantidade</Label>
            <Input id="quantity" name="quantity" placeholder="Quantidade de ativos investida" type="text" />
          </FormGroup>
        </Form>
      </ModalBody>
    </div>
  );
}

export default ModalStock;
