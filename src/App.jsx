import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Elementss from './components/Elementss'

function App() {
 const [person, setperson] = useState()
 const [canty, setcanty] = useState(40)
 useEffect(() => {
  const url = `https://randomuser.me/api/?results=${canty}`
  axios.get(url)
  .then(res=> setperson(res.data.results))
  .catch(err => console.log(err))
 },[canty])

 const handelsearch = e => {
  e.preventDefault()
  setcanty(e.target.input.value)
 }
  return (
    <div className="App">
      <section id='text'>
      <h1>Hello welcome,thanks for entering my 
        website here you can see 
        the beautiful cards of some
         important people, you can enter 
         the number of cards you want to see below and see them with a click</h1>
      </section>
   
  <form onSubmit={handelsearch}>
  <button>Click</button>
    <input id='input' type="number" />
    </form>
          <div className="inicio">
      {
         person?.map(user=> (
         <Elementss key={`${user.cell}`} user={user}/>
        ))
      }
    </div>
    </div>
  )
}

export default App
