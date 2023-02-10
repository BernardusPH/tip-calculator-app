
import "./Amount.css"
function Amount(props) {
    let showButton=( props.billAmount!="" || props.tipAmount!="" || props.peopleAmount!="");
    
    return (
        <div className="Amount">
            <div className="tip-Amount">
                <div>
                    <h2>Tip Amount</h2>

                    <span> / person</span>
                </div>
                <div className="tip-Amount-cash">
                    ${props.tip.toFixed(2)}
                </div>
            </div>

            <div className="total-Amount">
                <div>
                    <h2>Total</h2>

                    <span> / person</span>
                </div>

                <div className="total-Amount-cash">
                    ${props.total.toFixed(2)}
                </div>
            </div>
            <button className={`button ${showButton?"":"disabled"} `} onClick={ showButton? props.reset:null}>Reset</button>
        </div>
    );
}

export default Amount;