import kegiatan1 from '../assets/kegiatan1.jpg';
import kegiatan2 from '../assets/kegiatan2.jpg';
import kegiatan3 from '../assets/kegiatan3.jpg';
import CardContent from './CardContent';

const Main = ()=> {
    return (
        <div className="container">
            <div className="row">
              <div className="col-12 text-center my-5">
                  <h1>Kegiatan</h1>
              </div>
              <div className="row justify-content-center">
              <div className="col-lg-4 col-12">
                  <CardContent image={kegiatan1} title= "Upacara Bendera" />
              </div>
              <div className="col-lg-4 col-12">
                  <CardContent image={kegiatan3} title= "Lomba 17 Agustus" />
              </div>
              <div className="col-lg-4 col-12">
                  <CardContent image={kegiatan2} title= "Pramuka SMP" />
              </div>
              </div>
              </div>
            </div>
    )
}
export default Main;