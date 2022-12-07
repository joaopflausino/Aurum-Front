import Axios from "axios";
import React from "react";
import { ModalBody, FormGroup, Label, Input, Form } from "reactstrap";
import AuthService from "../../../app/service/auth";

function ModalFixedIncome(args) {
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
    const fixedIncome = {
      broker: {
        id: data.broker,
      },
      paper: data.paper,
      issuer: "",
      initialDate: data.initialDate,
      yieldRate: parseFloat(data.yieldRate),
      initialValue: parseFloat(data.initialValue),
      finalDate: data.finalDate,
    };
    const user = auth.getUserAuth();
    const json = { fixedIncome: fixedIncome, user: user };
    api.post("/fixedIncome", json).then((response) => {
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
            <Label for="paper">Título</Label>
            <Input id="paper" name="paper" placeholder="Nome da renda fixa" type="text" />
          </FormGroup>
          <FormGroup>
            <Label for="initialDate">Data Inicial</Label>
            <Input id="initialDate" name="initialDate" type="date" />
          </FormGroup>
          <FormGroup>
            <Label for="finalDate">Data Final</Label>
            <Input id="finalDate" name="finalDate" type="date" />
          </FormGroup>
          <FormGroup>
            <Label for="initialValue">Valor Inicial</Label>
            <Input id="initialValue" name="initialValue" placeholder="Valor investido" type="text" />
          </FormGroup>
          <FormGroup>
            <Label for="yieldRate">Rendimento Total</Label>
            <Input id="yieldRate" name="yieldRate" placeholder="Rendimento total" type="text" />
          </FormGroup>
        </Form>
      </ModalBody>
    </div>
  );
}

export default ModalFixedIncome;
