'use client';

export default function TestButton() {
  const API_URL = 'http://15.165.184.154:8080/api/challenge/1/ui-missionlist';
  const handleResendEmail = async () => {
    try {
      const response = await fetch(API_URL, {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      console.log('API Response:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return <button onClick={handleResendEmail}>TestButton</button>;
}
