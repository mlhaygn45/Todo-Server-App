import React from "react";


const Modal=({errorMesage="server hata aldı",setHasError,hasError})=>{

    return(
        <div style={{position:"absolute",
        top:0,
        left:0,
        height:"100vh",
        width:"100%",
        backgroundColor:"rgba(0,0,0,0.3)",
         display:"flex",
         alignItems:"center",
         justifyContent:"center",
         zIndex:10
         
         
         }}>
            <div className="container" style={{width:"30%",
            height:"20%",
             backgroundColor:"white",
              padding:"10px"
           
             }}>
                <h1 className="text-center ">error</h1>
                <p className="text-center">{errorMesage} </p>
                <div className="d-flex align-items-center justify-content-center gap-2">
                    
                    <button onClick={()=>setHasError(false)} className="btn btn-danger">close</button>
                </div>
            </div>

        </div>
    )
}

export default Modal