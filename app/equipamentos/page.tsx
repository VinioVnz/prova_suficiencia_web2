'use client';

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { isAuthenticated } from '@/lib/auth';

interface Tipo {
  id: number;
  nome: string;
}

interface Equipamento {
  id: number;
  nome: string;
  tipo: Tipo;
}

const EMPTY_FORM = { nome: '', tipoId: '' };

const inputStyle = {
  backgroundColor: '#2A2A2A',
  border: '1px solid #3A3A3A',
  color: '#fff',
};

const cardStyle = {
  backgroundColor: '#1B1E24',
  border: '1px solid #5c6270',
  borderLeft: 'none'
};

function EquipCardStyleTag() {
  return (
    <style jsx global>{`
      .equip-card {
        position: relative;
        overflow: hidden;
        padding-left: 22px !important;
      }
      .equip-card::before {
        content: '';
        position: absolute;
        top: 10px;
        bottom: 10px;
        left: 0;
        width: 3px;
        background: repeating-linear-gradient(
          180deg,
          #3da4ff 0 6px,
          transparent 6px 11px
        );
        border-radius: 0 3px 3px 0;
      }
    `}</style>
  );
}

export default function EquipamentosPage() {
  const [equipamentos, setEquipamentos] = useState<Equipamento[]>([]);
  const [tipos, setTipos] = useState<Tipo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsLoggedIn(isAuthenticated());
    fetchEquipamentos();
  }, []);

  const filteredEquipamentos = equipamentos.filter((eq) => {
    const term = searchTerm.toLowerCase();
    return (
      eq.nome.toLowerCase().includes(term) ||
      eq.tipo.nome.toLowerCase().includes(term)
    );
  });

  const fetchEquipamentos = async () => {
    try {
      const response = await fetch('/RestApiFurb/equipamentos');
      const data = await response.json();
      const lista: Equipamento[] = data.equipamentos || [];
      setEquipamentos(lista);

      const tiposMap = new Map<number, Tipo>();
      lista.forEach((e) => {
        if (e.tipo && !tiposMap.has(e.tipo.id)) tiposMap.set(e.tipo.id, e.tipo);
      });
      setTipos(Array.from(tiposMap.values()));
    } catch (err) {
      setError('Erro ao carregar equipamentos');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const body = { nome: formData.nome, tipo: { id: Number(formData.tipoId) } };
    const method = editingId ? 'PUT' : 'POST';
    const url = editingId
      ? `/RestApiFurb/equipamentos/${editingId}`
      : '/RestApiFurb/equipamentos';

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify(body),
      });
      if (!response.ok) { setError('Erro ao salvar equipamento'); return; }
      setFormData(EMPTY_FORM);
      setEditingId(null);
      setShowForm(false);
      fetchEquipamentos();
    } catch (err) {
      setError('Erro ao salvar equipamento');
      console.error(err);
    }
  };

  const handleEdit = (eq: Equipamento) => {
    setFormData({ nome: eq.nome, tipoId: String(eq.tipo.id) });
    setEditingId(eq.id);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Deletar este equipamento?')) return;
    try {
      const response = await fetch(`/RestApiFurb/equipamentos/${id}`, {
        method: 'DELETE',
        credentials: 'same-origin',
      });
      if (!response.ok) { setError('Erro ao deletar'); return; }
      fetchEquipamentos();
    } catch (err) {
      setError('Erro ao deletar equipamento');
      console.error(err);
    }
  };

  const handleCancel = () => {
    setFormData(EMPTY_FORM);
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#14161A' }}>
      <EquipCardStyleTag />
      <Navbar />
      <div className="p-6 md:p-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Equipamentos</h1>
          <button
            onClick={() => { if (showForm) handleCancel(); else setShowForm(true); }}
            className="px-4 py-2 rounded-lg text-black font-semibold transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#2f3f4e54', color: '#3DA4FF', border: '1px solid #3DA4FF', cursor: 'pointer' }}
          >
            {showForm ? 'Cancelar' : '+ Novo'}
          </button>
        </div>

        <div className="relative mb-6">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2"
            width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por nome ou tipo..."
            className="w-full pl-10 pr-4 py-2 rounded-lg placeholder-gray-600 focus:outline-none"
            style={inputStyle}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>
        {error && (
          <div
            className="mb-4 p-4 rounded flex justify-between items-center text-sm"
            style={{ backgroundColor: '#3A1A1A', border: '1px solid #DC2626', color: '#FCA5A5' }}
          >
            <span>{error}</span>
            <button onClick={() => setError('')}>✕</button>
          </div>
        )}

        {showForm && (
          <div className="rounded-lg p-6 mb-6" style={cardStyle}>
            <h2 className="text-lg font-bold text-white mb-4">
              {editingId ? 'Editar Equipamento' : 'Novo Equipamento'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#9CA3AF' }}>Nome</label>
                <input
                  type="text"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  placeholder="Nome do equipamento"
                  required
                  className="w-full px-4 py-2 rounded-lg placeholder-gray-600 focus:outline-none"
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#9CA3AF' }}>Tipo</label>
                {tipos.length > 0 ? (
                  <select
                    value={formData.tipoId}
                    onChange={(e) => setFormData({ ...formData, tipoId: e.target.value })}
                    required
                    className="w-full px-4 py-2 rounded-lg focus:outline-none"
                    style={inputStyle}
                  >
                    <option value="">Selecione um tipo</option>
                    {tipos.map((t) => (
                      <option key={t.id} value={t.id}>{t.nome}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="number"
                    value={formData.tipoId}
                    onChange={(e) => setFormData({ ...formData, tipoId: e.target.value })}
                    placeholder="ID do tipo"
                    required
                    className="w-full px-4 py-2 rounded-lg placeholder-gray-600 focus:outline-none"
                    style={inputStyle}
                  />
                )}
              </div>
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-lg text-black font-semibold transition-opacity hover:opacity-80"
                  style={{ backgroundColor: '#2f3f4e54', color: '#3DA4FF', border: '1px solid #3DA4FF' }}
                >
                  {editingId ? 'Atualizar' : 'Salvar'}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex-1 py-2 rounded-lg text-white font-medium transition-opacity hover:opacity-80"
                  style={{ backgroundColor: '#333333' }}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}

        {loading ? (
          <p style={{ color: '#6B7280' }}>Carregando...</p>
        ) : filteredEquipamentos.length === 0 ? (
          <div className="rounded-lg p-8 text-center" style={cardStyle}>
            <p style={{ color: '#6B7280' }}>Nenhum equipamento cadastrado.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredEquipamentos.map((eq) => (
              <div key={eq.id} className="equip-card rounded-lg p-5" style={cardStyle}>
                <span className="text-xs font-mono" style={{ color: '#4B5563' }}>#{eq.id}</span>
                <h3 className="text-lg font-semibold text-white mt-1 mb-2">{eq.nome}</h3>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
                  style={{ backgroundColor: '#121a2bbd', color: '#3DA4FF', border: '1px solid #3DA4FF33' }}
                >
                  {eq.tipo.nome}
                </span>
                {isLoggedIn && (
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => handleEdit(eq)}
                      className="flex-1 py-2 rounded-lg text-black text-sm transition-opacity hover:opacity-80"
                      style={{ backgroundColor: 'var(--background-color)', color: '#5c6270', border: '1px solid #5c6270', cursor: 'pointer' }}
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(eq.id)}
                      className="flex-1 py-2 rounded-lg text-white text-sm font-medium transition-opacity hover:opacity-80"
                      style={{ backgroundColor: 'var(--background-color)', color: '#5c6270', border: '1px solid #5c6270', cursor: 'pointer'  }}
                    >
                      Deletar
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}