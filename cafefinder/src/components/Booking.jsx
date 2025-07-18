
import { useState } from "react"
import "./Booking.css"

const Booking = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 2,
    tablePreference: "",
    name: "",
    phone: "",
    email: "",
    specialRequests: "",
  })

  const [showConfirmation, setShowConfirmation] = useState(false)
  const [errors, setErrors] = useState({})


  const generateTimeSlots = () => {
    const slots = []
    for (let hour = 10; hour <= 22; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time24 = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
        const hour12 = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour
        const ampm = hour >= 12 ? "PM" : "AM"
        const time12 = `${hour12}:${minute.toString().padStart(2, "0")} ${ampm}`
        slots.push({ value: time24, label: time12 })
      }
    }
    return slots
  }

  const timeSlots = generateTimeSlots()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.date) newErrors.date = "Please select a date"
    if (!formData.time) newErrors.time = "Please select a time"
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"

  
    const selectedDate = new Date(formData.date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (selectedDate < today) {
      newErrors.date = "Please select a future date"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      setShowConfirmation(true)
    }
  }

  const addToCalendar = () => {
    const startDate = new Date(`${formData.date}T${formData.time}`)
    const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000) 

    const event = {
      title: "Coffee Shop Table Booking",
      start: startDate.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z",
      end: endDate.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z",
      details: `Table for ${formData.guests} people${formData.tablePreference ? ` - ${formData.tablePreference}` : ""}${formData.specialRequests ? ` - ${formData.specialRequests}` : ""}`,
    }

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&details=${encodeURIComponent(event.details)}`
    window.open(googleCalendarUrl, "_blank")
  }

  const resetForm = () => {
    setFormData({
      date: "",
      time: "",
      guests: 2,
      tablePreference: "",
      name: "",
      phone: "",
      email: "",
      specialRequests: "",
    })
    setShowConfirmation(false)
    setErrors({})
  }

  if (showConfirmation) {
    return (
      <div className="booking-container">
        <div className="confirmation-card">
          <div className="confirmation-icon">✓</div>
          <h2>Booking Confirmed!</h2>
          <div className="booking-details">
            <p>
              <strong>Date:</strong> {new Date(formData.date).toLocaleDateString()}
            </p>
            <p>
              <strong>Time:</strong> {timeSlots.find((slot) => slot.value === formData.time)?.label}
            </p>
            <p>
              <strong>Guests:</strong> {formData.guests} people
            </p>
            <p>
              <strong>Name:</strong> {formData.name}
            </p>
            <p>
              <strong>Phone:</strong> {formData.phone}
            </p>
            {formData.tablePreference && (
              <p>
                <strong>Table:</strong> {formData.tablePreference}
              </p>
            )}
            {formData.specialRequests && (
              <p>
                <strong>Special Requests:</strong> {formData.specialRequests}
              </p>
            )}
          </div>
          <div className="confirmation-actions">
            <button onClick={addToCalendar} className="calendar-btn">
              📅 Add to Calendar
            </button>
            <button onClick={resetForm} className="new-booking-btn">
              New Booking
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="booking-container">
      <div className="booking-card">
        <div className="booking-header">
          <h2>Reserve Your Table</h2>
          <p>Book your perfect spot for a delightful coffee experience</p>
        </div>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Select Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                min={new Date().toISOString().split("T")[0]}
                className={errors.date ? "error" : ""}
              />
              {errors.date && <span className="error-text">{errors.date}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="time">Select Time</label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className={errors.time ? "error" : ""}
              >
                <option value="">Choose time</option>
                {timeSlots.map((slot) => (
                  <option key={slot.value} value={slot.value}>
                    {slot.label}
                  </option>
                ))}
              </select>
              {errors.time && <span className="error-text">{errors.time}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="guests">Number of Guests</label>
              <select id="guests" name="guests" value={formData.guests} onChange={handleInputChange}>
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} {i === 0 ? "person" : "people"}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="tablePreference">Table Preference</label>
              <select
                id="tablePreference"
                name="tablePreference"
                value={formData.tablePreference}
                onChange={handleInputChange}
              >
                <option value="">No preference</option>
                <option value="Indoor">Indoor</option>
                <option value="Outdoor">Outdoor</option>
                <option value="Near window">Near window</option>
                <option value="AC room">AC room</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className={errors.name ? "error" : ""}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone"
                className={errors.phone ? "error" : ""}
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group full-width">
            <label htmlFor="specialRequests">Special Requests</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleInputChange}
              placeholder="Any special requests? (e.g., Need baby chair, Celebrating birthday, etc.)"
              rows="3"
            />
          </div>

          <button type="submit" className="confirm-btn">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  )
}

export default Booking
