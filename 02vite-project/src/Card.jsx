function Card(props){
 return(
    <>
    
    <div className="Card">

        <div className="logo">{props.logo}</div>
   

 
        <ul className="links">
            <h1>It's card</h1>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contect</a></li>
            <li><a href="/">Login</a></li>

        </ul>

        </div>
        <div className="content">
            <h2>it's 
            Mountain</h2>
            <p>A mountain is an elevated portion of the Earth's crust, generally with steep sides that show significant exposed bedrock. Although definitions vary, a mountain may differ from a plateau in having a limited summit area, and is usually higher than a hill, typically rising at least 300 metres (980 ft) above the surrounding land. A few mountains are</p>
        </div>
       
        
        
        
        
        
        
        </>
 );
}

export default Card;