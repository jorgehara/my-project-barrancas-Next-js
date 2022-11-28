import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'
import PlayerVideo from '../components/PlayerVideo'

const nuestraMision = () => {
  return (
    <>
    <Layout>
      <div className="container">
        <div class="row mb-3 rounded">
    </div>
    </div>
     
      <div class="row card">
      </div>

      <div class="row card"
          >
          <div class="card-body rounded"
          >
            <h4 class="card-title">Nuestra Colaboración</h4>
            <div class="card-text">
            <PlayerVideo/>
            </div>
            <Link href="/contactos" class="card-link">
            Contactonos
            </Link>
          </div>
      </div>
    </Layout>
   </>
  )
}

export default nuestraMision