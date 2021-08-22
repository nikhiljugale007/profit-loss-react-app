import React from 'react';
import './App.css';
import profit1 from './profit1.gif'
import loss1 from './loss1.gif'
import neutral1 from './neutral1.gif'
function App() {
    const [initialPrice,setInitialPrice] = React.useState();
    const [quantitiy,setQuantity] = React.useState();
    const [currentPrice,setCurrentPrice] = React.useState();
    const [message,setMessage] = React.useState();
    const [classname,setClassName] = React.useState("normal");
    const [image,setImage] = React.useState();
    const calculate = () =>{
        var margin = currentPrice*quantitiy - initialPrice*quantitiy;
        var percent = ((margin)/(initialPrice))*100;
        if(margin > 0){
            if(percent > 50){
                setClassName("green");
                setMessage(`Congratulation. You have made a great profit of ${margin}  or ${percent}% 📈 `)
            }
            else{
                setClassName("normal");
                setMessage(`You have made profit of ${margin}  or ${percent}% 📈 `)
            }
            setImage(profit1);
        }
        else if(margin < 0){
            if(percent*(-1) > 50){
            setMessage(`Oh no. You have made BIG loss of ${margin*(-1)} or ${percent*(-1)}% 📉 `)
            setClassName("red");
            }
            else{
                setClassName("normal");
                setMessage(`You have made loss of ${margin*(-1)} or ${percent*(-1)}% 📉 `)
            }
            setImage(loss1);
        }
        else{
            setClassName("normal");
            setImage(neutral1);
            setMessage(`Its neither profit nor loss`)
        }
    }
  return (
        <div className={classname}>

      <h1>Stock Profile & Loss Calculator</h1>
      <h4>Intial Price</h4>
      <input placeholder="Initial price of Stock" value={initialPrice} onChange={(e)=> setInitialPrice(e.target.value)}></input>
      <h4>Quantity of Stocks</h4>
      <input placeholder="Quantity of Stocks" value={quantitiy} onChange={(e)=> setQuantity(e.target.value)}></input>
      <h4>Current Price</h4>
      <input placeholder="Current Price" value={currentPrice} onChange={(e)=>setCurrentPrice(e.target.value)}></input>
      <button onClick={calculate}>calculate</button>
      <h1>{message}</h1>
    <img src={image} ></img>
    </div>
  );
}

export default App;
