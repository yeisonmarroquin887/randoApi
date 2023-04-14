import React from 'react'
import './element.css'
const Elementss = ( {user} ) => { 

  return (
    
        <section id='perfil'>
        <section className='img'>
        <img src={user.picture.large} alt="" /> 
        </section>
        <section className='inf'>
<h2><span>{user.name.title}:</span> {user.name.first} {user?.name.last}</h2>
<p><span>email:</span> {user.email}</p>
<p><span>gender:</span> {user.gender}</p>
</section>


</section>

    
  

  )
  }
export default Elementss