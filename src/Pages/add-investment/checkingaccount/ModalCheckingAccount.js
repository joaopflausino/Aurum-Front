import Axios from "axios";
import React, { useState } from "react";
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
import AuthService from "../../../app/service/auth";

function ModalCheckingAccount(args) {
  const auth = AuthService;

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
    const checkingAccount = {
      broker: {
        id: data.broker,
      },
      title: data.title,
      initialDate: data.initialDate,
      yieldRate: parseFloat(data.yieldRate),
      initialValue: parseFloat(data.initialValue),
    };
    const user = auth.getUserAuth();
    const json = { checkingAccount: checkingAccount, user: user };
    api.post("/checkingAccount", json).then((response) => {
      console.log(response);
    });
  };

  if (!broker) return null;

  return (
    <div>
      <ModalBody>
        <Form id="modalForm" onSubmit={handleSubmit}>
          <FormGroup>
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
          <FormGroup>
            <Label for="title">Título</Label>
            <Input id="title" name="title" placeholder="Título da conta corrente" type="text" />
          </FormGroup>
          <FormGroup>
            <Label for="initialDate">Data Inicial</Label>
            <Input id="initialDate" name="initialDate" type="date" />
          </FormGroup>
          <FormGroup>
            <Label for="initialValue">Valor Inicial</Label>
            <Input id="initialValue" name="initialValue" placeholder="Valor investido" type="text" />
          </FormGroup>
          <FormGroup>
            <Label for="yieldRate">Rendimento Mensal</Label>
            <Input id="yieldRate" name="yieldRate" placeholder="Rendimento mensal" type="text" />
          </FormGroup>
        </Form>
      </ModalBody>
    </div>
  );
}

export default ModalCheckingAccount;
