import { useState } from "react";
import "./App.css";


export function Form() {

   const [nome, setNome] = useState<string>('');
   const [cidade, setCidade] = useState<string>('');

    return (
        <div className="container">
             <form className="form">
                <label htmlFor="nome">Nome da Escola:</label>
                <input 
                name="nome"
                onChange={(e) => setNome(e.target.value)}
                />

                <label htmlFor="cidade">Cidade:</label>
                <input
                 name="cidade"
                 onChange={(e) => setCidade(e.target.value)}
                 />

                <button onClick={(e) => {
                    e.preventDefault();
                    alert(`Escola ${nome} da cidade: ${cidade} cadastrada com sucesso!`)
                }} type="submit">Criar</button>
             </form>
        </div>
      );
}


