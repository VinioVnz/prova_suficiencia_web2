'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import { isAuthenticated } from '@/lib/auth';

interface Usuario {
    id: number;
    username: string;
}

const cardStyle = {
    backgroundColor: '#14161A',
    border: '1px solid #14161A',
};

export default function UsuariosPage() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        if (!isAuthenticated()) {
            router.push('/login');
            return;
        }
        fetchUsuarios();
    }, [router]);

    const filteredUsuarios = usuarios.filter((u) =>
        u.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const fetchUsuarios = async () => {
        try {
            const response = await fetch('/RestApiFurb/users', {
                credentials: 'same-origin',
            });

            if (response.status === 401) {
                router.push('/login');
                return;
            }

            const data = await response.json();
            setUsuarios(Array.isArray(data) ? data : []);
        } catch (err) {
            setError('Erro ao carregar usuários');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm('Deletar este usuário?')) return;
        try {
            const response = await fetch(`/RestApiFurb/users/${id}`, {
                method: 'DELETE',
                credentials: 'same-origin',
            });
            if (!response.ok) { setError('Erro ao deletar usuário'); return; }
            setUsuarios((prev) => prev.filter((u) => u.id !== id));
        } catch (err) {
            setError('Erro ao deletar usuário');
            console.error(err);
        }
    };

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#1B1E24' }}>
            <Navbar />
            <div className="p-6 md:p-8 max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold text-white mb-6">Usuários</h1>
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
                        placeholder="Buscar por nome de usuário..."
                        className="w-full pl-10 pr-4 py-2 rounded-lg placeholder-gray-600 focus:outline-none"
                        style={{
                            backgroundColor: '#2A2A2A',
                            border: '1px solid #3A3A3A',
                            color: '#fff',
                        }}
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

                {loading ? (
                    <p style={{ color: '#6B7280' }}>Carregando...</p>
                ) : usuarios.length === 0 ? (
                    <div className="rounded-lg p-8 text-center" style={cardStyle}>
                        <p style={{ color: '#6B7280' }}>Nenhum usuário encontrado.</p>
                    </div>
                ) : (
                    <div className="rounded-lg overflow-hidden" style={cardStyle}>
                        <table className="w-full">
                            <thead>
                                <tr style={{ borderBottom: '1px solid #2A2A2A', backgroundColor: '#1E1E1E' }}>
                                    <th className="text-left px-6 py-3 text-sm font-medium" style={{ color: '#9CA3AF' }}>#</th>
                                    <th className="text-left px-6 py-3 text-sm font-medium" style={{ color: '#9CA3AF' }}>Usuário</th>
                                    <th className="px-6 py-3 text-sm font-medium" style={{ color: '#9CA3AF' }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsuarios.map((u, i) => (
                                    <tr
                                        key={u.id}
                                        style={{ borderBottom: i < filteredUsuarios.length - 1 ? '1px solid #2A2A2A' : 'none' }}
                                    >
                                        <td className="px-6 py-4 text-sm font-mono" style={{ color: '#4B5563' }}>
                                            {u.id}
                                        </td>
                                        <td className="px-6 py-4 text-white font-medium">{u.username}</td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                onClick={() => handleDelete(u.id)}
                                                className="px-3 py-1 rounded text-sm text-white font-medium transition-opacity hover:opacity-80"
                                                style={{ backgroundColor: '#7F1D1D', border: '1px solid #DC2626', cursor: 'pointer' }}
                                            >
                                                Deletar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
