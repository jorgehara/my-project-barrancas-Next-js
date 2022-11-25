import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Layout from '../components/Layout'
import '../public/cruz.jpg';

const Conocenos = () => {
  return (
   <>
    <Layout>
      <div className="container">
        <div class="row familias-card card border-success mb-3 rounded">
          <h3 class="card-tittle border-border p-3">Familia Cuellar-Sivistum</h3>

          <div className='container text-center rounded'>
      <div className='row justify-content-md-center mx-3 rounded'>
      <div class="col border-success mb-3 p-3 rounded bg-dark.bg-gradient">
      <Image
          rounded
          src={"/cruz.jpg"}
          width={270}
          height={250}
          alt="image"
          />
      </div>
      <div class="col border-success rounded mb-3 p-3 ">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
          Some quick example text to build on the card title and make up the bulk of the cards content.
          Some quicsssssk example text stso build on the card title and make up the bulk of the cards content.
          Some quick example text to build on the card title and make up the bulk of the cards content.
        </p>
      </div>
    </div>
    </div>
        </div>

        <div class="row card"
          >
          <div class="card-body rounded"
          >
            <h4 class="card-title">Erika y Sergio</h4>
            <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card content
            Some quick example text to build on the card title and make up the bulk of the card content
            Some quick example text to build on the card title and make up the bulk of the card contentSome quick example text to build on the card title and make up the bulk of the card content.
            </p>
            <Link href="/contactos" class="card-link">
            Contactonos
            </Link>
          </div>
      </div>






        {/* <div class="container text-center">
  <div class="">
    <div class="col">
      <div class="familias-card card border-success mb-3" 
        style={{width:'39rem'}}
        >
        <div class="card-body">
          <h4 class="card-title">Familia Cuellar-Sivistum</h4>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
          Some quick example text to build on the card title and make up the bulk of the cards content.
          Some quicsssssk example text stso build on the card title and make up the bulk of the cards content.
          Some quick example text to build on the card title and make up the bulk of the cards content.</p>
        </div>
      </div>


      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    <div class="col-4">
      <div class="p-3 border bg-light">Custom column padding</div>
        <div class="card-body">
          <Image
          src={"/cruz.jpg"}
          width={50}
          height={50}
          alt="image"
          />
        </div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
  </div>
        </div>


      <div className='row row col-12 '>


      <div class="familias-card card border-success mb-1" 
        style={{width:'39rem'}}
        >
        
        <div class="card-body">
          <h4 class="card-title">Familia Aguirre-Rodriguez</h4>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
          Some quick example text to build on the card title and make up the bulk of the cards content.
          Some quick example text to build on the card title and make up the bulk of the cards content.
          Some quick example text to build on the card title and make up the bulk of the cards content.</p>
        </div>

  
      </div>

      </div>
     */}

    
    
      </div>

    </Layout>
   </>
  )
}
export default Conocenos;