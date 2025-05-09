import React from "react";
import { gerarPDF } from '../scripts/Gerarpdf';
import Assinatura from "../scripts/Assinatura";
import {compartilhar} from '../scripts/LerEnviarDados';
import logoSonda from '../assets/images/logoSonda.png';
import logoDasa from '../assets/images/logoDasa.png';



function Formulario({dados}) {
  return (
    
    <div>
      <div className="container" id="conteudo-pdf">
        
        <div className="logoAndTitulo">
          <img className="logoSonda" src={logoSonda} alt="logo sonda" title="Logo Sonda" />
        <h1>RAT - Ordem de Serviço</h1>
        <img className="logoDasa" src={logoDasa} alt="Logo dasa" title="Logo Dasa" />
        </div>
        
        
        <form id="form-rat">
          <p className="campo-colab">Campo Colaborador</p>
          <hr />

          <div className="Local-Atendimento">
            <label>
              Nome da Unidade <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Unidade" required defaultValue={dados?.unidade || ""}  />

            <label>
              Endereço <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Endereco" required />

            <label>
              Cidade <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Cidade" required />

            <label>
              Estado <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Estado" required />

            <label>
              Setor <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Setor" required />

            <label>
              Nome do colaborador/Solicitante <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Colaborador" required />

            <label>
              Telefone <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Telefone" maxLength={11} />
          </div>

          <p className="campo-field">Campo Técnico</p>
          <hr />

          <div className="Dados-Equipamento">
            <label>
              N° Chamado <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Chamado" required />

            <label>
              N° Patrimonio <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Patrimonio" required />

            <label>
              N° Serie <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Serial" required />

            <label>
              Marca <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Marca" required />

            <label>
              Modelo <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Modelo" />

            <fieldset className="checkbox-tipo-atendimento">
              <legend>Tipo de Atendimento</legend>
              <label>
                <input type="checkbox" id="Field" name="Field" /> Field
              </label>
              <label>
                <input type="checkbox" id="Remoto" name="Remoto" /> Remoto
              </label>
              <label>
                <input type="checkbox" id="Projeto" name="Projeto" /> Projeto
              </label>
            </fieldset>

            <fieldset className="tipo-equipamento">
              <legend>Tipo de Equipamento</legend>
              <label>
                <input type="checkbox" id="Notebook" name="Notebook" /> Notebook
              </label>
              <label>
                <input type="checkbox" id="Desktop" name="Desktop" /> Desktop
              </label>
              <label>
                <input type="checkbox" id="Monitor" name="Monitor" /> Monitor
              </label>
            </fieldset>
          </div>

          <div className="Dados-Acao-Tecnico">
            <label htmlFor="tecnico">
              Nome do Técnico <span style={{ color: "red" }}>*</span>
            </label>
            <input list="lista-tecnicos" id="tecnico" name="tecnico" required />
            <datalist id="lista-tecnicos">
              <option value="Guilherme " />
              <option value="Fulano" />
              <option value="Ciclano" />
            </datalist>

            <label>
              Problema Relatado <span style={{ color: "red" }}>*</span>
            </label>
            <textarea id="Problema" required></textarea>

            <label>
              Ação Realizada <span style={{ color: "red" }}>*</span>
            </label>
            <textarea id="Realizada" required></textarea>

            <label>
              Assinatura Colaborador <span style={{ color: "red" }}>*</span>
            </label>
            <Assinatura id="Assinatura"></Assinatura>
            {/* Esse botao precisa ficar desativado para evitar duplicidade: 
            <button type="button" id="Limpar">Limpar</button> */}
            

            <label>Data</label>
            <input type="date" id="Data" />

            <label>Hora</label>
            <input type="time" id="Tempo" required />

            <button type="button" id="compartilhar" onClick={compartilhar}>
            Compartilhar
          </button>
            <button id="Gerar-PDF" onClick={gerarPDF}>Gerar PDF</button>
            

          </div>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
