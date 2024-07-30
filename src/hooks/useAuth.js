"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch('/api/check-auth');
      const data = await response.json();
      if (data.isLoggedIn) {
        setIsAuthenticated(true);
      } else {
        router.push('/login');
      }
      setLoading(false);
    };

    checkAuth();
  }, [router]);

  return { loading, isAuthenticated };
};

export default useAuth;
