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
    // ... restante dos campos ...

    const docRef = await addDoc(collection(db, "rat"), {
      unidade,
      endereco,
      cidade
      // ... restante dos dados ...
    });

    const link = `${window.location.origin}${window.location.pathname}?id=${docRef.id}`; /* Gerador de id */
    await navigator.clipboard.writeText(link);
    alert(`Dados salvos com sucesso!\nO link foi copiado para a área de transferência:\n${link}`);

  } catch (e) {
    console.error("Erro ao salvar: ", e);
    alert("Erro ao salvar no Firebase. Tente novamente daqui alguns segundos.");
  }
};