import { useState } from 'react'

function PasswordInput({ password, onPasswordChange }) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="password-input">
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => onPasswordChange(e.target.value)}
        placeholder="Enter your password"
      />
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide" : "Show"} Password
      </button>
    </div>
  )
}

export default PasswordInput