import "../styles/Gem.css";
function Gem(props) {

    return (
        <div className = "gem-container">
             <div className = "gem">
            <div className = {"images " + props.name}></div>
            <h4 className = "gem-name">{props.name}</h4>
            <h4 className = "gem-cost">{props.cost}</h4>
            </div>
        </div>
        
    );
}

export default Gem;