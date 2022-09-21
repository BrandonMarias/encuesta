import React from 'react'

export const Respuestas = ({ id, pregunta, respuesta, handleRespuesta }) => {
  return (
    <>
        <li key={id} className="mt-3">
            <p>{pregunta}</p>
        {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((numero) => (
                <button
                    key={numero}
                    className={`m-1 btn ${numero === respuesta ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => handleRespuesta(id, numero)}
                >
                    {numero}
                </button>
            ))
        }
        </li>
    </>
  )
}
