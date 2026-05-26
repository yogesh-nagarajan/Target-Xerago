import React, { createContext, useContext, useState, type ReactNode } from 'react';

interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
  gender: string;
  age: number;
  phone: string;
  birthDate: string;
  address: {
    address: string;
    city: string;
    state: string;
  };
  token: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (username: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Fetch full user data to get address, age, phone, birthDate
        const fullUserResponse = await fetch(`https://dummyjson.com/users/${data.id}`);
        const fullUserData = await fullUserResponse.json();

        // Merge the token from login into full user data
        setUser({ ...fullUserData, token: data.token });

        window.adobe.target.getOffer({
          mbox: "homepage-banner",

          params: {
            login: "true",
            userType: fullUserData.role
          },

          success: function (offer: any) {
            adobe.target.applyOffer({
              mbox: "homepage-banner",
              offer: offer
            });
          }
        });


        console.log('Login Success with Full Data:', { ...fullUserData, token: data.token });
        console.log('Role Data:', fullUserData.role);
        return true;
      } else {
        setError(data.message || 'Login failed');
        return false;
      }
    } catch (err) {
      setError('An error occurred during login');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
