
import "./presupuestos.css"
import image1 from '../../images/alessio-zaccaria-MplUOXqEUK0-unsplash.jpg'
import image2 from '../../images/austin-distel-wD1LRb9OeEo-unsplash.jpg'
import image3 from '../../images/charlesdeluvio-Lks7vei-eAg-unsplash.jpg'



export default function Presupuestos() {
    return (
        <div className="grid_container-pres">
            <div className="container-info-pres">
                <h1 className="title-pres">Presupuestos <br /> Personalizados</h1>

                <span className="parrafo-pres">
                    Si te gustaria contratar alguno de nuestros servicios o recibir mas informacion al respecto
                    contactanos para una asesoria gratuita con nuestro equipo.
                </span>
                <button className="button-presupuesto">MAS INFO</button>
            </div>
            <div className="grid_container-pres-img">
                <img className="image_pres" src={image1} alt="" />
                <img className="image_pres" src={image2} alt="" />
                <img className="image_pres image_pres-large" src={image3} alt="" />
            </div>
        </div>
    )
}

















// export default function Presupuestos() {
//     return (
//         <div className={s["grid-container"]}>
//             <div>
//                 <h1 className={s.presu}>Presupuestos<br></br>Personalizados</h1>

//                 <h3 className={s.parrafo}>
//                     Si te gustaria contratar alguno de nuestros servicios recibir mas informacion al respecto
//                     contactanos para una asesoria gratuita con nuestro equipo
//                 </h3>
//                 <button className={s.buttons}>MAS INFO</button>
//             </div>
//             <div className={s["grid-container"]}>
//                 <div className={s.sub}>
//                 <img className={s.tradin2} src={image1} alt=""/>
//                 </div>

//                 <div className={s.sub}>
//                 <img className={s.tradin1} src={image2} alt=""/>
//                 </div>

//                 <div className={s.image3}>
//                 <img src={image} alt=""/>
//                 </div>
//             </div>
//         </div>


//     )
// }



