import React from "react";
import { renderToString } from "react-dom/server";
//import routes from "./routes";


  let content = renderToString(<div> WTF</div>);  
  console.log(content);
  export default content;
 
