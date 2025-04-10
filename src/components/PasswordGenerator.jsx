function PasswordGenerator({ onSelectPassword }) {
  const generatePassword = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*'
    const length = 9
    let password = ''
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    onSelectPassword(password)
  }

  return (
    <div className="password-generator">
      <button onClick={generatePassword}>
        Generate Strong Password
      </button>
    </div>
  )
}

export default PasswordGenerator