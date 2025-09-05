'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { AuthState, User } from '@/types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
}

type AuthAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'UPDATE_USER'; payload: Partial<User> }
  | { type: 'LOGOUT' };

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };

    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
        loading: false
      };

    case 'UPDATE_USER':
      return {
        ...state,
        user: state.user ? { ...state.user, ...action.payload } : null
      };

    case 'LOGOUT':
      return {
        user: null,
        isAuthenticated: false,
        loading: false
      };

    default:
      return state;
  }
};

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: true
};

// Mock users for demo purposes
const mockUsers: User[] = [
  {
    id: 'user-1',
    email: 'demo@example.com',
    name: 'Demo User',
    avatar: 'https://placehold.co/150x150?text=User+Avatar+Profile+Picture',
    address: {
      street: '123 Main St',
      city: 'Demo City',
      state: 'CA',
      zipCode: '90210',
      country: 'USA'
    },
    phone: '+1 (555) 123-4567',
    joinDate: '2024-01-15'
  }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check for saved user session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('current-user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        dispatch({ type: 'SET_USER', payload: parsedUser });
      } catch (error) {
        console.error('Error loading user from localStorage:', error);
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    } else {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  // Save user to localStorage whenever user state changes
  useEffect(() => {
    if (state.user) {
      localStorage.setItem('current-user', JSON.stringify(state.user));
    } else {
      localStorage.removeItem('current-user');
    }
  }, [state.user]);

  const login = async (email: string, _password: string): Promise<boolean> => {
    dispatch({ type: 'SET_LOADING', payload: true });

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // For demo purposes, accept any email/password combination
    // In production, this would validate against a real backend
    const user = mockUsers.find(u => u.email === email) || {
      id: 'user-' + Date.now(),
      email,
      name: email.split('@')[0],
      avatar: 'https://placehold.co/150x150?text=User+Avatar+Profile+Picture',
      joinDate: new Date().toISOString().split('T')[0]
    };

    dispatch({ type: 'SET_USER', payload: user });
    return true;
  };

  const signup = async (email: string, _password: string, name: string): Promise<boolean> => {
    dispatch({ type: 'SET_LOADING', payload: true });

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // For demo purposes, create a new user
    const newUser: User = {
      id: 'user-' + Date.now(),
      email,
      name,
      avatar: 'https://placehold.co/150x150?text=User+Avatar+Profile+Picture',
      joinDate: new Date().toISOString().split('T')[0]
    };

    dispatch({ type: 'SET_USER', payload: newUser });
    return true;
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const updateProfile = (updates: Partial<User>) => {
    dispatch({ type: 'UPDATE_USER', payload: updates });
  };

  const value: AuthContextType = {
    ...state,
    login,
    signup,
    logout,
    updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};