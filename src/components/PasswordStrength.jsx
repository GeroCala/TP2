function PasswordStrength({ password }) {
  const checkStrength = (pwd) => {
    if (!pwd) return ''
    
    let score = 0
    // Check length
    if (pwd.length >= 8) score += 1
    if (pwd.length >= 12) score += 1
    
    // Check for numbers
    if (/\d/.test(pwd)) score += 1
    
    // Check for special characters
    if (/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) score += 1
    
    // Check for mixed case
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) score += 1

    if (score <= 2) return 'Poco segura'
    if (score <= 3) return 'Segura'
    return 'Muy segura'
  }

  const strengthClass = checkStrength(password).toLowerCase().replace(' ', '-')

  return (
    <div className="password-strength">
      {password && (
        <p className={strengthClass}>
          Fortaleza: {checkStrength(password)}
        </p>
      )}
    </div>
  )
}

export default PasswordStrength