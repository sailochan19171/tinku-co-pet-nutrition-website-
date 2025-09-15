import React, { useEffect, useMemo, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export type AuthUser = {
  email: string;
  name?: string;
};

type AuthModalProps = {
  open: boolean;
  onClose: () => void;
  onAuthSuccess: (user: AuthUser) => void;
};

const AUTH_KEY = 'tinku_auth';

const AuthModal: React.FC<AuthModalProps> = ({ open, onClose, onAuthSuccess }) => {
  const [mode, setMode] = useState<'login' | 'signup' | 'forgot'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) {
      setMode('login');
      setName('');
      setEmail('');
      setPassword('');
      setConfirm('');
      setError('');
      setInfo('');
    }
  }, [open]);

  const canSubmit = useMemo(() => {
    if (mode === 'login') return !!email && !!password;
    if (mode === 'signup') return !!name && !!email && !!password && password === confirm;
    if (mode === 'forgot') return !!email;
    return false;
  }, [mode, name, email, password, confirm]);

  const setSessionUser = async () => {
    const { data } = await supabase.auth.getUser();
    const u = data.user;
    if (u) {
      const authUser: AuthUser = {
        email: u.email || '',
        name: (u.user_metadata?.name as string | undefined) || undefined,
      };
      localStorage.setItem(AUTH_KEY, JSON.stringify(authUser));
      onAuthSuccess(authUser);
    }
  };

  const handleLogin = async () => {
    setError('');
    setInfo('');
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError(error.message || 'Invalid email or password');
      return;
    }
    await setSessionUser();
    onClose();
  };

  const handleSignup = async () => {
    setError('');
    setInfo('');
    if (password !== confirm) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
        emailRedirectTo: window.location.origin, // optional verification redirect
      },
    });
    setLoading(false);
    if (error) {
      setError(error.message || 'Failed to sign up');
      return;
    }
    // If email confirmations are enabled, user might need to verify. Still try to set session if present.
    await setSessionUser();
    onClose();
  };

  const handleForgot = async () => {
    setError('');
    setInfo('');
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setLoading(false);
    if (error) {
      setError(error.message || 'Failed to send reset email');
      return;
    }
    setInfo('Reset link sent. Please check your email.');
  };

  const handleGoogle = async () => {
    setError('');
    setInfo('');
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin },
    });
    setLoading(false);
    if (error) setError(error.message || 'Google sign-in failed');
    // After redirect back, Header will synchronize the session.
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    if (mode === 'login') handleLogin();
    else if (mode === 'signup') handleSignup();
    else handleForgot();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center mb-4 sticky top-0 bg-white pb-2">
          <h3 className="text-xl font-bold text-gray-900">
            {mode === 'login' ? 'Login' : mode === 'signup' ? 'Sign Up' : 'Forgot Password'}
          </h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
        </div>

        {mode !== 'forgot' && (
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
        )}

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

          {mode !== 'forgot' && (
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          )}

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
          {info && <p className="text-sm text-green-600">{info}</p>}

          <button
            type="submit"
            disabled={!canSubmit || loading}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md disabled:opacity-50"
          >
            {loading ? 'Please wait...' : mode === 'login' ? 'Login' : mode === 'signup' ? 'Create Account' : 'Send Reset Link'}
          </button>
        </form>

        {mode === 'login' && (
          <div className="mt-3 flex items-center justify-between text-sm">
            <button type="button" onClick={() => setMode('signup')} className="text-blue-600 hover:underline">
              Don't have an account? Sign up
            </button>
            <button type="button" onClick={() => setMode('forgot')} className="text-blue-600 hover:underline">
              Forgot password?
            </button>
          </div>
        )}

        {mode === 'signup' && (
          <div className="mt-3 text-sm">
            <button type="button" onClick={() => setMode('login')} className="text-blue-600 hover:underline">
              Already have an account? Login
            </button>
          </div>
        )}

        <div className="mt-6">
          <button
            type="button"
            onClick={handleGoogle}
            className="w-full py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-md flex items-center justify-center gap-2"
          >
            <img alt="Google" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5" />
            Continue with Google
          </button>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          Auth is powered by Supabase. Ensure environment variables are configured.
        </p>
      </div>
    </div>
  );
};

export default AuthModal;