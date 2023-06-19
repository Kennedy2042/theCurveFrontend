import "./App.css"
import Card from "./components/Card"
import pics from "../src/components/img.jpg"
import pics1 from "../src/components/img1.jpg"
import pics2 from "../src/components/img3.png"


function Mypractice (){
  return(
    <div className="body">

      
      <Card
      image={pics}
      text="Angelina Jo"
      write="I am a frontend web developer"
      color="crimson"/>

      <Card
      image={pics1}
      text="Angelina Jo"
      write="I am a frontend web developer"
      color="purple"/>
      <Card
      image={pics2}
      text="Angelina Jo"
      write="I am a frontend web developer"/>
    
    
    </div>
  )
}

export default Mypractice 