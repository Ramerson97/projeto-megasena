function GeradorAleatorio(){
  const numeroAleatorio = Math.round(Math.random() * 60);
  return(
     <>
      <span>{numeroAleatorio}</span> 
     
     </>
  )
}

export default function Grupo() {
  return (
    <>
     <div class= "numeros">
     <GeradorAleatorio></GeradorAleatorio>
     <GeradorAleatorio></GeradorAleatorio>
     <GeradorAleatorio></GeradorAleatorio>
     <GeradorAleatorio></GeradorAleatorio>
     <GeradorAleatorio></GeradorAleatorio>
     <GeradorAleatorio></GeradorAleatorio>
     </div>
     
    </>
  )
};







