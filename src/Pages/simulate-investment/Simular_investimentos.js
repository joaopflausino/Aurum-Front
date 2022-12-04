import React from "react";
import { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import "./simulate.css";

function SI() {
  useEffect(() => {
    document.title = "Aurum Investing";
  }, []);
  return (
    <>
      <Navbar />
      <div className="main-si">
        <div className="container-si">
          <h3 className="h3-si">Simular Investimento</h3>

          <div className="texto-e-input-si-first">
            <label for="valor-investido">Valor Investido</label>
            <input id="valor-investido" type="text" name="valor-investido" placeholder="Insira montante investido" />
          </div>

          <div className="texto-e-input-si">
            <label for="taxa-juros">Taxa de Juros</label>
            <div className="checkbox-e-texto-si">
              {" "}
              {/* DIV RESPONSAVEL PELO INPUT + CHECKBOX */}
              <input id="taxa-juros" type="text" name="taxa-juros" placeholder="Taxa de Juros" />
              <div className="checkbox-si">
                <div className="dois-checkbox">
                  <input name="taxa-juros" type="radio" id="taxa-juros1" checked />
                  <label for="taxa-juros">% ao Ano</label>
                </div>
                <div className="dois-checkbox">
                  <input name="taxa-juros" type="radio" id="taxa-juros1" class="custom-radio" />
                  <label for="taxa-juros">% ao Mês</label>
                </div>
              </div>
            </div>
          </div>

          <div className="texto-e-input-si">
            <label for="taxa-inflacao">Taxa de Inflação (opcional)</label>
            <div className="checkbox-e-texto-si">
              {" "}
              {/* DIV RESPONSAVEL PELO INPUT + CHECKBOX */}
              <input id="taxa-inflacao" type="text" name="taxa-inflacao" placeholder="Taxa de Inflação" />
              <div className="checkbox-si">
                <div className="dois-checkbox">
                  <input name="taxa-inflacao" type="radio" id="taxa-inflacao1" checked />
                  <label for="taxa-inflacao">% ao Ano</label>
                </div>
                <div className="dois-checkbox">
                  <input name="taxa-inflacao" type="radio" id="taxa-inflacao1" class="custom-radio" />
                  <label for="taxa-inflacao">% ao Mês</label>
                </div>
              </div>
            </div>
          </div>

          <div className="texto-e-input-si">
            <label for="aporte-periodico">Aporte periódico (opcional)</label>
            <div className="checkbox-e-texto-si">
              {" "}
              {/* DIV RESPONSAVEL PELO INPUT + CHECKBOX */}
              <input id="aporte-periodico" type="text" name="aporte-periodico" placeholder="Aporte periódico" />
              <div className="checkbox-si">
                <div className="dois-checkbox">
                  <input name="aporte-periodico" type="radio" id="aporte-periodico1" checked />
                  <label for="aporte-periodico">Por Ano</label>
                </div>
                <div className="dois-checkbox">
                  <input name="aporte-periodico" type="radio" id="aporte-periodico1" class="custom-radio" />
                  <label for="aporte-periodico">Por Mês</label>
                </div>
              </div>
            </div>
          </div>

          <div className="texto-e-input-si">
            <label for="saque-periodico">Saque periódico (opcional)</label>
            <div className="checkbox-e-texto-si">
              {" "}
              {/* DIV RESPONSAVEL PELO INPUT + CHECKBOX */}
              <input id="saque-periodico" type="text" name="saque-periodico" placeholder="Saque periódico" />
              <div className="checkbox-si">
                <div className="dois-checkbox">
                  <input name="saque-periodico" type="radio" id="saque-periodico1" checked />
                  <label for="saque-periodico">Por Ano</label>
                </div>
                <div className="dois-checkbox">
                  <input name="saque-periodico" type="radio" id="saque-periodico1" class="custom-radio" />
                  <label for="saque-periodico">Por Mês</label>
                </div>
              </div>
            </div>
          </div>

          <div className="texto-e-input-si">
            <label for="tempo">Tempo</label>
            <div className="checkbox-e-texto-si">
              {" "}
              {/* DIV RESPONSAVEL PELO INPUT + CHECKBOX */}
              <input id="tempo" type="text" name="tempo" placeholder="Tempo" />
              <div className="checkbox-si">
                <div className="dois-checkbox">
                  <input name="tempo" type="radio" id="tempo1" checked />
                  <label for="tempo">Ano</label>
                </div>
                <div className="dois-checkbox">
                  <input name="tempo" type="radio" id="tempo1" class="custom-radio" />
                  <label for="box-shadow">Mês</label>
                </div>
              </div>
            </div>
          </div>

          <button className="botao-calcular">Calcular</button>
        </div>
      </div>
    </>
  );
}

export default SI;
