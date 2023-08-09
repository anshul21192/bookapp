import "../security.css";
import * as React from 'react';
function SecuirtySearch(props){

    return    <div className="search_bar">
        <input type="search" placeholder="Search Security here..." />
       <div>
        <span>Select Type of Secuirty</span>
        <select name="" id="securityStatus" onClick={(e)=>props.chageq(e.target.value)} >
          <option value={'all'} >All</option>
          <option value={"Matured"}  >Matured</option>
          <option value={"Unmatured"} >Un-Matured</option>
        </select>
       </div>
      </div>
}

export default SecuirtySearch;