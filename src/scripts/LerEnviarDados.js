// src/scripts/firebase-form.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const compartilhar = async () => {
  try {
    const unidade = document.getElementById("Unidade").value;
    const endereco = document.getElementById("Endereco").value;
    const cidade = document.getElementById("Cidade").value;
    const estado = document.getElementById("Estado").value;
    const setor = document.getElementById("Setor").value;
    const colaborador = document.getElementById("Colaborador").value;
    const telefone = document.getElementById("Telefone").value;
    const chamado = document.getElementById("Chamado").value;
    const patrimonio = document.getElementById("Patrimonio").value;
    const serial = document.getElementById("Serial").value;
    const marca = document.getElementById("Marca").value;
    const modelo = document.getElementById("Modelo").value;
    const field = document.getElementById("Field").checked;
    const remoto = document.getElementById("Remoto").checked;
    const projeto = document.getElementById("Projeto").checked;
    const notebook = document.getElementById("Notebook").checked;
    const desktop = document.getElementById("Desktop").checked;
    const monitor = document.getElementById("Monitor").checked;
    const tecnico = document.getElementById("tecnico").value;
    const problemaRelatado = document.getElementById("Problema").innerText; /* Alterei para inner mas ainda continua com erro */
    const realizadoRelatado = document.getElementById("Realizada").value;
    const assinaturaCanvas = document.getElementById("Assinatura");
    const assinatura = assinaturaCanvas.toDataURL(); //Jeito certo de pegar o valor da assinatura
    const data = document.getElementById("Data").value;
    const hora = document.getElementById("Tempo").value;

    const docRef = await addDoc(collection(db, "rat"), {
      unidade,
      endereco,
      cidade,
      estado,
      setor,
      colaborador,
      telefone,
      chamado,
      patrimonio,
      serial,
      marca,
      modelo,
      field,
      remoto,
      projeto,
      notebook,
      desktop,
      monitor,
      tecnico,
      problemaRelatado,
      realizadoRelatado,
      assinatura,
      data,
      hora
    });
    
    const link = `${window.location.origin}${window.location.pathname}?id=${docRef.id}`; 
    await navigator.clipboard.writeText(link);
    alert(`Dados salvos com sucesso!\nO link foi copiado para a área de transferência:\n${link}`);

  } catch (e) {
    console.error("Erro ao salvar: ", e);
    alert("Erro ao salvar no Firebase. Tente novamente daqui alguns segundos.");
  }
};