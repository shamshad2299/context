import React from 'react'

export default function Alert({alert}) {
  return (
    <div>
      
 {  alert && <div className={`alert alert-${alert.type}`} role="alert">
   <strong>{alert.type}</strong> : {alert.msg} 
</div>}
    </div>
  )
}
