import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { staffLogin } from '../utils/api.js';

export default function StaffLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPwd, setShowPwd] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please enter your username and password.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await staffLogin(username, password);
      navigate('/staff/dashboard', { replace: true });
    } catch (err) {
      setError(err.message || 'Invalid credentials. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="staff-login-wrapper">
      <div className="staff-login-card">
        {/* Brand */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'rgba(197, 165, 114, 0.15)',
              border: '1px solid rgba(197, 165, 114, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto var(--space-4)',
              fontSize: '1.5rem',
            }}
          >
            🏨
          </div>
          <h1 className="staff-login-card__brand">Sandane Homes</h1>
          <p className="staff-login-card__title">Staff Portal</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {/* Error */}
          {error && (
            <div
              style={{
                background: 'rgba(184, 84, 80, 0.15)',
                border: '1px solid rgba(184, 84, 80, 0.4)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-3) var(--space-4)',
                marginBottom: 'var(--space-5)',
                fontSize: 'var(--text-sm)',
                color: '#FF9B97',
              }}
            >
              ⚠ {error}
            </div>
          )}

          {/* Username */}
          <div className="form-group">
            <label htmlFor="staff-username" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'var(--text-sm)', fontWeight: 500, display: 'block', marginBottom: 'var(--space-2)' }}>
              Username
            </label>
            <input
              id="staff-username"
              type="text"
              className="staff-input"
              placeholder="Enter username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              autoComplete="username"
              autoCapitalize="none"
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="staff-password" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'var(--text-sm)', fontWeight: 500, display: 'block', marginBottom: 'var(--space-2)' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="staff-password"
                type={showPwd ? 'text' : 'password'}
                className="staff-input"
                placeholder="Enter password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="current-password"
                style={{ paddingRight: '48px' }}
              />
              <button
                type="button"
                onClick={() => setShowPwd(!showPwd)}
                style={{
                  position: 'absolute',
                  right: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: '1.1rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
                aria-label={showPwd ? 'Hide password' : 'Show password'}
              >
                {showPwd ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            id="staff-login-btn"
            style={{
              width: '100%',
              minHeight: '52px',
              background: loading ? 'rgba(197,165,114,0.5)' : 'var(--color-gold)',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-md)',
              fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
              marginTop: 'var(--space-4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--space-2)',
              transition: 'all var(--transition-base)',
            }}
          >
            {loading ? (
              <>
                <div className="spinner" style={{ borderTopColor: 'white' }} />
                Signing In…
              </>
            ) : (
              'Sign In to Dashboard'
            )}
          </button>
        </form>

        <p style={{
          textAlign: 'center',
          marginTop: 'var(--space-6)',
          fontSize: 'var(--text-xs)',
          color: 'rgba(255,255,255,0.25)',
        }}>
          🔒 Authorised Sandane Homes Staff Only
        </p>
      </div>
    </div>
  );
}
