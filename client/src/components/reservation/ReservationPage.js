//ReservationPage.js
import React, { useState } from 'react';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle reservation details
    console.log(reservationDetails);
  };

  return (
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
  );
};

export default ReservationPage;

