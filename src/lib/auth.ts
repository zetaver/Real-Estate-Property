import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  email: string;
  role: string;
  first_name?: string;
  last_name?: string;
}

export interface UserCredentials {
  email: string;
  password: string;
}

export const testCredentials = {
  user: {
    email: 'user@test.com',
    password: 'test123',
    role: 'user'
  },
  agent: {
    email: 'agent@test.com',
    password: 'test123',
    role: 'agent'
  },
  agency: {
    email: 'agency@test.com',
    password: 'test123',
    role: 'agency'
  },
  developer: {
    email: 'developer@test.com',
    password: 'test123',
    role: 'developer'
  },
  admin: {
    email: 'admin@test.com',
    password: 'admin123',
    role: 'admin'
  }
};

export async function signIn({ email, password }: UserCredentials) {
  // Find matching test credentials
  const userType = Object.entries(testCredentials).find(
    ([, creds]) => creds.email === email && creds.password === password
  );

  if (!userType) {
    throw new Error('Invalid credentials');
  }

  const [role, creds] = userType;
  const user: User = {
    id: Math.random().toString(36).substring(2),
    email: creds.email,
    role: creds.role
  };

  // Store user data in localStorage
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('session', JSON.stringify({ active: true }));

  return { user };
}

export async function signOut() {
  localStorage.removeItem('user');
  localStorage.removeItem('session');
}

export function getCurrentUser() {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
}

export function getCurrentSession() {
  const session = localStorage.getItem('session');
  return session ? JSON.parse(session) : null;
}