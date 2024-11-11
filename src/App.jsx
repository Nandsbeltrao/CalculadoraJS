import React, { useState } from 'react';
import Boneca from './images/boneca.png';
import secreto from "./images/segredo.png";
import Body from "./Components/Body/Body";
import "./App.scss";

function App() {
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

  // Função para capturar o primeiro valor
  const primeiraCapturaValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
  };

  // Função para capturar o segundo valor
  const segundaCapturaValor = (e) => {
    setSegundoValor(Number(e.target.value));
  };

  // Função para soma
  const Soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  // Função para subtração
  const Subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };

  // Função para multiplicação
  const Multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
  };

  // Função para divisão
  const Divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };

  // Função para limpar
  const limpar = () => {
    setPrimeiroValor("");
    setSegundoValor("");
    setResultado("");
  };

  // Alternar imagem
  const [boneca, setBoneca] = useState(false);
  const trocaBoneca = () => {
    setBoneca(!boneca);
  };

  return (
    <>
      
      <Body />
      <main>

        <section className='primeirasessao'>
            <h1>Calculadora</h1>
        </section>

        <section className='buttons'>
            
            <div className="centralized-container">
              <figure className="image-container">
                <img
                  className="segundasessao"
                  src={boneca ? secreto : Boneca}
                  alt="Imagem alternável"
                  onClick={trocaBoneca}
                />
              </figure>
              <div className="button-container">
                <button onClick={limpar}>C</button>
                <button onClick={Soma}>{boneca ? "$" : "+"}</button>
                <button onClick={Subtracao}>{boneca ? "#" : "-"}</button>
                <button onClick={Multiplicacao}>{boneca ? "@" : "*"}</button>
                <button onClick={Divisao}>{boneca ? "&" : "/"}</button>
              </div>
            </div>

            <div className='input-container'>
              <input
                  placeholder="Insira um número"
                  value={primeiroValor || ""}
                  onChange={primeiraCapturaValor}
                />
                <input
                  placeholder="Insira um número"
                  value={segundoValor || ""}
                  onChange={segundaCapturaValor}
                />
            </div>
              
            <h2>{resultado}</h2>
              
          </section>

      </main>
      

    </>
  );
}

export default App;