import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { db } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Formulario from "../pages/Formulario"; 

function ExibirDados() {
  const [searchParams] = useSearchParams();
  const [dados, setDados] = useState(null);

  const id = searchParams.get("id");

  useEffect(() => {
    const buscarDados = async () => {
      if (!id) return;
      try {
        const docRef = doc(db, "rat", id); // Nome da minha tabela que se chama 'rat'
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setDados(docSnap.data());
        } else {
          console.log("Documento não encontrado.");
        }
      } catch (erro) {
        console.error("Erro ao buscar documento:", erro);
      } 
    };

    buscarDados();
  }, [id]);


  return (
    <div>
      
      <Formulario dados={dados} />
    </div>
  );
}

export default ExibirDados;
