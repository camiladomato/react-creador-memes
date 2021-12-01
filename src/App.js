import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import html2canvas from "html2canvas";

function App() {

  const[linea1,setLinea1]= useState('');
  const[linea2,setLinea2]= useState('');
  const[imagen,setImagen]= useState('');

  const onChangeLinea1= function (evento){
    setLinea1(evento.target.value)
  }
  const onChangeLinea2= function (evento){
    setLinea2(evento.target.value)
  }
  const onChangeImagen= function (evento){
    setImagen(evento.target.value)
  }
  const onClickExportar= function (evento){
   
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = "meme.png"
      link.href = img;
      link.click();
  });
  }


  return (
  <div className="App">
     <select onChange={onChangeImagen}>
       <option value="meme-1">1</option>
       <option value="meme-2">2</option>
       <option value="meme-3">3</option>
       <option value="meme-4">4</option>
       <option value="meme-5">5</option>
       <option value="meme-6">6</option>
       <option value="meme-7">7</option>
       <option value="meme-8">8</option>
       <option value="meme-9">9</option>
       <option value="meme-10">10</option>

     </select> <br/>
     <input onChange={onChangeLinea1} type="text" placeholder="Linea 1"/> <br/>
     <input onChange={onChangeLinea2} type="text" placeholder="Linea 2"/> <br/>
     <button onClick={onClickExportar} >Exportar imagen</button>
    

    <div className="meme" id="meme">
      <span>{linea1}</span><br/>
      <span>{linea2}</span>
      <img src={"/img/" + imagen + ".png"} />
    </div>
  </div> 
  );
}

export default App;
