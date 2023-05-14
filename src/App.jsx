import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' // public 폴더
import './App.css'

function App() {

  const [row, setRow] = useState([]);

  useEffect(() => {
    console.log('mount or update');
    return () => {
      console.log('unmount');
    };
  });

  useEffect(() => {
    console.log('mount only');
    fetch("http://openapi.seoul.go.kr:8088/67797a496979736b3931474e66574f/json/RealtimeCityAir/1/25/").then(
      function(res2) {
          res2.json().then(function(res3){
            setRow(res3.RealtimeCityAir.row);
          })
        }
      )
  }, []);

  useEffect(() => {
    console.log('update only');
  }, [row]);


  
  if( row.length === 0 ) {
    // !row / == undefined or null과 같은 표현
    fetch("http://openapi.seoul.go.kr:8088/67797a496979736b3931474e66574f/json/RealtimeCityAir/1/25/").then(
    function(res2) {
        res2.json().then(function(res3){
          setRow(res3.RealtimeCityAir.row);
        })
      }
    )
  }

  console.log(row);

  // const res = fetch("http://openapi.seoul.go.kr:8088/67797a496979736b3931474e66574f/json/RealtimeCityAir/1/25/")
  // const res2 = res.json();

  // console.log(res2.RealtimeCityAir.row);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + Resort</h1>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>PM10</th>
            <th>O3</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {
          row.map((gu, index) => {
            return (
            <tr key={ index }>
              <td>{gu.MSRSTE_NM}</td>
              <td>{gu.PM10}</td>
              <td>{gu.O3}</td>
              <td>{gu.IDEX_NM}</td>
            </tr>
            )
          })
          }
        </tbody>
      </table>
      {
      
      
      
      
        /* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
