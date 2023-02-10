
import "./Card.css"
function Card(props) {
    return ( 
        <main className={`main ${props.classname}`}>
            {props.children}
        </main>
     );
}

export default Card;