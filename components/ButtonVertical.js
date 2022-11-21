import Link from 'next/link'
import React from 'react'

const ButtonVertical = () => {
  return (
    <>
   <div class="btn-group" role="group" aria-label="Basic example">
    {/* <div class=" mt-2 gx-5"> */}
  <button type="button" class="btn btn-success">
  <Link href="/conocenos" className="nav-link" aria-current="page">
    Conocenos! 
   </Link></button>

  <button type="button" class="btn btn-info"><Link href="/nuestraMision" className="nav-link" aria-current="page">Nuestra Misión
</Link></button>


  <button type="button" class="btn btn-warning"><Link href="/contactos" className="nav-link" aria-current="page">
    Contactanos
</Link></button>
</div>
    
    </>
  )
}

export default ButtonVertical