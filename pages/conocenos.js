import Image from 'next/image';
import React from 'react'
import Layout from '../components/Layout'
import '../public/cruz.jpg';

const Conocenos = () => {
  return (
   <>
    <Layout>
        <h1>Conocenos</h1>

        <div class="container text-center">
  <div class="">
    <div class="col-4">
      <div class="familias-card card border-success mb-3" 
        style={{width:'39rem'}}
        >
        <div class="card-body">
          <h4 class="card-title">Familia Cuellar-Sivistum</h4>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
          Some quick example text to build on the card title and make up the bulk of the cards content.
          Some quicsssssk example text stsssssssssssssso build on the card title and make up the bulk of the cards content.
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


    </Layout>
   </>
  )
}
export default Conocenos;