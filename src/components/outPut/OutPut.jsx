import './OutPut.css'

export const OutPut = ({ output }) => {
  const outputLines = output.split("\n"); // Convertir output en array de líneas
  const lineNumbers = outputLines.map((_, index) => index + 1); // Crear números de línea

  return (
    <div className='OutPut'>
      <div className="output-container">
        {/* Columna de números de línea */}
        <pre className="line-numbers">
          {lineNumbers.join("\n")}
        </pre>

        {/* Contenido del output */}
        <pre className="output-content">{output}</pre>
      </div>
    </div>
  );
};
