function PasswordStrength({ password }) {
  const checkStrength = (pwd) => {
    if (!pwd) return ''
    
    let score = 0
    // Check length
    if (pwd.length >= 6) score += 1
    if (pwd.length >= 9) score += 1
    
    // Check for numbers
    if (/\d/.test(pwd)) score += 1
    
    // Check for special characters
    if (/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) score += 1
    
    // Check for mixed case
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) score += 1

    if (score <= 2) return 'Not Safe'
    if (score <= 3) return 'Safe'
    return 'Very Safe'
  }

  const strengthClass = checkStrength(password).toLowerCase().replace(' ', '-')

  return (
    <div className="password-strength">
      {password && (
        <p className={strengthClass}>
          State: {checkStrength(password)}
        </p>
      )}
    </div>
  )
}

export default PasswordStrength