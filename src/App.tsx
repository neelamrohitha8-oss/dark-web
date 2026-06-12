import React, { useState, useEffect } from 'react';
import SecretGateway from './components/SecretGateway';
import Fake404 from './components/Fake404';
import DecryptionScreen from './components/DecryptionScreen';
import MarketplaceDashboard from './components/MarketplaceDashboard';

type ScreenState = 'GATEWAY' | 'FAKE_404' | 'DECRYPTION' | 'DASHBOARD';

export default function App() {
  const [screenState, setScreenState] = useState<ScreenState>('GATEWAY');
  const [enteredPhrase, setEnteredPhrase] = useState('');

  // Handle gateway verification
  const handleVerify = (phrase: string) => {
    setEnteredPhrase(phrase);
    setScreenState('FAKE_404');
  };

  // Safe tab title setup
  useEffect(() => {
    document.title = "DarkWeb Isolation Sandbox";
  }, []);

  return (
    <div id="darkweb-app-root" className="min-h-screen bg-[#050505] text-[#e0e0e0] overflow-x-hidden antialiased selection:bg-green-500 selection:text-black">
      {screenState === 'GATEWAY' && (
        <SecretGateway onVerify={handleVerify} />
      )}

      {screenState === 'FAKE_404' && (
        <Fake404 
          enteredPhrase={enteredPhrase} 
          onBellClick={() => setScreenState('DECRYPTION')} 
        />
      )}

      {screenState === 'DECRYPTION' && (
        <DecryptionScreen 
          onComplete={() => setScreenState('DASHBOARD')} 
        />
      )}

      {screenState === 'DASHBOARD' && (
        <MarketplaceDashboard 
          onResetSession={() => {
            setScreenState('GATEWAY');
            setEnteredPhrase('');
          }} 
        />
      )}

      {/* Restricted Warning Overlay (Partial Visibility) */}
      <div className="fixed bottom-4 right-4 bg-red-600 text-black px-3 py-1 text-[10px] font-black uppercase rotate-3 shadow-[0_0_15px_rgba(220,38,38,0.5)] z-50 select-none pointer-events-none">
        Simulated Environment
      </div>
    </div>
  );
}
