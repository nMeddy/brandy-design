import './NotreEquipe.css'
import React from 'react'
import MyCarousel from '../Caroussel/Caroussel'
import caroucel1 from '../../assets/notreequipe1.jpg'
import caroucel2 from '../../assets/notreequipe2.jpg'
import caroucel3 from '../../assets/notreequipe3.jpg'
export default function NotreEquipe() {
    const carouselData = [
        { id: 1, image: caroucel1 },
        { id: 2, image: caroucel2 },
        { id: 3, image: caroucel3 },
      ];
    const styleCaroucel = {
        width : '600px',
        boxShadow: '0 2px 4px rgba(255, 255, 255, 0.4)',
    }
    const styleImage = {
        width : '600px',
        margin : 'auto',
        // height : 'max-content'
    }
      
    return (
      <>
      <div className="bg-notreEquipe">
        <h4>Voici notre Equipe</h4>
        <div className="contentCaroucel">
            <MyCarousel carouselData={carouselData} styleCaroucel={styleCaroucel} styleImage={styleImage}/>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore animi ratione hic dolor. Aperiam amet ipsa fugit ad fuga modi sunt aspernatur, eligendi magnam corporis veritatis excepturi, voluptatem unde fugiat.
        Velit explicabo itaque laboriosam illo, maiores libero sapiente veniam et, officia ipsam reprehenderit optio. Nam ipsa perferendis temporibus esse assumenda animi repellat id dignissimos veniam, sit debitis deleniti nihil veritatis?
        Fugiat, ducimus unde reiciendis magnam voluptatem, cumque repellendus, quidem autem quaerat ipsam molestiae explicabo perspiciatis! Deserunt iure sapiente enim ipsa nulla vitae eaque. Debitis, est eius aspernatur explicabo maiores eligendi?</p>
      </div>
      </> 
      )
}