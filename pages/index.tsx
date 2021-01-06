
import { useState } from 'react'
import Axios from "axios"
import styles from '../styles/Home.module.scss'

function Home(){
const [email, set_email] = useState<string>("")
const [password, set_password] = useState<string>("")

const submit = ()=>{


  Axios({
    method: "POST", 
    url: "/auth/login",
    data: {password, email}
  }).then(res=>{
    const data = res.data;

  }).catch(err=>{
    console.log(err)
  })
}

  return (
    <div className={styles.container}>
      
<h1 className="heading">Log In</h1>
<div>
<input type="text" value={email} onChange={(e)=>set_email(e.target.value)} ></input>
<input type="password" value={password}  onChange={(e)=>set_password(e.target.value)}></input>
<button onClick={submit}></button>
</div>
   
    </div>

  )
}

export default Home
