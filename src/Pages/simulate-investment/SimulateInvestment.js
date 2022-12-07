import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Table } from "reactstrap";
import Navbar from "../../components/Navbar";
import "./simulate.css";
import AnyChart from "anychart-react/dist/anychart-react";

function SI() {
  useEffect(() => {
    document.title = "Aurum Investing";
  }, []);

  const anual = (taxaMensal) => {
    return (Math.pow(1 + taxaMensal / 100, 12) - 1) * 100;
  };
  const mensal = (taxaAnual) => {
    return (Math.pow(1 + taxaAnual / 100, 1 / 12) - 1) * 100;
  };

  const [lucroBruto, setlucroBruto] = useState(0);
  const [valorInvestido, setvalorInvestido] = useState(0);
  const [modalSimulateinvestment, setModalSimulateinvestment] = useState(false);
  const [modalerror, setModalerror] = useState(false);
  const openSimulateinvestment = () => setModalSimulateinvestment(!modalSimulateinvestment);
  const openerror = () => setModalerror(!modalerror);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    const valorInvestido = parseFloat(data.valorinvestido);
    const inflacaoMensal = parseFloat(data.taxainflacao);
    const aporte = parseFloat(data.aporteperiodico);
    const tempo = parseFloat(data.tempo);
    let taxaMensal = parseFloat(data.taxajuros);
    const taxaAnual = anual(taxaMensal);
    let valorFinal = 0;
    let lucrobruto = 0;

    if (!isNaN(inflacaoMensal)) {
      const inflacaoAnual = anual(inflacaoMensal);
      taxaMensal = ((1 + taxaAnual / 100) / (1 + inflacaoAnual / 100) - 1) * 100;
      taxaMensal = mensal(taxaMensal);
    }

    if (!isNaN(aporte)) {
      valorFinal =
        aporte * (((Math.pow(1 + taxaMensal / 100, tempo) - 1) / (taxaMensal / 100)) * (1 + taxaMensal / 100));
      console.log(valorFinal);
      valorFinal = valorFinal + valorInvestido;
      console.log(valorFinal);
      setvalorInvestido(valorInvestido + aporte * tempo);
      console.log(valorInvestido + aporte * tempo);
    } else {
      valorFinal = valorInvestido * Math.pow(1 + taxaMensal / 100, tempo);
      setvalorInvestido(valorInvestido);
      console.log(valorInvestido);
    }
    if (!isNaN(valorFinal) && !isNaN(valorInvestido) && !isNaN(aporte)) {
      lucrobruto = valorFinal - (valorInvestido + aporte * tempo);
      console.log(lucrobruto);
      setlucroBruto(lucrobruto);
    }

    if (valorInvestido && tempo) {
      setModalSimulateinvestment(!modalSimulateinvestment);
    } else {
      setModalerror(!modalerror);
    }
  };

  const data_geral = [
    { x: "Valor Investido", value: valorInvestido },
    { x: "Lucro Final", value: lucroBruto },
  ];

  const pie = {
    type: "pie",
    width: 600,
    height: 400,
    data: data_geral,
    title: "Lucro Gerado",
    background: "#b2b2b200",
  };

  return (
    <>
      <Navbar />

      <Form id="form-simulate-investment" onSubmit={handleSubmit}>
        <div className="main-si">
          <div className="container-si">
            <h3 className="h3-si">Simular Investimento</h3>

            <div className="texto-e-input-si">
              <label for="valor-investido">Valor Investido</label>
              <div className="checkbox-e-texto-si">
                <input
                  id="valorinvestido"
                  type="text"
                  name="valorinvestido"
                  placeholder="Insira o Valor Investido"
                  required
                />
              </div>
            </div>

            <div className="texto-e-input-si">
              <label for="taxa-juros">Taxa de Juros Mensal</label>
              <div className="checkbox-e-texto-si">
                <input
                  id="taxajuros"
                  type="text"
                  name="taxajuros"
                  placeholder="Insira a Taxa de Juros Mensal"
                  required
                />
              </div>
            </div>
            <div className="texto-e-input-si">
              <label for="taxa-inflacao">Taxa de Inflação Mensal (opcional)</label>
              <div className="checkbox-e-texto-si">
                <input
                  id="taxainflacao"
                  type="text"
                  name="taxainflacao"
                  placeholder="Insira a Taxa de Inflação Mensal"
                />
              </div>
            </div>

            <div className="texto-e-input-si">
              <label for="aporte-periodico">Aporte Periódico Mensal (opcional)</label>
              <div className="checkbox-e-texto-si">
                <input
                  id="aporteperiodico"
                  type="text"
                  name="aporteperiodico"
                  placeholder="Insira o Aporte Periódico Mensal"
                />
              </div>
            </div>

            <div className="texto-e-input-si">
              <label for="tempo">Tempo em Meses</label>
              <div className="checkbox-e-texto-si">
                <input id="tempo" type="text" name="tempo" placeholder="Insira o Tempo em Meses" required />
              </div>
            </div>

            <button form="form-simulate-investment" type="submit" className="botao-calcular">
              Calcular
            </button>
          </div>
        </div>
        <Modal isOpen={modalSimulateinvestment} toggle={openSimulateinvestment} size="lg" id="modalcerto">
          <ModalHeader toggle={openSimulateinvestment}>Simulação de ativos</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="stock">Seu investimento renderia: R$ {lucroBruto.toFixed(2)}</Label>
              <AnyChart id="pie-chart" {...pie} />
              <Table hover responsive size="sm">
                <tbody>
                  <tr>
                    <th>Total</th>
                    <th>R$ {(valorInvestido + lucroBruto).toFixed(2)}</th>
                  </tr>
                  <tr>
                    <th>valor Investido</th>
                    <th>R$ {valorInvestido.toFixed(2)}</th>
                  </tr>
                  <tr>
                    <th>Lucro Bruto</th>
                    <th>R$ {lucroBruto.toFixed(2)}</th>
                  </tr>
                </tbody>
              </Table>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={openSimulateinvestment}>
              Fechar
            </Button>
          </ModalFooter>
        </Modal>
      </Form>
    </>
  );
}
export default SI;
