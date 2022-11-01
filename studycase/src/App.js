import {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Riwayat from "./Riwayat.js"
import Jual from "./Jual.js"
import Card from "./Card.js"


function App() {
  const [datas, setDatas] = useState([])

  const [tanggal, setTanggal] = useState('')
  const [tipe, setTipe] = useState('')
  const [provider, setProvider] = useState('')
  const [nominal, setNominal] = useState('')
  const [nohp, setNohp] = useState('')


  
 useEffect(() => {
    fetch('http://localhost:4001/users/data')
      .then(res => res.json())
      .then(res => setDatas(res.data))
  })

  // useEffect(() => {
  //   fetch('http://localhost:4001/users/modal')
  //     .then(res => res.json())
  //     .then(res => setDatas(res.data))
  // })

  const postjual = (e) => {
    let formDatas = new FormData()
    formDatas.append("tanggal", tanggal)
    formDatas.append("tipe", tipe)
    formDatas.append("provider", provider)
    formDatas.append("nominal", nominal)
    formDatas.append("nohp", nohp)

    e.preventDefault()
    fetch('http://localhost:4001/users/jual', {
      method: "POST",
      // body: formDatas
    })
      .then(res => res.json())
      .then(res => alert(res.message))
  } 
  const posttopup = (e) => {
    
    let formDatas = new FormData()
    formDatas.append("tanggal", tanggal)
    formDatas.append("tipe", tipe)
    formDatas.append("nominal", nominal)

    e.preventDefault()
    fetch('http://localhost:4001/users/jual', {
      method: "POST",
      body: formDatas
    })
      .then(res => res.json())
      .then(res => alert(res.message))
  } 

  const editUp = (e) => {
    // const [datas, setDatas] = useState()
    // const [profile, setProfile] = useState()

    
    
    e.preventDefault()
    fetch('http://localhost:4001/users/data/', {
      method: "PUT",
      // body: formDatas 
    })//[setProfile]
      .then(res => res.json())
      .then(res => alert(res.message))
  } 

  return (
      <>
          <h1>GENBOX PULSA</h1>

          <input onClick={posttopup} type="radio" value="topup" name="menu" /> Top Up
          <input onClick={postjual} type="radio" value="jual" name="menu" /> Jual
          
          <input type="text" placeholder='Tanggal'></input>
          <input type="text" placeholder='Nominal' ></input>
          <button type='submit'>Submit</button>


          <div>
          <input type="text" placeholder='Tanggal' ></input>
          <select name="provider" id="provider">
            <option value="Tri">Tri</option>
            <option value="Telkomsel">Telkomsel</option>
            <option value="Indosat">Indosat</option>
            <option value="Smartfren">Smartfren</option>
          </select>
          <select name="nominal" id="nominal">
            <option value="1">5000</option>
            <option value="2">10000</option>
            <option value="3">15000</option>
            <option value="4">25000</option>
            <input type="text" placeholder='No. HP' ></input>
          </select>
          </div>

          
          <div className="container">
      {datas.map((data,i) => 
        <Card 
        key={i}  
        // riwayat={riwayat}
        tanggal={data.tanggal} 
        tipe={data.tipe} 
        nominal={data.nominal} 
        />
      )}
      </div>

      </>
    
        // <Router>
        //   <Routes>
            
        //     <Route path="/Jual" element={<Jual/>}></Route>
        //     <Route path="/Riwayat" element={<Riwayat/>}></Route>
        
        //   </Routes>
        // </Router>
        

  );
}

export default App;
