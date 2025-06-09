import React from 'react'
import { useState } from 'react';
import Table from './Table';
let arr=[
    {
     name:'arun',
     role:'coach',
     iplTeam:'RCB',
     salary:'1 croces',
     nickName:'ravi',
      age:45,
      password:'arun@123',
      gender:'male'
    },
  {
    name:'virat',
     role:'batter',
     iplTeam:'RCB',
     salary:'2 croces',
     nickName:'chiku',
      age:35,
      password:'virat@123',
      gender:'male'
  },
  {
     name:'smriti',
     role:'batter',
     iplTeam:'RCB',
     salary:'20 lakhs',
     nickName:'queen',
      age:29,
     password:'smriti@123',
      gender:'female'
    },
    {
     name:'rohit',
     role:'batter',
     iplTeam:'MI',
     salary:'1.5 croces',
     nickName:'hitman',
      age:36,
     password:'rohit@123',
     gender:'male'
    },
    {
     name:'kaur',
     role:'batter',
     iplTeam:'MI',
     salary:'20 lakhs',
     nickName:'kaur',
      age:33,
      password:'kaur@123',
      gender:'female'
    }
]
function Cart() {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [emp,setEmp]=useState([]);
  const [show,setShow]=useState(false);
  
  const clickbtn=()=>{
    let filter=arr.find((e)=>{
      if(e.name===username && e.password===password)
       return e;
      else return NaN;
      })

    
    setEmp(filter);
    setShow(true)
  }
  return (
    <>
       {
        !show && (
          <div className="container ">
          <div className="row  ">
          <div className="card col-4 m-auto mt-5">
              <div className="card-header text-center bg-info">
                  <h1>LogIn</h1>
              </div>
              <div className="card-body text-center">
                  <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className='form-control' placeholder='Enter Username'/><br/><br/>
                  <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control' placeholder='Enter Password'/><br/><br/>
                  <button className="btn btn-primary" onClick={clickbtn}>Login</button>
              </div>
          </div>
          </div>
      </div>
        )
       }
       { show &&
         (
          <div className="container">
         <div className="row  ">
         <div className="card col-4 m-auto mt-5">
         <div className="card-header text-center bg-info">
                  <h1><i>Employee Details</i></h1>
              </div>
             <div className="card-body text-center">
                  <h2>Name:-{emp.name}</h2>
                  <h2>Role:-{emp.role}</h2>
                  <h2>Age:-{emp.age}</h2>
                  <h2>Gender:-{emp.gender}</h2>
             </div>
         </div>
         </div>
     </div>
            
         )
       }
       <br /><br />
       { emp.role==='coach' && <Table arr={arr}/>}
    </>
  )
}

export default Cart