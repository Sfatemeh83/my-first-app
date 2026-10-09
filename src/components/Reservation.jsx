import { useState } from 'react'

export default function Reservation() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    notes: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!form.email.trim()) e.email = 'Please enter your email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email'
    if (!form.date) e.date = 'Please select a date'
    if (!form.time) e.time = 'Please select a time'
    return e
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: undefined })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      setStatus({ type: 'error', msg: 'Please correct the highlighted fields.' })
      return
    }
    setStatus({
      type: 'success',
      msg: `Thank you, ${form.name}. Your reservation request has been received. We will confirm shortly.`,
    })
    setForm({ name: '', email: '', phone: '', date: '', time: '', guests: '2', notes: '' })
    setErrors({})
  }

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="reservation-inner">
          <div className="reservation-header reveal">
            <span className="eyebrow">BOOK YOUR TABLE</span>
            <h2 className="section-heading">Reserve Your <em>Experience</em></h2>
            <p className="section-subtext">
              Secure your table for an unforgettable evening. We look forward to
              welcoming you to Noir Gourmet.
            </p>
          </div>

          <form className="reservation-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                aria-invalid={!!errors.name}
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
              />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone (optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Your phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="guests">Guests</label>
              <select id="guests" name="guests" value={form.guests} onChange={handleChange}>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>
                <option value="7+">7+ Guests</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                aria-invalid={!!errors.date}
              />
              {errors.date && <span className="form-error">{errors.date}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input
                type="time"
                id="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                aria-invalid={!!errors.time}
              />
              {errors.time && <span className="form-error">{errors.time}</span>}
            </div>

            <div className="form-group full">
              <label htmlFor="notes">Special Requests (optional)</label>
              <textarea
                id="notes"
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows="3"
                placeholder="Dietary restrictions, seating preferences, occasions..."
              />
            </div>

            {status && (
              <div className={`form-message ${status.type}`} role="alert">
                {status.msg}
              </div>
            )}

            <button type="submit" className="btn btn-primary reservation-submit">
              Request Reservation
            </button>
        </form>
        </div>
      </div>
    </section>
  )
}
