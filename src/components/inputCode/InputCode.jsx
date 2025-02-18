import './InputCode.css'
import { useState } from 'react';
import { Editor } from '@monaco-editor/react'

export const InputCode = ({ language, onCodeChange }) => {
  const [code, setCode] = useState("");

  const handleCodeChange = (newValue) => {
    setCode(newValue);
    onCodeChange(newValue); // Enviar el código en tiempo real a App.js
  }

  return (
    <div className='InputCode'>
     {/* Editor de código */}
      <Editor
        language={language}
        theme="vs-dark"
        value={code}
        onChange={handleCodeChange} // Detectar cambios en tiempo real
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          automaticLayout: true,
        }}
      />
    </div>
  )
}
