import './App.css';

import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const bottle =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  const hours = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
  const [weight, setWeight] = useState('')
  const [bottles, setBottles] = useState('1')
  const [time, setTime] = useState('1')
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState('')

  const Calculate = () => {
    let litres = (bottles*0.33);
    let burning = (weight / 10);
    let grams = (litres * 8 * 4.5);
    let x = (burning * time);
    let gramsleft = (grams-x);  
    let alcohollevel = 0;
    let value = 0;
   
    if (gender === 'male') {  
      value = (gramsleft / (weight * 0.7))
      if (value < 0) value = 0;
      alcohollevel = value;
     
    } else {
      value = (gramsleft / (weight * 0.6) )  
      if (value < 0) value = 0;
      alcohollevel = value;  
    }
    setResult(alcohollevel.toFixed(2))
  }

  return (
    <div id= "container">
      <h3>Calculating alcohol blood level</h3>
        <div>
          <label>Weight:</label>
          <input type = "number" value={weight} onChange={e => setWeight(e.target.value)}/>
        </div>
        <div>
          <label>Bottles:</label>
          <select value={bottles} onChange={e => setBottles(e.target.value)}>
            { 
              bottle.map(bottle => (
                <option>{bottle}</option>
            ))
            }
          </select>
        </div>
        <div>
          <label>Time:</label>
          <select value={time} onChange={e => setTime(e.target.value)}>
            {
              hours.map(hours => (
                <option>{hours}</option>
              ))
            }
          </select>
        </div>
        <div>
          <label>Gender:</label>
          <input type = "radio" name="gender" id="Male" value="male" defaultChecked onChange={e => setGender(e.target.value)} />
          <label for ="Male">Male</label>
          <input type = "radio" name="gender" id="Female" value="female" onChange={e => setGender(e.target.value)} />
          <label for ="Female">Female</label>
        </div>
        <div>
          <label>Result:</label>
          <output>{result}</output>
        </div>
        <div>
          <button type="button" onClick={Calculate}>Calculate</button>
        </div>
      
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
