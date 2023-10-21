/* eslint-disable jsx-a11y/no-redundant-roles */
import { useState } from "react";
import "./App.css";

export function Form() {

   const [nome, setNome] = useState<string>('');
   const [cidade, setCidade] = useState<string>('');

    return (
        <div className="container">
             <form className="form" role="form">

                <label htmlFor="nome">Nome da Escola:</label>
                <input name="nome" placeholder="Nome" onChange={(e) => setNome(e.target.value)}/>

                <label htmlFor="cidade">Cidade:</label>
                <input name="cidade" placeholder="Cidade" onChange={(e) => setCidade(e.target.value)}/>

                <button type="submit" onClick={(e) => { e.preventDefault(); alert(`Escola ${nome} da cidade: ${cidade} cadastrada com sucesso!`)}}>
                  Criar
                </button>
             </form>
        </div>
      );
}


