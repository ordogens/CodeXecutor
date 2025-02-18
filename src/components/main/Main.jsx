import { useState, useEffect } from "react";
import { InputCode } from '../inputCode/InputCode';
import '../main/Main.css';
import { OutPut } from '../outPut/OutPut';

export const Main = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    const runCode = () => {
      let capturedOutput = ""; // Variable para almacenar la salida

      // Interceptar console.log()
      const originalConsoleLog = console.log;
      console.log = (...args) => {
        capturedOutput += args.join(" ") + "\n";
        originalConsoleLog(...args); // Mantener la funcionalidad original
      };

      try {
        eval(code); // Ejecutar el código
      } catch (error) {
        capturedOutput += `Error: ${error.message}`;
      }

      // Restaurar console.log y actualizar el estado
      console.log = originalConsoleLog;
      setOutput(capturedOutput);
    };

    runCode();
  }, [code]); // Ejecutar cada vez que el código cambia

  return (
    <div className='Main'>
      <InputCode language="javascript" onCodeChange={setCode} />
      <OutPut output={output} />
    </div>
  );
};
