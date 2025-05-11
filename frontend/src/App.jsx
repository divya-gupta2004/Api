import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [inputStr, setInputStr] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputArray = inputStr.split(',').map(item => item.trim());
    try {
      const res = await axios.post('http://localhost:5000/bfhl', {
        user_id: "BFHL",
        input: inputArray
      });
      setResponse(res.data);
    } catch (err) {
      console.error("API Error:", err);
    }
  };

  return (
    <div className="container">
      <h1>BFHL JSON Filter API</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputStr}
          onChange={(e) => setInputStr(e.target.value)}
          placeholder="Enter values like a,1,B,d,3"
        />
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div className="result-box">
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
