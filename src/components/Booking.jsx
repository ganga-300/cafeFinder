
import { useState } from "react"

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
      <div className="max-w-2xl mx-auto my-8 px-4 font-sans mt-24">
        <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl py-12 px-10 text-center shadow-2xl border border-green-100">
          <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center text-4xl text-white mx-auto mb-6 animate-pulse">✓</div>
          <h2 className="text-green-800 text-3xl mb-8 font-semibold">Booking Confirmed!</h2>
          <div className="bg-green-50 rounded-xl p-6 mb-8 text-left border border-green-200">
            <p>
              <strong className="text-green-800 font-semibold">Date:</strong> {new Date(formData.date).toLocaleDateString()}
            </p>
            <p>
              <strong className="text-green-800 font-semibold">Time:</strong> {timeSlots.find((slot) => slot.value === formData.time)?.label}
            </p>
            <p>
              <strong className="text-green-800 font-semibold">Guests:</strong> {formData.guests} people
            </p>
            <p>
              <strong className="text-green-800 font-semibold">Name:</strong> {formData.name}
            </p>
            <p>
              <strong className="text-green-800 font-semibold">Phone:</strong> {formData.phone}
            </p>
            {formData.tablePreference && (
              <p>
                <strong className="text-green-800 font-semibold">Table:</strong> {formData.tablePreference}
              </p>
            )}
            {formData.specialRequests && (
              <p>
                <strong className="text-green-800 font-semibold">Special Requests:</strong> {formData.specialRequests}
              </p>
            )}
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={addToCalendar} className="py-3 px-6 rounded-xl text-base font-medium cursor-pointer transition-all duration-300 border-none bg-gradient-to-br from-green-600 to-green-800 text-white hover:-translate-y-1 hover:shadow-lg">
              📅 Add to Calendar
            </button>
            <button onClick={resetForm} className="py-3 px-6 rounded-xl text-base font-medium cursor-pointer transition-all duration-300 bg-white text-green-800 border-2 border-green-200 hover:-translate-y-1 hover:shadow-lg">
              New Booking
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto my-8 px-4 font-sans mt-24">
      <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl py-10 px-10 shadow-2xl border border-green-100">
        <div className="text-center mb-8">
          <h2 className="text-green-800 text-3xl font-semibold mb-2 tracking-tight">Reserve Your Table</h2>
          <p className="text-green-700 text-base m-0">Book your perfect spot for a delightful coffee experience</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="date" className="text-green-800 font-medium mb-2 text-sm">Select Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                min={new Date().toISOString().split("T")[0]}
                className={`py-3 px-4 border-2 ${errors.date ? 'border-red-500 bg-red-50' : 'border-green-200'} rounded-xl text-base transition-all duration-300 bg-gray-50 text-gray-800 focus:outline-none focus:border-green-600 focus:shadow-lg focus:bg-white`}
              />
              {errors.date && <span className="text-red-500 text-xs mt-1">{errors.date}</span>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="time" className="text-green-800 font-medium mb-2 text-sm">Select Time</label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className={`py-3 px-4 border-2 ${errors.time ? 'border-red-500 bg-red-50' : 'border-green-200'} rounded-xl text-base transition-all duration-300 bg-gray-50 text-gray-800 focus:outline-none focus:border-green-600 focus:shadow-lg focus:bg-white`}
              >
                <option value="">Choose time</option>
                {timeSlots.map((slot) => (
                  <option key={slot.value} value={slot.value}>
                    {slot.label}
                  </option>
                ))}
              </select>
              {errors.time && <span className="text-red-500 text-xs mt-1">{errors.time}</span>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="guests" className="text-green-800 font-medium mb-2 text-sm">Number of Guests</label>
              <select id="guests" name="guests" value={formData.guests} onChange={handleInputChange} className="py-3 px-4 border-2 border-green-200 rounded-xl text-base transition-all duration-300 bg-gray-50 text-gray-800 focus:outline-none focus:border-green-600 focus:shadow-lg focus:bg-white">
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} {i === 0 ? "person" : "people"}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="tablePreference" className="text-green-800 font-medium mb-2 text-sm">Table Preference</label>
              <select
                id="tablePreference"
                name="tablePreference"
                value={formData.tablePreference}
                onChange={handleInputChange}
                className="py-3 px-4 border-2 border-green-200 rounded-xl text-base transition-all duration-300 bg-gray-50 text-gray-800 focus:outline-none focus:border-green-600 focus:shadow-lg focus:bg-white"
              >
                <option value="">No preference</option>
                <option value="Indoor">Indoor</option>
                <option value="Outdoor">Outdoor</option>
                <option value="Near window">Near window</option>
                <option value="AC room">AC room</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-green-800 font-medium mb-2 text-sm">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className={`py-3 px-4 border-2 ${errors.name ? 'border-red-500 bg-red-50' : 'border-green-200'} rounded-xl text-base transition-all duration-300 bg-gray-50 text-gray-800 placeholder-green-400 focus:outline-none focus:border-green-600 focus:shadow-lg focus:bg-white`}
              />
              {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name}</span>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="text-green-800 font-medium mb-2 text-sm">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone"
                className={`py-3 px-4 border-2 ${errors.phone ? 'border-red-500 bg-red-50' : 'border-green-200'} rounded-xl text-base transition-all duration-300 bg-gray-50 text-gray-800 placeholder-green-400 focus:outline-none focus:border-green-600 focus:shadow-lg focus:bg-white`}
              />
              {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone}</span>}
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-green-800 font-medium mb-2 text-sm">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className={`py-3 px-4 border-2 ${errors.email ? 'border-red-500 bg-red-50' : 'border-green-200'} rounded-xl text-base transition-all duration-300 bg-gray-50 text-gray-800 placeholder-green-400 focus:outline-none focus:border-green-600 focus:shadow-lg focus:bg-white`}
            />
            {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="specialRequests" className="text-green-800 font-medium mb-2 text-sm">Special Requests</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleInputChange}
              placeholder="Any special requests? (e.g., Need baby chair, Celebrating birthday, etc.)"
              rows="3"
              className="py-3 px-4 border-2 border-green-200 rounded-xl text-base transition-all duration-300 bg-gray-50 text-gray-800 placeholder-green-400 focus:outline-none focus:border-green-600 focus:shadow-lg focus:bg-white"
            />
          </div>

          <button type="submit" className="bg-gradient-to-br from-green-600 to-green-800 text-white border-none py-4 px-8 rounded-xl text-lg font-semibold cursor-pointer transition-all duration-300 mt-4 tracking-wide hover:-translate-y-1 hover:shadow-2xl active:translate-y-0">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  )
}

export default Booking
