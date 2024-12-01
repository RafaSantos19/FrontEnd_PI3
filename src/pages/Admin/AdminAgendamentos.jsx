import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminAgendamentos.css';
import Menu from '../../components/Menu/Menu';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function AdminAgendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [countData, setCountData] = useState({});
  const [chartData, setChartData] = useState(null);
  const [showDeleteEventModal, setShowDeleteEventModal] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);

  const fetchAllAgendamentos = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.get('http://localhost:8080/calendar/list-all-events', {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Ordena os agendamentos por data de início (mais próximo primeiro)
      const sortedAgendamentos = response.data.sort(
        (a, b) => new Date(a.startDateTime) - new Date(b.startDateTime)
      );

      setAgendamentos(sortedAgendamentos);
    } catch (error) {
      console.error('Erro ao buscar todos os agendamentos:', error);
    }
  };

  const fetchCountData = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.get('http://localhost:8080/calendar/count-events', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCountData(response.data);

      const labels = Object.keys(response.data);
      const counts = Object.values(response.data);
      setChartData({
        labels,
        datasets: [
          {
            label: 'Agendamentos',
            data: counts,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      });
    } catch (error) {
      console.error('Erro ao buscar dados de contagem:', error);
    }
  };

  const handleDeleteAgendamento = async (eventId) => {
    try {
      const token = localStorage.getItem('authToken');
      await axios.delete(`http://localhost:8080/calendar/delete-events`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { eventId: eventId },
      });
      toast.success('Agendamento deletado com sucesso!', { theme: 'colored', autoClose: 6000 });
      setAgendamentos((prev) => prev.filter((event) => event.id !== eventId));
    } catch (error) {
      console.error('Erro ao deletar agendamento:', error);
      toast.error('Erro ao deletar o agendamento.', { theme: 'colored', autoClose: 6000 });
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      const token = localStorage.getItem('authToken');
      await axios.delete(`http://localhost:8080/calendar/delete-events`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { eventId: eventId }
      });
      toast.success("Agendamento deletado com sucesso!", { theme: 'colored', autoClose: 6000 });
      setAgendamentos((prev) => prev.filter((event) => event.id !== eventId));
    } catch (error) {
      console.error("Erro ao deletar agendamento:", error);
      toast.error("Erro ao deletar o agendamento.", { theme: 'colored', autoClose: 6000 });
    }
  };

  const confirmDeleteEvent = (eventId) => {
    setShowDeleteEventModal(true);
    setSelectedEventId(eventId); // Armazena o ID do evento selecionado
  };

  useEffect(() => {
    fetchAllAgendamentos();
    fetchCountData();
  }, []);

  return (
    <section className="section-admin-agendamentos">
      <Menu />
      <div className="admin-agendamentos-container">

        <div style={{display:'flex', justifyContent:'center', alignItems: 'center'}}>
          <h1>Google Calendar</h1>
          <a
            href='https://calendar.google.com/calendar/u/0/r?cid=M2U1MzIwNDYxZDgzNGM1YzBiODQ0YjM3OThlYmE0NjVjMDYyY2UwZjExODMzYzNjNjAwMjZkOWM1NWY2ZTViZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&pli=1'
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: '10px', color: '#4285F4', textDecoration: 'none' }}
          >
            <span className="material-icons" style={{ fontSize: '24px' }}>event</span>
          </a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0', marginBottom: '70px' }}>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=426a9c66fdbae0e52a9617b61ac1eb205748e5d0c7f5af1b21fc18fca3ba02cd%40group.calendar.google.com&ctz=America%2FSao_Paulo"
            style={{ border: 0 }}
            width="800"
            height="600"
            title="Google Calendar"
          ></iframe>
        </div>


        <h1>Todos os Agendamentos</h1>
        <br />
        <div className='div-agendamentos-admin'>
        {agendamentos.length > 0 ? (
          <div className="cards-container-admin">
            {agendamentos.map((event) => (
              <center>
                <div className="event-card-admin" key={event.id}>
                  <div className='title-card-admin'>
                    <h3>{event.summary}</h3>
                  </div>
                  <div className='content-card-admin'>
                    <p>
                      <strong>Cliente:</strong> {event.description.split('Telefone:')[0].trim()}
                    </p>
                    <p>
                      <strong>Telefone:</strong> {event.description.split('Telefone:')[1].trim()}
                    </p>
                    <p>
                      <strong>Início:</strong> {new Date(event.startDateTime).toLocaleString()}
                    </p>
                    <p>
                      <strong>Fim:</strong> {new Date(event.endDateTime).toLocaleString()}
                    </p>
                    <center><button onClick={() => confirmDeleteEvent(event.id)}>Cancelar</button></center>
                  </div>
                </div>
              </center>
            ))}
          </div>
        ) : (
          <p>Não há agendamentos disponíveis.</p>
        )}
        </div>

        <div className='relatorio-container'>
          <h1>Relatório de agendamento</h1>

          {/* Exibindo o gráfico */}
          <div className='div-grafico-agendamentos'>
            {chartData ? (
              <Bar
                data={chartData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                    title: {
                      display: true,
                      text: 'Quantidade de Agendamentos por Serviço',
                    },
                  },
                }}
              />
            ) : (
              <p>Carregando gráfico...</p>
            )}
          </div>
        </div>
      </div>

      {showDeleteEventModal && (
        <div className="modal_perfil">
          <div className="modal-content_perfil">
            <h2>Confirmar Cancelamento</h2>
            <p>Tem certeza de que deseja cancelar este agendamento? Esta ação é irreversível.</p>
            <button onClick={() => {
              handleDeleteEvent(selectedEventId);
              setShowDeleteEventModal(false);
            }}>Confirmar</button>
            <button onClick={() => setShowDeleteEventModal(false)}>Fechar</button>
          </div>
        </div>
      )}

      <ToastContainer />
    </section>
  );
}

export default AdminAgendamentos;
