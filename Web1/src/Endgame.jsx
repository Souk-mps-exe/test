
import Button from './Button/Button.jsx';

function Endgame(props){
    return (
        <div className="endgame">
            <h1>{props.text}</h1>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <p>{props.text3}</p>
            <br></br>
            <Button/>
        </div>
    )
}

export default Endgame