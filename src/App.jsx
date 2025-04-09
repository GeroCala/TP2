import { useState } from 'react'
import './App.css'
import PasswordInput from './components/PasswordInput'
import PasswordStrength from './components/PasswordStrength'
import PasswordGenerator from './components/PasswordGenerator'

function App() {
  const [password, setPassword] = useState('')

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword)
  }

  return (
    <div className="password-checker">
      <h1>Password Strength Checker</h1>
      <PasswordInput 
        password={password} 
        onPasswordChange={handlePasswordChange}
      />
      <PasswordStrength password={password} />
      <PasswordGenerator onSelectPassword={handlePasswordChange} />
    </div>
  )
}

export default App
