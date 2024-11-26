import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './AgendamentoModal.css';

function AgendamentoModal({ onClose }) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');
    const [service, setService] = useState('placeholder');
    const [occupiedTimes, setOccupiedTimes] = useState([]);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false); // Controle do modal de confirmação

    const services = [
        { value: 'placeholder', label: 'Selecione um serviço...', duration: 0 }, // Placeholder sem duração
        { value: 'dermaplaning', label: 'Dermaplaning', duration: 30 }, // 30 minutos
        { value: 'slim_brows', label: 'Slim Brows', duration: 60 }, // 1 hora
        { value: 'soft_shadow', label: 'Soft Shadow', duration: 90 }, // 1 hora e meia
        { value: 'lash_lifting', label: 'Lash Lifting', duration: 60 }, // 1 hora
        { value: 'brow_lamination', label: 'Brow Lamination', duration: 30 }, // 30 minutos
        { value: 'design_color', label: 'Design Personalizado com Coloração', duration: 90 }, // 1 hora e meia
        { value: 'design_henna', label: 'Design Personalizado com Henna', duration: 60 }, // 1 hora
        { value: 'design_simples', label: 'Design Personalizado Simples', duration: 30 } // 30 minutos
    ];

    // Função para buscar horários ocupados
    const handleDateChange = async (date) => {
        setSelectedDate(date);

        try {
            const token = localStorage.getItem("authToken");
            const formattedDate = date.toISOString().split('T')[0];

            const response = await fetch(`http://localhost:8080/calendar/list-by-date?date=${formattedDate}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

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

    const handleConfirm = () => {
        if (service === 'placeholder') {
            toast.error('Por favor, selecione um serviço antes de continuar.', { theme: 'colored', autoClose: 6000 });
            return;
        }

        setShowConfirmationModal(true); // Abre o modal de confirmação
    };

    const handleAgendar = async () => {
        try {
            const selectedService = services.find((s) => s.value === service);

            if (!selectedService) {
                toast.error('Serviço inválido.', { theme: 'colored', autoClose: 6000 });
                return;
            }

            const duration = selectedService.duration;
            const startDateTime = new Date(`${selectedDate.toISOString().split('T')[0]}T${selectedTime}:00-03:00`);
            const endDateTime = new Date(startDateTime.getTime() + duration * 60000); // Soma a duração em minutos

            const event = {
                email: sessionStorage.getItem('userEmail'),
                summary: selectedService.label,
                location: 'Local do Serviço',
                description: `${sessionStorage.getItem('userName')} Telefone: ${sessionStorage.getItem('userPhone')} `,
                startDateTime: startDateTime.toISOString(),
                endDateTime: endDateTime.toISOString(),
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
                toast.success('Evento criado com sucesso!', {
                    onClose: () => {
                        setShowConfirmationModal(false); // Fecha o modal de confirmação
                        onClose(); // Fecha o modal principal
                        window.location.reload();
                    },
                    theme: 'colored',
                    autoClose: 3000,
                });
            } else if (!token) {
                toast.error("Usuário não autenticado", { theme: 'colored', autoClose: 6000 });
                window.location.href = "/login";
            } else if (response.status === 409) {
                toast.error('Horário ocupado, tente agendar em outro horário.', { theme: 'colored', autoClose: 6000 });
            }
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
                        {services.map((s) => (
                            <option key={s.value} value={s.value}>
                                {s.label}
                            </option>
                        ))}
                    </select>

                    <br />
                    <br />

                    <label>Data</label>
                    <Calendar
                        className="calendar-agendamento"
                        onChange={handleDateChange}
                        value={selectedDate}
                        tileDisabled={({ date }) => date < new Date(new Date().setHours(0, 0, 0, 0))}
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
                    <button className="button-agendamento" onClick={handleConfirm}>
                        Continuar
                    </button>
                    <button className="button-agendamento" onClick={onClose}>
                        Cancelar
                    </button>
                </center>
            </div>

            {/* Modal de confirmação */}
            {showConfirmationModal && (
                <div className="modal_confirmacao">
                    <div className="modal-content_confirmacao">
                        <h2>Confirme seu Agendamento</h2>

                        <br />

                        <p><strong>Serviço:</strong> {services.find((s) => s.value === service)?.label || 'Serviço Indefinido'}</p>
                        <p><strong>Data:</strong> {selectedDate.toLocaleDateString()}</p>
                        <p><strong>Horário:</strong> {selectedTime}</p>

                        <br />

                        <center>
                            <button className="button-confirmacao" onClick={handleAgendar}>
                                Confirmar
                            </button>
                            <button className="button-confirmacao" onClick={() => setShowConfirmationModal(false)}>
                                Voltar
                            </button>
                        </center>
                    </div>
                </div>
            )}

            <ToastContainer />
        </div>
    );
}

export default AgendamentoModal;
