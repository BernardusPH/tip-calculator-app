import { useState,useEffect } from "react";
import Card from "../Components/Card.jsx";
import Calculations from "./Calculations/Calculations.jsx";
import Amount from "./Amount/Amount.jsx";
import "./MainContent.css";


function ParseFloat(str,val) {
    str = str.toString();
    str = str.slice(0, (str.indexOf(".")) + val + 1);
    return Number(str);  
}

function MainContent() {
    // calculations
const [billAmount,SetBillAmount]=useState("");
const [tipAmount,SetTipAmount]=useState("");
const [peopleAmount,SetPeopleAmount]=useState("");

const [activeButtonAmount, SetActiveButtonAmount] = useState(null);
const [showPeopleError, SetShowPeopleError] = useState(false);
const [customAmount,setCustomAmount]=useState("");


//Amounts
const [tipCash,setTipCash]=useState(0.00)
const [totalCash,setTotalTipCash]=useState(0.00)


useEffect(() => {
    if (billAmount > 0 && tipAmount >= 0 && peopleAmount > 0) {
        
        setTipCash(parseFloat((billAmount*tipAmount/100)/peopleAmount).toFixed(2));
      
        setTotalTipCash(parseFloat((billAmount+(billAmount*tipAmount/100))/peopleAmount).toFixed(2));
        
    }else{
        setTipCash(0.00);
        setTotalTipCash(0.00);
    }
  }, [billAmount, tipAmount, peopleAmount]);

  function clearAll(){
    SetBillAmount("")
    SetTipAmount("")
    SetPeopleAmount("")
    SetActiveButtonAmount(null)
    SetShowPeopleError(false)
    setCustomAmount("")
  }
function billHandle(val){
    SetBillAmount(Number(val) || "")
}
function tipHandle(val){
    if(val<1){
        SetTipAmount(Number(val)*100)
        SetActiveButtonAmount(val)
        setCustomAmount("")
    }else{
        SetTipAmount(Number(val) || "")
        SetActiveButtonAmount(val)
        setCustomAmount(val)
    }
    
}
function peopleHandle(val){
    SetPeopleAmount(Number(val)|| "")
    if(val==0) SetShowPeopleError(true)
    else SetShowPeopleError(false)
    
}
    return ( 
        <Card>
               <Calculations billHandle={billHandle} tipHandle={tipHandle} peopleHandle={peopleHandle}
             activeButtonAmount={activeButtonAmount}  showPeopleError={showPeopleError} customAmount={customAmount}
             billAmount={billAmount}  peopleAmount={peopleAmount} />
               <Amount tip={tipCash} total={totalCash} reset={clearAll} billAmount={billAmount} tipAmount={tipAmount}  peopleAmount={peopleAmount} />     
        </Card>
     );
}

export default MainContent;