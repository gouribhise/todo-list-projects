import React, { useEffect } from 'react'

const Alert = ({ type, msg, removeAlert, list }) => {
 
    useEffect(()=>{
        const timeout=setTimeout(()=>{
          removeAlert()
        },3000)
        return ()=>clearTimeout(timeout)
       },[list,removeAlert])
    return <div className={`alert alert-${type}`}>
   <p className="alerttext">{msg}</p>
    
  </div>
}

export default Alert
