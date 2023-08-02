//ReservationPage.js
import React, { useState } from 'react';
import Footer from '../footer/Footer';
import './ReservationPage.scss';  

const ReservationPage = () => {
  const [reservationDetails, setReservationDetails] = useState({
    name: '',
    phone: '',
    numberOfGuests: '',
    dateTime: '',
  });

  const handleInputChange = (e) => {
    setReservationDetails({
      ...reservationDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationDetails),
      });
      if (!response.ok) throw new Error('Response not OK');
      alert(`Reservation made successfully for ${reservationDetails.dateTime}`);
    } catch (error) {
      console.error('Failed to make reservation', error);
      alert('Reservation failed');
    }
  };

  return (
    <>
      <section className="reservation-section">
        <h2>Make a Reservation</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={reservationDetails.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={reservationDetails.phone}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Number of Guests:
            <input
              type="number"
              name="numberOfGuests"
              value={reservationDetails.numberOfGuests}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Date and Time:
            <input
              type="datetime-local"
              name="dateTime"
              value={reservationDetails.dateTime}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default ReservationPage;



