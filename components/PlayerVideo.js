import React from 'react'
import ReactPlayer from 'react-player'

const PlayerVideo = ({videos}) => {
  return (
    <div>
        <div className='player-wrapper'>

          {/* <div>
            {videos}
          </div> */}

        <ReactPlayer
          className='react-player'
          url={videos}
          width='100%'
          height='100%'
        />
      </div>
    </div>
  )
}

export async function getStaticProps() {

  const response = await fetch ('https://www.youtube.com/watch?v=CbEOO1v13h8&ab_channel=Patagoniaendosruedas')



  // aqui se puede conectar con mongodb.conect() 
  //find() etc etc...
  const { videos } = await response.json()
  return { 
    props: {videos
    }
  }
}



//   const url = 'https://www.youtube.com/watch?v=CbEOO1v13h8&ab_channel=Patagoniaendosruedas'
//   const res =  await fetch(url)
//   const video =  await res.json()
//   return {
//     props: {
//       video: video
//     }, // will be passed to the page component as props
//   }
// }



export default PlayerVideo