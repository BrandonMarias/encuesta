const textRespuesta = ["Excelent", "Good", "Bad", "Very Bad"];
const colorRespuesta = ["#4CAF50", "#FFEB3B", "#FF9800", "#F44336"];
export const Respuestas = ({ id, pregunta, respuesta, handleRespuesta }) => {
  return (
    <>
        <li key={id} className="mt-3">
            <p>{pregunta}</p>
        {
            [3,2,1,0].map((numero, index) => (
                <button
                    key={numero}
                    className={`m-1 btn ${numero === respuesta ? 'btn-primary' : 'btn-outline-primary'}`}
                    style={{ backgroundColor: numero === respuesta ? colorRespuesta[index] : '' }}
                    onClick={() => handleRespuesta(id, numero)}
                >
                    {textRespuesta[index]}
                </button>
            ))
        }
        </li>
    </>
  )
}
