import { healthSchema, type Health } from '@parley/shared'
import { useEffect, useState } from 'react'

function App() {
  const [health, setHealth] = useState<Health | null>(null);

  useEffect(() => {
    void fetch('/api/health')
      .then((res) => res.json())
      .then((data: unknown) => {
        setHealth(healthSchema.parse(data));
      });
  }, []);

  return <h1>{health ? 'API OK' : 'Łączę z API…'}</h1>;
}

export default App
