import React, { useState } from "react"

export default function CardNumberInput({
  onCardNumberChange,
  cardNumber,
  onCardNumberError,
}) {
  const [error, setError] = useState("")

  const handleCardNumberChange = (e) => {
    const input = e.target.value.replace(/(\d{4})(?=\d)/g, "$1 ")
    onCardNumberChange(input)
    setError("")
  }

  const validateCardNumber = () => {
    if (!cardNumber.trim()) {
      return "This is an important field"
    } else if (!/^[0-9 ]+$/.test(cardNumber)) {
      return "Wrong format, use numerical"
    } else if (cardNumber.length < 12) {
      return "Too Short!"
    }
  }

  const handleBlur = () => {
    const errorMessage = validateCardNumber()
    setError(errorMessage)
    onCardNumberError(errorMessage)
  }

  return (
    <div className="d-flex flex-column mb-3 gap-2">
      <label className="labelForm mb-1">CARD NUMBER</label>
      <input
        className="fieldBox"
        type="text"
        pattern="[0-9 ]{12,19}"
        id="number"
        name="number"
        placeholder="123 5678 1234 5678"
        maxLength="19"
        value={cardNumber}
        onChange={handleCardNumberChange}
        onBlur={handleBlur}
      />
      {error && <span className="error">{error}</span>}
    </div>
  )
}
