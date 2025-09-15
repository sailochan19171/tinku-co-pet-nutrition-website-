import React, { useEffect, useMemo, useState } from 'react';

// NOTE: This is a simple client-side demo auth using localStorage.
// In production, replace with a real auth provider (e.g., Supabase/Auth0/Cognito).

export type AuthUser = {
  email: string;
  name?: string;
};

type AuthModalProps = {
  open: boolean;
  onClose: () => void;
  onAuthSuccess: (user: AuthUser) => void;
};

type StoredUser = { email: string; password: string; name?: string };

const USERS_KEY = 'tinku_users';
const AUTH_KEY = 'tinku_auth';

const readUsers = (): StoredUser[] => {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const writeUsers = (users: StoredUser[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

const saveSession = (user: AuthUser) => {
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
};

async function persistUser(user: { email: string; name?: string; password?: string }, mode: 'signup' | 'login') {
  try {
    const url = mode === 'signup' ? 'http://localhost:5050/api/users/signup' : 'http://localhost:5050/api/users/login';
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });
  } catch (e) {
    // Ignore network errors in demo; UI auth still works offline
  }
}

const AuthModal: React.FC<AuthModalProps> = ({ open, onClose, onAuthSuccess }) => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) {
      setMode('login');
      setName('');
      setEmail('');
      setPassword('');
      setConfirm('');
      setError('');
    }
  }, [open]);

  const canSubmit = useMemo(() => {
    if (mode === 'login') return !!email && !!password;
    return !!name && !!email && !!password && password === confirm;
  }, [mode, name, email, password, confirm]);

  const handleLogin = () => {
    setError('');
    setLoading(true);
    setTimeout(() => {
      const users = readUsers();
      const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
      if (!user) {
        setLoading(false);
        setError('Invalid email or password');
        return;
      }
      const authUser: AuthUser = { email: user.email, name: user.name };
      saveSession(authUser);
      setLoading(false);
      onAuthSuccess(authUser);
      onClose();
    }, 400);
  };

  const handleSignup = () => {
    setError('');
    if (password !== confirm) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const users = readUsers();
      const exists = users.some((u) => u.email.toLowerCase() === email.toLowerCase());
      if (exists) {
        setLoading(false);
        setError('An account with this email already exists');
        return;
      }
      const newUser: StoredUser = { email, password, name };
      writeUsers([...users, newUser]);
      const authUser: AuthUser = { email, name };
      saveSession(authUser);
      setLoading(false);
      onAuthSuccess(authUser);
      onClose();
    }, 400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    if (mode === 'login') handleLogin();
    else handleSignup();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center mb-4 sticky top-0 bg-white pb-2">
          <h3 className="text-xl font-bold text-gray-900">{mode === 'login' ? 'Login' : 'Sign Up'}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
        </div>

        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setMode('login')}
            className={`flex-1 py-2 rounded-md font-medium ${mode === 'login' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            type="button"
          >
            Login
          </button>
          <button
            onClick={() => setMode('signup')}
            className={`flex-1 py-2 rounded-md font-medium ${mode === 'signup' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            type="button"
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {mode === 'signup' && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />
          )}

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={!canSubmit || loading}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md disabled:opacity-50"
          >
            {loading ? 'Please wait...' : mode === 'login' ? 'Login' : 'Create Account'}
          </button>
        </form>

        <div className="mt-4 text-sm text-gray-600">
          {mode === 'login' ? (
            <button type="button" onClick={() => setMode('signup')} className="text-blue-600 hover:underline">
              Don\'t have an account? Sign up
            </button>
          ) : (
            <button type="button" onClick={() => setMode('login')} className="text-blue-600 hover:underline">
              Already have an account? Login
            </button>
          )}
        </div>

        <p className="mt-4 text-xs text-gray-500">
          Demo only. This stores credentials in your browser localStorage for preview purposes.
        </p>
      </div>
    </div>
  );
};

export default AuthModal;