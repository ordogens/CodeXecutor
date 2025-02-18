import "./OutPut.css";

export const OutPut = ({ output }) => {
  // Convertir output en array de líneas y filtrar líneas vacías
  const outputLines = output.split("\n").filter((line) => line.trim() !== "");

  // Crear números de línea solo para las líneas no vacías
  const lineNumbers = outputLines.map((_, index) => index + 1);

  return (
    <div className="OutPut">
      {output && output.trim() !== "" && ( // Verificar si output no está vacío
        <div className="output-container">
          {/* Columna de números de línea */}
          <div className="line-numbers-column">
            {lineNumbers.map((lineNumber, index) => (
              <div key={index} className="line-number">
                {lineNumber}
              </div>
            ))}
          </div>

          {/* Contenido del output */}
          <pre className="output-content">
            {outputLines.join("\n")} {/* Unir las líneas no vacías */}
          </pre>
        </div>
      )}
    </div>
  );
};