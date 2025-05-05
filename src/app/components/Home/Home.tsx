'use client';

import { useEffect, useState, useCallback } from 'react';

import Controls from '../Controls/Controls';
import CatImage from '../CatImage/CatImage';

import '../Home/Home.scss';
import CatButton from '../CatButton.tsx/CatButton';

export default function Home() {
  const [enabled, setEnabled] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const fetchCat = useCallback(async () => {
    if (!enabled) return;
    try {
      const res = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await res.json();
      setImageUrl(data[0].url);
    } catch (err) {
      console.error('Ошибка при загрузке кота:', err);
    }
  }, [enabled]);

  useEffect(() => {
    fetchCat();
  }, [fetchCat]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (autoRefresh && enabled) {
      interval = setInterval(fetchCat, 5000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoRefresh, fetchCat, enabled]);

  return (
    <div className="container">
      <Controls
        enabled={enabled}
        autoRefresh={autoRefresh}
        setEnabled={setEnabled}
        setAutoRefresh={setAutoRefresh}
      />
      <CatButton onClick={fetchCat} disabled={!enabled} />
      <CatImage imageUrl={imageUrl} />
    </div>
  );
}
