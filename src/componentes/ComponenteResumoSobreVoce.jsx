import { useEffect } from "react";

function ComponenteResumoSobreVoce(props) {

  useEffect(() => {

    alert("Olá, Esse é o resumo sobre mim: )")
    
    }, []);
    
// useEffect é um hook que serve para executar efeitos colaterais em componentes funcionais
// Observação: o [] está vazio, isso significa que o useEffect será executado apenas uma vez, quando o componente for montado

  return (
    <div>
      <h2>Resumo</h2>
      {/* usado para mudar o componente, não ser o mesmo sempre */}
      <p>{props.children}</p>
    </div>
  );
}

export { ComponenteResumoSobreVoce };