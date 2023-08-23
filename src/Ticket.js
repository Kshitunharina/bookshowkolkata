import React from "react";

function Ticket({ head, img, small, title }) {
  return (
    <div>
      <img src={img} width={300} height={450}></img> <br></br>
      <h2 style={{width:"260px"}}>{head}</h2> 
      <p>{small}</p>
      <p>{title}</p>
    </div>
  );
}

export default Ticket;
