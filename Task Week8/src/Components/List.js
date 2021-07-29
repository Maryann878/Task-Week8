import React, { useState, useEffect} from 'react'
import axios from 'axios'

function List() {
    const [User, setUser] = useState([])
    
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
        .then(response => { 
            setUser(response.data.results)
        
        })
    })
        if(User){
            return (
                 User.map((User) => (
            <section>
                <div className="frame">
                    
                <ul>
                    <img src = "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png" alt = "" />
                 <li key = {User}>
                    <label for= "name">Name:</label>
                    <h1>{User.name}</h1>
                    
                    <label for= "gender">Gender:</label>
                    <p>{User.gender}</p>

                    <label for= "height">Height:</label>
                    <p>{User.height}</p>
                 
                 </li>
                 </ul>
            </div>
            </section>
            
                   
                 ))
            )
        }
      return ( 
      
      <div>
            <p>{User}</p>
    </div>
    )
}

export default List
