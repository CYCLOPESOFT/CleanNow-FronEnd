import React from 'react';
import Login from './Auth/Login';
import Registro from './Auth/Registro'
import RecoveryPassword from './Auth/RecoveryPassword'
export default function App() {
  return (
    <div className="flex flex-wrap gap-2">
      {<Registro />}

    </div>

  )
}


