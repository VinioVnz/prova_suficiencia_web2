'use client';

import Link from 'next/link';
import { redirect, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { isAuthenticated, clearToken } from '@/lib/auth';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isAuthenticated()) {
      setIsLoggedIn(true);
      setUserName(localStorage.getItem('username') || '');
    }
  }, [pathname]);

  const handleLogout = () => {
    clearToken();
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUserName('');
    router.push('/equipamentos');
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className="flex items-center justify-between px-8 py-4"
      style={{ backgroundColor: '#111111', borderBottom: '1px solid #2A2A2A' }}
    >
      <img src="furb_ico.png" alt="FURB Logo" style={{ width: '60px', height: '45px', cursor: 'pointer' }} onClick={() => redirect('/equipamentos')} />
      <div className="flex items-center gap-8">
        
        <div className="flex gap-1">
          <Link
            href="/equipamentos"
            className="px-4 py-2 text-sm font-medium rounded transition-colors"
            style={{ 
                color: isActive('/equipamentos') ? '#3DA4FF' : '#9CA3AF',
                borderBottom: isActive('/equipamentos')? '2px solid #3DA4FF' : 'none',
             }}
          >
            Equipamentos
          </Link>
          {mounted && isLoggedIn && (
            <Link
              href="/usuarios"
              className="px-4 py-2 text-sm font-medium rounded transition-colors"
              style={{ 
                color: isActive('/usuarios') ? '#3DA4FF' : '#9CA3AF',
                borderBottom: isActive('/usuarios')? '2px solid #3DA4FF' : 'none',
            }}
            >
              Usuários
            </Link>
          )}
        </div>
      </div>

      {/* Right: Auth buttons */}
      {mounted && (
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <span className="text-sm" style={{ color: '#9CA3AF' }}>
                {userName}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded text-sm font-semibold text-black transition-opacity hover:opacity-80"
                style={{ backgroundColor: '#2f3f4e54', color: '#3DA4FF', border: '1px solid #3DA4FF', cursor: 'pointer' }}
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="px-4 py-2 rounded text-sm font-medium transition-colors"
                style={{ color: '#D1D5DB', border: '1px solid #3A3A3A' }}
              >
                Entrar
              </Link>
              <Link
                href="/signUp"
                className="px-4 py-2 rounded text-sm font-semibold text-black transition-opacity hover:opacity-80"
                style={{ backgroundColor: '#3DA4FF' }}
              >
                Cadastrar-se
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
