import {useState,useEffect} from "react";
import Card from "../Components/Card.jsx";
import Calculations from "./Calculations/Calculations.jsx";
import Amount from "./Amount/Amount.jsx";
import "./MainContent.css";




function MainContent() {
    // calculations
const [billAmount,SetBillAmount]=useState("");
const [tipAmount,SetTipAmount]=useState("");
const [peopleAmount,SetPeopleAmount]=useState("");

const [activeButtonAmount, SetActiveButtonAmount] = useState(null);
const [customAmount,setCustomAmount]=useState("");
const [showPeopleError, SetShowPeopleError] = useState(false);

//Amounts
let TipRef=0;
let FullAmountRef=0;


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

    if (billAmount > 0 && tipAmount >= 0 && peopleAmount > 0) {
        TipRef= (parseFloat((billAmount*tipAmount/100)/peopleAmount).toFixed(2));
        FullAmountRef=(parseFloat((billAmount+(billAmount*tipAmount/100))/peopleAmount).toFixed(2));  
    }else{
        TipRef=0.00;
        FullAmountRef=0.00;
    }


    return ( 
        <Card>
               <Calculations billHandle={billHandle} tipHandle={tipHandle} peopleHandle={peopleHandle}
             activeButtonAmount={activeButtonAmount}  showPeopleError={showPeopleError} customAmount={customAmount}
             billAmount={billAmount}  peopleAmount={peopleAmount} />
               <Amount tipRef={TipRef} amountRef={FullAmountRef} reset={clearAll} billAmount={billAmount} tipAmount={tipAmount}  peopleAmount={peopleAmount} />     
        </Card>
     );
}

export default MainContent;