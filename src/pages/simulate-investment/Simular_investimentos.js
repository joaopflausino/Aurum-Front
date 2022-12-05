import React, { useState } from "react";
import { useEffect } from "react";
import { Form } from "react-bootstrap";
import { Input } from "reactstrap";
import Navbar from "../../components/Navbar";
import "./simulate.css";

function SI() {
  useEffect(() => {
    document.title = "Aurum Investing";
  }, []);

  const anual = (taxaMensal) => {
    return (Math.pow(1 + taxaMensal / 100, 12) - 1) * 100
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const valorInvestido = parseFloat(data.valorinvestido);
    const inflacaoMensal = parseFloat(data.taxainflacao);
    const aporte = parseFloat(data.aporteperiodico);
    const tempo = parseFloat(data.tempo);
    let taxaMensal = parseFloat(data.taxajuros);
    const taxaAnual = anual(taxaMensal);
    let valorFinal;

    if (!isNaN(inflacaoMensal)) {
      const inflacaoAnual = anual(inflacaoMensal)
      taxaMensal = ((1 + taxaAnual / 100) / (1 + inflacaoAnual / 100) - 1) * 100
    }

    if (!isNaN(aporte)) {
      valorFinal = aporte * (((Math.pow(1 + taxaMensal / 100, tempo) - 1) / (taxaMensal / 100)) * (1 + taxaMensal / 100));
      valorFinal = valorFinal + valorInvestido
      console.log(valorFinal);
    }
    else {
      valorFinal = valorInvestido * (Math.pow(1 + taxaMensal / 100, tempo));
      console.log(valorFinal);
    }
  }

  return (
    <>
      <Navbar />
      <Form id="form-simulate-investment" onSubmit={handleSubmit}>
        <div className="main-si">
          <div className="container-si">
            <h3 className="h3-si">Simular Investimento</h3>

            <div className="texto-e-input-si-first">
              <label for="valor-investido">Valor Investido</label>
              <input id="valorinvestido" type="text" name="valorinvestido" placeholder="Insira montante investido" />
            </div>

            <div className="texto-e-input-si">
              <label for="taxa-juros">Taxa de Juros</label>
              <div className="checkbox-e-texto-si">
                <Input id="taxajuros" type="text" name="taxajuros" placeholder="Taxa de Juros" />
              </div>
            </div>

            <div className="texto-e-input-si">
              <label for="taxa-inflacao">Taxa de Inflação (opcional)</label>
              <div className="checkbox-e-texto-si">
                <input id="taxainflacao" type="text" name="taxainflacao" placeholder="Taxa de Inflação" />
              </div>
            </div>

            <div className="texto-e-input-si">
              <label for="aporte-periodico">Aporte periódico (opcional)</label>
              <div className="checkbox-e-texto-si">
                <input id="aporteperiodico" type="text" name="aporteperiodico" placeholder="Aporte periódico" />
              </div>
            </div>

            <div className="texto-e-input-si">
              <label for="tempo">Tempo</label>
              <div className="checkbox-e-texto-si">
                <input id="tempo" type="text" name="tempo" placeholder="Tempo" />
              </div>
            </div>

            <button form="form-simulate-investment" type="submit" className="botao-calcular">Calcular</button>
          </div>
        </div>
      </Form></>
  );
}
export default SI;