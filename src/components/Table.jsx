import React from 'react'

function Table({arr}){
  return (
    <>
      { 
         <table className="table">
         <thead>
             <tr className='table table-dark'>
                 <td>Name</td>
                 <td>Role</td>
                 <td>Salary</td>
                 <td>Nickname</td>
                 <td>Age</td>
                 <td>IPL</td>
                 <td>Gender</td>
             </tr>
             </thead>
             <tbody>
                {
                    arr.map(e=>{
                        return(
                            <tr key={e.name}>
                                
                                <td>{e.name}</td>
                                <td>{e.role}</td>
                                <td>{e.salary}</td>
                                <td>{e.nickName}</td>
                                <td>{e.age}</td>
                                <td>{e.iplTeam}</td>
                                <td>{e.gender}</td>
                            </tr>
                        )
                    })
                }
             </tbody>
        
       </table>
      }
    </>
  )
}

export default Table