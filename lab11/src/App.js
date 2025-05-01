import React, { useState } from 'react';

function App() {
  // 設定狀態，儲存點擊次數
  const [clickCount, setClickCount] = useState(0);

  // 點擊處理函數
  const handleClick = () => {
    setClickCount(clickCount + 1); // 增加點擊次數
  };

  return (
    <div className="App">
      <h1>
        {/* 顯示紅色文字，並綁定點擊事件 */}
        <span
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={handleClick}
        >
          Hello CGU! 被點了 {clickCount} 次
        </span>
      </h1>
    </div>
  );
}

export default App;
