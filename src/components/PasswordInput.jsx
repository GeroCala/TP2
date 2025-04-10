import { useState } from 'react'

function PasswordInput({ password, onPasswordChange }) {
  const [showPassword, setShowPassword] = useState(false)
  const [showCopyMessage, setShowCopyMessage] = useState(false)

  const handleCopyPassword = async () => {
    try {
      await navigator.clipboard.writeText(password)
      setShowCopyMessage(true)
      setTimeout(() => {
        setShowCopyMessage(false)
      }, 2000)
    } catch (err) {
      console.error('Failed to copy password:', err)
    }
  }

  return (
    <div className="password-input">
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => onPasswordChange(e.target.value)}
        placeholder="Enter your password"
      />
      <div className="button-group">
        <button onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide" : "Show"} Password
        </button>
        <button onClick={handleCopyPassword}>
          Copy Password
        </button>
      </div>
      {showCopyMessage && (
        <div className="copy-message">Password was copied!</div>
      )}
    </div>
  )
}

export default PasswordInput