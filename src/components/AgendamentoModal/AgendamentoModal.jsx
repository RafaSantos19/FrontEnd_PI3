import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'; // Importando Axios
import './AgendamentoModal.css';

function AgendamentoModal({ onClose }) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');
    const [service, setService] = useState('servico1');
    const [occupiedTimes, setOccupiedTimes] = useState([]);

    // Função para buscar horários ocupados
    const handleDateChange = async (date) => {
        setSelectedDate(date);

        try {
            const formattedDate = date.toISOString().split('T')[0]; // Formatar a data para YYYY-MM-DD
            const response = await fetch(`http://localhost:8080/calendar/list-by-date?date=${formattedDate}`);

            if (response.ok) {
                const events = await response.json();

                const times = events.map((event) => {
                    const start = new Date(event.start.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                    const end = new Date(event.end.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                    return `${start} - ${end}`;
                });

                setOccupiedTimes(times);
            } else {
                console.error('Erro ao buscar horários ocupados');
            }
        } catch (error) {
            console.error('Erro ao buscar horários ocupados:', error);
        }
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
    };

    const handleAgendar = async () => {
        try {
            const event = {
                email: sessionStorage.getItem('userEmail'),
                summary: service === 'servico1' ? 'Brow Lamination' : 'Dermaplaning',
                location: 'Local do Serviço',
                description: `${sessionStorage.getItem('userName')} Telefone: ${sessionStorage.getItem('userPhone')} `,
                startDateTime: `${selectedDate.toISOString().split('T')[0]}T${selectedTime}:00-03:00`,
                endDateTime: `${selectedDate.toISOString().split('T')[0]}T${selectedTime}:30-03:00`,
            };
            const token = localStorage.getItem("authToken");
            const response = await fetch('http://localhost:8080/calendar/create-events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(event)
            });

            if (response.ok) {
                const data = await response.json();
                toast.success(`Evento criado com sucesso!`, { theme: 'colored', autoClose: 6000 });
                setShowAgendamentoModal(false);
            } else if (!token) {
                toast.error("Usuário não autenticado", { theme: 'colored', autoClose: 6000 });
                window.location.href = "/login"
            } else if (response.status === 409) {
                toast.error('Horário ocupado, tente agendar em outro horário.', { theme: 'colored', autoClose: 6000 });
            }
            window.location.reload()
        } catch (error) {
            console.error('Erro ao criar evento:', error);
        }
    };

    return (
        <div className="modal_agendamento">
            <div className="modal-content_agendamento">
                <h2>Agendar um Horário</h2>
                <div className="modal-form_agendamento">
                    <label>Serviço</label>
                    <br />
                    <select value={service} onChange={(e) => setService(e.target.value)}>
                        <option value="servico1">Brow Lamination</option>
                        <option value="servico2">Dermaplaning</option>
                    </select>

                    <br />
                    <br />

                    <label>Data</label>
                    <Calendar
                        className="calendar-agendamento"
                        onChange={handleDateChange}
                        value={selectedDate}
                        tileDisabled={({ date }) => date < new Date().setHours(0, 0, 0, 0)}
                    />

                    <br />

                    {occupiedTimes.length > 0 ? (
                        <div>
                            <label>Horários Ocupados</label>
                            <ul className="occupied-times-list">
                                {occupiedTimes.map((time, index) => (
                                    <li key={index}>{time}</li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <p>Não há horários ocupados neste dia.</p>
                    )}

                    <br />
                    <label>Selecione um horário</label>
                    <br />
                    <input type="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} />
                </div>
                <br />
                <br />
                <center>
                    <button className="button-agendamento" onClick={handleAgendar}>
                        Agendar
                    </button>
                    <button className="button-agendamento" onClick={onClose}>
                        Cancelar
                    </button>
                </center>
            </div>
            <ToastContainer />
        </div>
    );
}

export default AgendamentoModal;
