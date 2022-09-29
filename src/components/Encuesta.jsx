import { useEncuesta } from "../hooks/useEncuesta";
import { Respuestas } from "./Respuestas";

export const Encuesta = () => {

    const { handleRespuesta, handleSubmit, preguntasState } =
        useEncuesta();

    return (
        <>
            <ol>
                {preguntasState.map((pregunta) => (
                    <Respuestas
                        handleRespuesta={handleRespuesta}
                        {...pregunta}
                    />
                ))}
            </ol>
            <button className="btn btn-primary" onClick={() => handleSubmit()}>
                Enviar
            </button>
        </>
    );
};
