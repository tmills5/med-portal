import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [patients, setPatients] = useState({});

  useEffect( ()=> {
    fetch('/patients')
    .then(response => {
      if (response.ok) {
        response.json()
        .then(data=> {
          console.log(data)
          setPatients(data)
        });
      }
    })
    .catch(err => console.error(err));
  },[]);


  return (
    <div className="App">
      {/* <ul>
        {data}
      </ul> */}
    </div>
  );
}

export default App;
