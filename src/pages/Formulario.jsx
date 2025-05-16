import React, { useState } from "react";
import { gerarPDF } from '../scripts/Gerarpdf';
import Assinatura from "../scripts/Assinatura";
import {compartilhar} from '../scripts/LerEnviarDados';
import logoSonda from '../assets/images/logoSonda.png';
import logoDasa from '../assets/images/logoDasa.png';
import { FaMoon, FaSun } from 'react-icons/fa'; 


/* Primeiro teste em producao */
function Formulario({dados}) {
  const [modoNoturno, setModoNoturno] = useState(false);
  const alternarModo = () => {
    if(modoNoturno == false)
    {
      setModoNoturno(true)
      document.body.classList.add('Noturno');
    }
    else
    {
      setModoNoturno(false);
      document.body.classList.remove('Noturno');
    }
  };

  return (
    
    <div>
      <div className="container" id="conteudo-pdf">

        <button className="botaoNoturno" onClick={alternarModo}>
          {modoNoturno ? <FaSun color="#fff" size={20} /> : <FaMoon color="#000" size={20} />}
        </button>

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
            <input type="text" id="Unidade" required defaultValue={dados?.unidade}  />

            <label>
              Endereço <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Endereco" required defaultValue={dados?.endereco} />

            <label>
              Cidade <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Cidade" required defaultValue={dados?.cidade} />

            <label>
              Estado <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Estado" required defaultValue={dados?.estado} />

            <label>
              Setor <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Setor" required defaultValue={dados?.setor} />

            <label>
              Nome do colaborador/Solicitante <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Colaborador" required defaultValue={dados?.colaborador}/>

            <label>
              Telefone <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Telefone" maxLength={11}  defaultValue={dados?.telefone}/>
          </div>

          <p className="campo-field">Campo Técnico</p>
          <hr />

          <div className="Dados-Equipamento">
            <label>
              N° Chamado <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Chamado" required defaultValue={dados?.chamado} />

            <label>
              N° Patrimonio <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Patrimonio" required defaultValue={dados?.patrimonio} />

            <label>
              N° Serie <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Serial" required defaultValue={dados?.serial}/>

            <label>
              Marca <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Marca" required defaultValue={dados?.marca} />

            <label>
              Modelo <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Modelo" required defaultValue={dados?.modelo}/>

            <fieldset className="checkbox-tipo-atendimento">
              <legend>Tipo de Atendimento</legend>
              <label>
                <input type="checkbox" id="Field" name="Field" checked={dados?.field}/> Field
              </label>
              <label>
                <input type="checkbox" id="Remoto" name="Remoto" checked={dados?.remoto}/> Remoto
              </label>
              <label>
                <input type="checkbox" id="Projeto" name="Projeto" checked={dados?.projeto}/> Projeto
              </label>
            </fieldset>

            <fieldset className="tipo-equipamento">
              <legend>Tipo de Equipamento</legend>
              <label>
                <input type="checkbox" id="Notebook" name="Notebook" checked={dados?.notebook}/> Notebook
              </label>
              <label>
                <input type="checkbox" id="Desktop" name="Desktop" checked={dados?.desktop}/> Desktop
              </label>
              <label>
                <input type="checkbox" id="Monitor" name="Monitor" checked={dados?.monitor}/> Monitor
              </label>
            </fieldset>
          </div>

          <div className="Dados-Acao-Tecnico">
            <label htmlFor="tecnico">
              Nome do Técnico <span style={{ color: "red" }}>*</span>
            </label>
            <input list="lista-tecnicos" id="tecnico" name="tecnico" required defaultValue={dados?.tecnico}/>
            <datalist id="lista-tecnicos">
              <option value="Guilherme " />
              <option value="Fulano" />
              <option value="Ciclano" />
            </datalist>

            <label>
              Problema Relatado <span style={{ color: "red" }}>*</span>
            </label>

             <div className="textAreaProblema" id="Problema" contentEditable="true">
               {dados?.problemaRelatado}
             </div>
           
            <label>
              Ação Realizada <span style={{ color: "red" }}>*</span>
            </label>
            <div className="textAreaRealizado" id="Realizada" contentEditable="true">
              {dados?.realizadoRelatado}
            </div>

            <label>
              Assinatura Colaborador <span style={{ color: "red" }}>*</span>
            </label>
            <Assinatura id="Assinatura" defaultValue={dados?.assinatura}></Assinatura>
          
            <label>Data</label>
            <input type="date" id="Data" defaultValue={dados?.data} />

            <label>Hora</label>
            <input type="time" id="Tempo" defaultValue={dados?.hora}/>

            <button type="button" id="compartilhar" onClick={compartilhar}>
              Compartilhar
            </button>

            <button type="button" id="Gerar-PDF" onClick={gerarPDF}>
              Gerar PDF
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
