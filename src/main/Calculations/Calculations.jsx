

import "./Calculations.css"

function Calculations(props) {

    function billChange(e) {
        props.billHandle(e.target.value)
        
    }
   
    function tipChangeHandle(e){
        props.tipHandle(e.target.id || e.target.value );
       
    }
  
    function peopleChange(e) {
        props.peopleHandle(e.target.value)
      
        

    }
    return (
        <div className="calculations" >
            <div className="calculations__Bill">
                <label htmlFor="bill">Bill</label>
                <input min={0} id="bill" name="bill" type="number" placeholder="0" onChange={billChange} value={props.billAmount} />
            </div>
            <div className="calculations__Tip">
                <label>Select Tip %</label>
                <div className="calculations__Tip-buttons" >
                    {[.05, .1, .15, .25, .50].map((val, index) => <input id={val} key={val} className={props.activeButtonAmount == val ? `active` : ""} type="button" name={`button ${index}`} onClick={tipChangeHandle} value={`${val * 100}%`} />)}
                    <input type="number" value={props.customAmount} placeholder="Custom" onChange={tipChangeHandle} min={0} />
                </div>
            </div>
            <div className="calculations__NrPl">
                <label htmlFor="nrPl">Number of People</label>
                {props.showPeopleError ? <p className="error-Message">can't be zero</p> : ""}
                <input min={0} id="nrPl" className={props.showPeopleError ? `input-error` : ""} name="nrPl" type="number" placeholder="0" onChange={peopleChange} value={props.peopleAmount} />

            </div>



        </div>
    );
}

export default Calculations;