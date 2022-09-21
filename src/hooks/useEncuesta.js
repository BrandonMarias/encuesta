import preguntasDB from "../data/preguntas.json";
import { useState } from "react";
const preguntas = preguntasDB.map(({ id, pregunta }) => {
    return {
        id,
        pregunta,
        respuesta: null,
    };
});

export const useEncuesta = () => {
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
        if (preguntasState.some(({ respuesta }) => respuesta === null)) {
            alert("Todas las preguntas deben ser respondidas");
            return;
        }
        console.log(preguntasState);
        alert("Gracias por responder la encuesta");
        setPreguntasState(preguntas);
    };

    return { preguntasState, handleRespuesta, handleSubmit };
};
