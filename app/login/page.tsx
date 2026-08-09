'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import { setToken } from '@/lib/auth';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/RestApiFurb/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Erro ao fazer login');
        return;
      }

      setToken(data.token);
      localStorage.setItem('username', data.usuario.username);

      router.push('/equipamentos');
    } catch (err) {
      setError('Erro de conexão. Tente novamente.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#14161A' }}>
      <Navbar />
      <div className="flex items-center justify-center p-4 pt-24">
        <div className="w-full max-w-md">
          <div className="rounded-lg p-8" style={{ backgroundColor: '#1B1E24', border: '1px solid #1B1E24' }}>
            <h1 className="text-3xl font-bold text-white mb-6 text-center">Entrar</h1>

            {error && (
              <div className="mb-4 p-4 rounded text-sm" style={{ backgroundColor: '#3A1A1A', border: '1px solid #DC2626', color: '#FCA5A5' }}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium mb-2" style={{ color: '#9CA3AF' }}>
                  Usuário
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Digite seu usuário"
                  required
                  className="w-full px-4 py-2 rounded-lg text-white placeholder-gray-500 focus:outline-none"
                  style={{ backgroundColor: '#2A2A2A', border: '1px solid #3A3A3A' }}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2" style={{ color: '#9CA3AF' }}>
                  Senha
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha"
                  required
                  className="w-full px-4 py-2 rounded-lg text-white placeholder-gray-500 focus:outline-none"
                  style={{ backgroundColor: '#2A2A2A', border: '1px solid #3A3A3A' }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 rounded-lg text-black font-semibold transition-opacity hover:opacity-80 disabled:opacity-50"
                style={{ backgroundColor: '#3DA4FF' }}
              >
                {loading ? 'Carregando...' : 'Entrar'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p style={{ color: '#6B7280' }}>
                Não tem conta?{' '}
                <a href="/signUp" className="font-medium hover:opacity-80" style={{ color: '#3DA4FF' }}>
                  Cadastre-se
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
