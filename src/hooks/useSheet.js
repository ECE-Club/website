import { useState, useEffect } from 'react';
import Papa from 'papaparse';

export default function useSheet(url) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    Papa.parse(url, {
      download: true,
      header: true,
      skipEmptyLines: true,
      transformHeader: (h) => h.trim(),
      complete: (res) => {
        if (cancelled) return;
        setRows(res.data);
        setLoading(false);
      },
      error: (err) => {
        if (cancelled) return;
        setError(err);
        setLoading(false);
      },
    });
    return () => { cancelled = true; };
  }, [url]);

  return { rows, loading, error };
}