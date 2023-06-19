import "../App.css"


function Card(props){
    return(
        <div className="Rokiba">
            <div className="upper" style={{backgroundColor: props.color}}>
                <div className="imagecircle">
                    <img src={props.image} alt="" />
                </div>
            </div>
            <div className="lower">
                <div className="writeUp">
                    <h1>{props.text}</h1>
                    <p>{props.write}</p>
                </div>
                <div className="btn">
                    <button></button>
                    <button></button>
                </div>
            </div>
            <div className="circle"></div>
        </div>
    )
}
export default Card