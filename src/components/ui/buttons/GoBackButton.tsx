import React from 'react';

const GoBackButton: React.FC = () => {
  const handleGoBack = () => {
    // Trở lại trang trước trong lịch sử trình duyệt
    window.history.back();
  };

  return (
      <button onClick={handleGoBack} style={{ position: 'fixed', top: '80px', fontSize: '2rem', cursor: 'pointer' }} title="Go back">
          ⬅️
      </button>
  );
};

export default GoBackButton;
