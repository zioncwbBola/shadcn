import React from 'react';

const Main: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <div className="w-full max-w-4xl p-6 bg-base-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="text-lg">Welcome to your dashboard!</p>
        {/* Add your dashboard components here */}
      </div>
    </div>
  );
};

export default Main;