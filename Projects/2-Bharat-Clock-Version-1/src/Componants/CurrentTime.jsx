let CurrentTime = () =>{
  let Time =  new Date();
  return <p className="lead">
    This is the Current Time: {Time.toLocaleDateString()}
    - {Time.toLocaleTimeString()}
  </p>
}

export default CurrentTime;