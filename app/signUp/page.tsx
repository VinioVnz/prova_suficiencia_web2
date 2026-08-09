'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import { setToken } from '@/lib/auth';

export default function SignUpPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('As senhas não coincidem!');
      return;
    }

    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/RestApiFurb/signUp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Erro ao criar conta');
        return;
      }

      setToken(data.token);
      localStorage.setItem('username', data.usuario.username);

      setSuccess('Conta criada com sucesso! Redirecionando...');
      setTimeout(() => router.push('/equipamentos'), 2000);
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
      <div className="flex items-center justify-center p-4 pt-16">
        <div className="w-full max-w-md">
          <div className="rounded-lg p-8" style={{ backgroundColor: '#1b1e24', border: '1px solid #1b1e24' }}>
            <h1 className="text-3xl font-bold text-white mb-6 text-center">Cadastro</h1>

            {error && (
              <div className="mb-4 p-4 rounded text-sm" style={{ backgroundColor: '#3A1A1A', border: '1px solid #DC2626', color: '#FCA5A5' }}>
                {error}
              </div>
            )}

            {success && (
              <div className="mb-4 p-4 rounded text-sm" style={{ backgroundColor: '#1A3A1A', border: '1px solid #16A34A', color: '#86EFAC' }}>
                {success}
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
                  placeholder="Escolha um usuário"
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
                  placeholder="Escolha uma senha"
                  required
                  className="w-full px-4 py-2 rounded-lg text-white placeholder-gray-500 focus:outline-none"
                  style={{ backgroundColor: '#2A2A2A', border: '1px solid #3A3A3A' }}
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2" style={{ color: '#9CA3AF' }}>
                  Confirmar Senha
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirme sua senha"
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
                {loading ? 'Carregando...' : 'Cadastrar'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p style={{ color: '#6B7280' }}>
                Já tem conta?{' '}
                <a href="/login" className="font-medium hover:opacity-80" style={{ color: '#3DA4FF' }}>
                  Entrar
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
