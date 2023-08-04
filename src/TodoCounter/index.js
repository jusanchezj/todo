import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (

    total===completed?
    <h1 className='TodoCounter'>Felicidades, no tienes pendientes </h1>
    
    :<h1>
      Has completado <span className="spamNumber">{completed}</span> de <span className="spamNumber">{total}</span> TODOs
    </h1>
  );
}

export { TodoCounter };