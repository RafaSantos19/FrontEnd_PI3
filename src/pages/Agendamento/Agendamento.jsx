import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';

function Agendamento() {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/calendar/get-events');
        setEvents(response.data);
        console.log(response)
      } catch (error) {
        console.error('Erro ao buscar eventos:', error);
      }
    };
    fetchEvents();
  }, []);

  // useEffect(() => {
  //   const eventsOnSelectedDate = events.filter(event => {
  //     const eventDate = new Date(event.start.dateTime).toDateString();
  //     return eventDate === selectedDate.toDateString();
  //   });
  //   setFilteredEvents(eventsOnSelectedDate);
  // }, [selectedDate, events]);

  return (
    <div>
      <h1>Eventos Agendados</h1>
      <Calendar onChange={setSelectedDate} value={selectedDate} />
      <h2>Eventos para {selectedDate.toDateString()}</h2>
      <div>
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <button
              key={event.id}
              onClick={() => alert(`Evento selecionado: ${event.summary}`)}
            >
              {event.summary} - {new Date(event.start.dateTime).toLocaleTimeString()}
            </button>
          ))
        ) : (
          <p>Sem eventos para esta data</p>
        )}
      </div>
    </div>
  );
}

export default Agendamento;
