import pic1 from '../images/bg1.avif'
import pic2 from '../images/cock.avif'
import pic3 from '../images/cock4.avif'
import pic4 from '../images/food.webp'
import '../css/random.css'

const RandomInfo = () =>{
    return (
        <div className="info">
            <h1>Some Random Information</h1>
            <main className="details">
                <div className="information">
                    <div className="picture">
                        <img src={pic1} alt="pic1" width={200} height={200} />
                    </div>
                    <p>this is some subtext under an illustration or image</p>
                </div>
                <div className="information">
                    <div className="picture">
                        <img src={pic2} alt="pic2" width={200} height={200}/>
                    </div>
                    <p>this is some subtext under an illustration or image</p>
                </div>
                <div className="information">
                    <div className="picture">
                        <img src={pic3} alt="pic3" width={200} height={200} />
                    </div>
                    <p>this is some subtext under an illustration or image</p>
                </div>
                <div className="information">
                    <div className="picture">
                        <img src={pic4} alt="pic4" width={200} height={200} />
                    </div>
                    <p>this is some subtext under an illustration or image</p>
                </div>
            </main>
        </div>
    )
}

export default RandomInfo