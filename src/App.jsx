import { useState } from 'react';

export default function App() {

  const [ativo, setAtivo] = useState(false);
  const alternarInterruptor = () => {
    setAtivo((prevAtivo) => !prevAtivo);
  };

  return (
    <div className="container">
      <h1>Interruptor Simples</h1>

      <button
        onClick={alternarInterruptor}
        className={`btn-interruptor ${ativo ? 'ativo' : 'inativo'}`}>
        {ativo ? 'ON' : 'OFF'}
      </button>
      
      <p className="status-texto">
        O interruptor está: <strong>{ativo ? 'LIGADO' : 'DESLIGADO'}</strong>
      </p>

    </div>
  );
}