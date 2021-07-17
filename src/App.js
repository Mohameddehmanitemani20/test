import logo from './logo.svg';
import './App.css';

function App() {
  const video= <div className='d-flex'>
  <div style={{height:94,width:160,marginRight:8}}>
    <img src="https://i.ytimg.com/vi/XaHVGf40xZ8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAbjhKr9HZuv2f0Tn3BAMOftbSO1Q" alt='EID' width='100%'/>
  </div>
  <div>
    <h3 style={{fontSize:14}}>Eid Takbir 2021 - Mostafa Abo Rawash | تكبيرات العيد كاملة بصوت مصطفى ابورواش - مكرره لمده ساعه </h3>
    <p style={{fontSize:10}}> الشيخ عبد الباسط عبد الصمد14 </p>
    <p>14 k vues il y a 2 mois</p>
   
  </div>

</div>

const list=[video,video,video]
list.push(video)
/**
 * appel database
 * return data
 * list.push(data)
 */
  return (
    <div className='container-fluid' style={{ border: '4px solid' }}>
      <div className='row' style={{ border: '4px solid blue', height: "100%" }}>
        <div className='col-8' style={{ border: '4px solid red', height: "100%" }}>
          <iframe width="800" height="315" src="https://www.youtube.com/embed/UwqjXsL4irw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div>
            <p>Eid Takbir 2020 - Mostafa Abo Rawash | تكبيرات العيد كاملة بصوت مصطفى ابورواش</p>
            <p>2 807 171 vuesSortie le 19 mai 2020</p>
          </div>
        </div>
        <div className='col-4' style={{ border: '4px solid red', height: "100%" }}>
          <div className='d-flex justify-content-between'>
            <span>Up next</span>
            <span>AUTOPLAY</span>
          </div>
          {list.map(video=>(video))}
         
        </div>

      </div>

    </div>
  );
}

export default App;
