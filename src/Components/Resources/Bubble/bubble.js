import './bubble.css'

function Bubble(props) {
    return (
       <a href={props.link} target="_blank" rel='noreferrer'>
            <div className="bubble">
                {props.icon}
            </div>
       </a>
    );
}

export default Bubble;