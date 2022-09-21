import { useState } from "react";
import preguntasDB from "../data/preguntas.json";
import { Respuestas } from "./Respuestas";

const preguntas = preguntasDB.map(({ id, pregunta }) => {
    return {
        id,
        pregunta,
        respuesta: null,
    };
});

export const Encuesta = () => {

    const [preguntasState, setPreguntasState] = useState(preguntas);

    const handleRespuesta = (id, respuesta) => {
        const newPreguntas = preguntasState.map((pregunta) => {
            if (pregunta.id === id) {
                return {
                    ...pregunta,
                    respuesta,
                };
            }
            return pregunta;
        });
        setPreguntasState(newPreguntas);
    };

    const handleSubmit = () => {
        if(preguntasState.some(({respuesta}) => respuesta === null)) {
            alert('Todas las preguntas deben ser respondidas');
            return;
        }
        console.log(preguntasState);
        alert('Gracias por responder la encuesta');
        setPreguntasState(preguntas);
    };

    return (
        <>
            <ol>
                {preguntasState.map((pregunta) => <Respuestas handleRespuesta={handleRespuesta} {...pregunta }/>)}
            </ol>
            <button
                className="btn btn-primary"
                onClick={() => handleSubmit()}
            >
                Enviar
            </button>
        </>
    );
};
