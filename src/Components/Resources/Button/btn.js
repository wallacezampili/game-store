import "./btn.css";

function Button({text, action, link}) {
    return ( 
        <button className="btn" onClick={action} href={link}>
            {text}
        </button>
     );
}

export default Button;