function RandomNum(){
  let random = Math.random()*20;
 return <div>
  <h1 style={{'background-color': '#5114'}}>Random Number is : {Math.floor(random)}</h1>
 </div>
}
export default RandomNum;