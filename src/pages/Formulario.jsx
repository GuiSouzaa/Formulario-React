import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig"; 
import { gerarPDF } from '../scripts/Gerarpdf';
import Assinatura from "../scripts/Assinatura";
import {compartilhar} from '../scripts/LerEnviarDados';
import logoSonda from '../assets/images/logoSonda.png';
import logoDasa from '../assets/images/logoDasaNew.png';
import { FaMoon, FaSun } from 'react-icons/fa'; 


function Formulario({dados}) {
  const [modoNoturno, setModoNoturno] = useState(false);
  const [dataCriacao, setDataCriacao] = useState(null);
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

  /* Definir a data e hora automaticamente */ 
   const handleInputChange = () => {
    if (!dataCriacao) {
      const agora = new Date();
      setDataCriacao(agora);
    }
  };
  useEffect(() => {
  const carregarDataSalva = async () => {
    const id = new URLSearchParams(window.location.search).get("id");
    if (id) {
      const docRef = doc(db, "rat", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const dados = docSnap.data();
        if (dados.data && dados.hora) {
          const dataHora = new Date(`${dados.data}T${dados.hora}`);
          setDataCriacao(dataHora);
        }
      }
    }
  };

  carregarDataSalva();
}, []);
  


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
            <input type="text" id="Unidade" required defaultValue={dados?.unidade} onChange={handleInputChange}  />

            <label>
              Endereço <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Endereco" required defaultValue={dados?.endereco} onChange={handleInputChange} />

            <label>
              Cidade <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Cidade" required defaultValue={dados?.cidade}   onChange={handleInputChange}/>

            <label>
              Estado <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Estado" required defaultValue={dados?.estado}   onChange={handleInputChange}/>

            <label>
              Setor <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Setor" required defaultValue={dados?.setor}   onChange={handleInputChange}/>

            <label>
              Centro de custo <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="CentroCusto" required defaultValue={dados?.centroCusto}   onChange={handleInputChange}/>

            <label>
              Nome do colaborador/Solicitante <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Colaborador" required defaultValue={dados?.colaborador}  onChange={handleInputChange}/>

            <label>
              Telefone <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Telefone" maxLength={11}  defaultValue={dados?.telefone}  onChange={handleInputChange}/>
          </div>

          <p className="campo-field">Campo Técnico</p>
          <hr/>

          <div className="Dados-Equipamento">
            <label>
              N° Chamado <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Chamado" required defaultValue={dados?.chamado}   onChange={handleInputChange}/>

            <label>
              N° Patrimonio <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Patrimonio" required defaultValue={dados?.patrimonio}   onChange={handleInputChange}/>

            <label>
              N° Serie <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Serial" required defaultValue={dados?.serial}  onChange={handleInputChange}/>

            <label>
              Marca <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Marca" required defaultValue={dados?.marca}   onChange={handleInputChange}/>

            <label>
              Modelo <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="Modelo" required defaultValue={dados?.modelo}  onChange={handleInputChange}/>

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
              <label>
                <input type="checkbox" id="Etiquetadora" name="Etiquetadora" checked={dados?.etiquetadora}/> Etiquetadora
              </label>
              <label>
                <input type="checkbox" id="Impressora" name="Impressora" checked={dados?.impressora} /> Impressora
              </label>
              <label>
                <input type="checkbox" id="Outros" name="Outros" checked={dados?.outros} /> Outros
              </label>
            </fieldset>
          </div>

          <div className="Dados-Acao-Tecnico">
            <label htmlFor="tecnico">
              Nome do Técnico <span style={{ color: "red" }}>*</span>
            </label>
            <input list="lista-tecnicos" id="tecnico" name="tecnico" required defaultValue={dados?.tecnico}  onChange={handleInputChange}/>
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
              Nome do assinante <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" id="NomeAssinante" required defaultValue={dados?.nomeAssinante}  onChange={handleInputChange}/>

            <label>
              Assinatura Colaborador <span style={{ color: "red" }}>*</span>
            </label>
            <Assinatura id="Assinatura" defaultValue={dados?.assinatura}></Assinatura>
          
            <label>Data</label>
              <input type="date" id="Data" value={dataCriacao ? dataCriacao.toISOString().split('T')[0] : ''} readOnly />

            <label>Hora</label>
              <input type="time" id="Tempo" value={dataCriacao ? dataCriacao.toTimeString().slice(0, 5) : ''} readOnly />

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
