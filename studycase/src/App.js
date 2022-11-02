import {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Riwayat from "./Riwayat.js"
import Jual from "./Jual.js"

import {Link} from "react-router-dom"


function App() {
  const [datas, setDatas] = useState([])
  const [hide,setHide] = useState(true)
  const [hide1,setHide1] = useState(true)
  const [tanggal, setTanggal] = useState('')
  const [tipe, setTipe] = useState('')
  const [provider, setProvider] = useState('')
  const [nominal, setNominal] = useState('')
  const [nohp, setNohp] = useState('')

  const [saldo, setSaldo] = useState('')
  const [profile, setProfile] = useState('')


  
//  useEffect(() => {
//     fetch('http://localhost:4001/users/data')
//       .then(res => res.json())
//       .then(res => setDatas(res.data))
//   })

  // useEffect(() => {
  //   fetch('http://localhost:4001/users/modal')
  //     .then(res => res.json())
  //     .then(res => setDatas(res.data))
  // })

  useEffect(() => {
    fetch('http://localhost:4001/users/modal')
      .then(res => res.json())
      .then(res => {
        setProfile(res.data[0]) 
        console.log(res.data[0])
        setSaldo(res.data[0].saldo)
      })
  },[setProfile])
    
    const putsaldotopup =() =>{
        let formDatas = new FormData()
        formDatas.append("saldo",profile.saldo + Number(nominal))    
        fetch('http://localhost:4001/users/umodal/0', {
          method: "PUT",
          body: formDatas
        })
          .then(res => res.json())
          .then(res => alert(res.massage))
      
    }

    const posttopup = () => {
      let formData = new FormData()
      formData.append("tanggal", tanggal)
      formData.append("tipe", "topup")
      formData.append("nominal", nominal)
  
      fetch('http://localhost:4001/users/topup', {
        method: "POST",
        body: formData
      })
        .then(res => res.json())
        .then(res => alert(res.massage))

      // e.preventDefault()
    } 

    const putsaldojual =() =>{
      
        let formDatas = new FormData()
        formDatas.append("saldo",profile.saldo - Number(nominal))  
         
        fetch('http://localhost:4001/users/umodal/0', {
          method: "PUT",
          body: formDatas
        })
          .then(res => res.json())
          .then(res => alert(res.massage))
      
    }
  
  const postjual = () => {
    // e.preventDefault()
    let formData = new FormData()
    formData.append("tanggal", tanggal)
    formData.append("provider", provider) 
    formData.append("nominal", nominal)
    formData.append("tipe", "jual")
    formData.append("nohp", nohp)
    // formDatas.append("saldo", saldo)    

    
    fetch('http://localhost:4001/users/jual', {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(res => alert(res.massage))
  } 
  

 

  const klikjual = () => {
    setHide(true);
  };
  const kliktopup = () => {
    setHide(false);
  };
  const klikinput = () => {
    document.getElementById('input').classList.remove('input-none')
    document.getElementById('tb').classList.add('tabel-none')
  };
  const klikriwayat = () => {
    document.getElementById('tb').classList.remove('tabel-none')
    document.getElementById('input').classList.add('input-none')
  };

  return (
      <>
          <h1>GENBOX PULSA</h1>
          <h3>Saldo Utama : Rp.{saldo}</h3>
          
          <input onClick={klikjual} type="radio" value="topup" name="menu" /> Top Up
          <input onClick={kliktopup} type="radio" value="jual" name="menu" /> Jual
          
          <button onClick={klikinput}>Input</button>
          <button onClick={klikriwayat} >Riwayat</button>

          { hide ? (
            <>
            <form className='input-none' id='input' onSubmit={() => (putsaldotopup(),posttopup())}>
            <input type="text" placeholder='Tanggal' onChange={(e) => setTanggal(e.target.value)}></input>
            <input type="text" placeholder='Nominal' onChange={(e) => setNominal(e.target.value)}></input>
            <button type='submit'>Submit</button>
            </form>
            </>
          ):(
            <div>
              <form onSubmit={() => saldo > nominal ? (postjual(),putsaldojual()) : alert("saldo tidak cukup")}>
          <input type="text" placeholder='Tanggal' onChange={(e) => setTanggal(e.target.value)}></input>
          <select name="provider" id="provider" onChange={(e) => setProvider(e.target.value)}>
            <option value="Tri">Tri</option>
            <option value="Telkomsel">Telkomsel</option>
            <option value="Indosat">Indosat</option>
            <option value="Smartfren">Smartfren</option>
          </select>
          <select name="nominal" id="nominal" onChange={(e) => setNominal(e.target.value)}>
            <option value="5000">5000</option>
            <option value="10000">10000</option>
            <option value="15000">15000</option>
            <option value="25000">25000</option>
            
          </select>
          <input type="text" placeholder='No. HP' onChange={(e) => setNohp(e.target.value)}></input>
          <button type='submit'>Submit</button>
          </form>
          </div>

          )}
        <Riwayat/>  

      </>
    
       

  );
}

export default App;
