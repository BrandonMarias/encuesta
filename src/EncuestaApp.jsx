import { Encuesta } from "./components/Encuesta";

export const EncuestaApp = () => {
    return (
        <div className="container my-3">
            <h1>EncuestaApp</h1>
            <hr />
            <h3>De 1 al 10 describe tus gustos</h3>
            <br />
            <Encuesta />
        </div>
    );
};
