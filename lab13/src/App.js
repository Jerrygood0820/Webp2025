import './App.css';
// import logo from './logo.svg';
// import MultiButton from './cgu_multiButton'
// import HelloCGU from './cgu_hello'

import CGULogin from './cgu-login'; // 匯入的名稱

function App() {
  return (
    <div className="App">
      <div>
        {/* { HelloCGU() } */}
        {/* { MultiButton(10) } */}
        <CGULogin /> {/* 用標籤方式使用元件 */}
      </div>
    </div>
  );
}

export default App;
