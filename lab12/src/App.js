import React, { useState } from 'react';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AlarmIcon from '@mui/icons-material/Alarm';
import DeleteIcon from '@mui/icons-material/Delete';

// 顯示被點擊次數的功能
function App() {
  // 用來跟蹤文字的點擊次數
  const [clickCount, setClickCount] = useState(0);

  // 用來更新被點擊次數
  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className="App">
      <h1>Material UI 按鈕示例</h1>

      {/* 顯示紅色 "Hello CGU!" 文字，並顯示被點擊次數 */}
      <p
        style={{ color: 'red', cursor: 'pointer' }}
        onClick={handleClick}
      >
        Hello CGU! 被點擊了 {clickCount} 次
      </p>

      {/* 商店按鈕 */}
      <Button
        variant="contained"
        color="primary"
        startIcon={<ShoppingCartIcon />}
      >
        商店
      </Button>

      {/* 鬧鐘按鈕 */}
      <Button
        variant="contained"
        color="secondary"
        startIcon={<AlarmIcon />}
      >
        鬧鐘
      </Button>

      {/* 垃圾桶按鈕 */}
      <Button
        variant="contained"
        color="error"
        startIcon={<DeleteIcon />}
      >
        垃圾桶
      </Button>
    </div>
  );
}

export default App;
