import Image from 'next/image';
import React from 'react'
import '../styles/Home.module.css';

const PhotoCard = ({}
) => {
  return (
    <>
      <div className='p-3'>
      <div className='image-background'
      style={{height:576, vw:100}}
      >
          <div className="">
            <h1>Proyecto Barrancas</h1> 
            
            <figure class="text-center">
              <blockquote class="blockquote">
                <p class="px-3 mb-0">
            14 Ahora bien, ¿cómo invocarán a aquel en quien no han creído? ¿Y cómo creerán en aquel de quien no han oído? ¿Y cómo oirán si no hay quien les predique? 15 ¿Y quién predicará sin ser enviado? Así está escrito: «¡Qué hermoso es recibir al mensajero que trae[b] buenas nuevas!»
            </p>
            </blockquote>
              <figcaption class="lead ">
              <strong>La Biblia</strong> <cite title="Source Title"> <strong>Romanos 10:14-15</strong></cite>
            </figcaption>
            </figure>
          </div>
      </div>
    </div>
    </>
  )
}
export default PhotoCard