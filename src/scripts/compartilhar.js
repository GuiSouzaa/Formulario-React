/* import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// Config do Firebase "Precisa ter nos dois arquivos que compartilham"
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

async function preencherFormulario() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (!id) return;

  try {
    const docRef = doc(db, "rat", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const dados = docSnap.data();

      // Preenche os campos do formulário com os dados do Firebase
      document.getElementById("Unidade").value = dados.unidade || "";
      document.getElementById("Endereço").value = dados.endereco || "";
      document.getElementById("Cidade").value = dados.cidade || "";
      document.getElementById("Estado").value = dados.estado || "";
      document.getElementById("Setor").value = dados.setor || "";
      document.getElementById("Colaborador").value = dados.colaborador || "";
      document.getElementById("Telefone").value = dados.telefone || "";
      document.getElementById("Chamado").value = dados.chamado || "";
      document.getElementById("Patrimonio").value = dados.patrimonio || "";
      document.getElementById("Serial").value = dados.serial || "";
      document.getElementById("Marca").value = dados.marca || "";
      document.getElementById("Modelo").value = dados.modelo || "";
      document.getElementById("tecnico").value = dados.tecnico || "";
      document.getElementById("Problema").value = dados.problema || "";
      document.getElementById("Realizada").value = dados.realizada || "";
      document.getElementById("Data").value = dados.data || "";
      document.getElementById("Tempo").value = dados.hora || "";
    } else {
      alert("Documento não encontrado no Firebase.");
    }
  } catch (e) {
    console.error("Erro ao carregar dados:", e);
  }
}

document.addEventListener("DOMContentLoaded", preencherFormulario);



 */