import './Home.css';
import pimgHome1 from '../../assets/petitimghome4.jpg'
import pimgHome2 from '../../assets/petitimghome.jpg'
import pimgHome3 from '../../assets/petitimghome3.jpg'
import pimgHome4 from '../../assets/petitimg1home.jpg'
import pimgHome5 from '../../assets/petiimghome6.jpg'
import pimgHome6 from '../../assets/petitimghome5.jpg'
export default function Home() {
  return (
    <>
        <div className="bgHome">
          
            <div className="brandyDesign">
                <h1>Brandy Design</h1>
                <h3>Agence AudioVisuel</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, quos aliquid laborum quisquam optio dolore tenetur, amet corporis unde praesentium iure voluptates illo sequi commodi debitis, aliquam harum pariatur eaque.</p>
                <button className='cool-button'>Nous Ecrire</button>
            </div>
            <div className="imgHome">
                <div className="romImgHome1">
                  <div className="encadrementimg">
                    <img src={pimgHome1} className='img1' alt="" />
                  </div>
                  <div className="encadrementimg img22">
                    <img src={pimgHome2} className='img2' alt="" />
                  </div>
                </div>
                <div className="romImgHome2">
                  <div className="encadrementimg">
                    <img src={pimgHome3} className='img3' alt="" />
                  </div>
                  <div className="encadrementimg img44">
                    <img src={pimgHome4} className='img4' alt="" />
                  </div>
                </div>
                <div className="romImgHome3">
                  <div className="encadrementimg">
                    <img src={pimgHome5} className='img5' alt="" />
                  </div>
                  <div className="encadrementimg img66">
                    <img src={pimgHome6} className='img6' alt="" />
                  </div>
                </div>
            </div>
        </div>
    </>
  );
}
