
import React,{ useState } from "react";
import "./style.css";
import Footer from "./footer";

function App() {
const initalvVal =  [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
]
  const [char,setChar] = useState("x")
  const [matrix, setMatrix] = useState(initalvVal);
  const [winner ,setWinner] =useState('')
  const [count,setCount] = useState(1)

  const getbgClass = (value) => {
    if (value === "x") return "yellow";
    if (value === "0") return "orange";

    return "";
  };

  const checkWinner=()=>{
    // left to right
    if( matrix[0][0] && matrix[0][0] === matrix[0][1] && matrix[0][1] === matrix[0][2]){
setWinner(matrix[0][0] + " is the winner ")
    };
    if( matrix[1][0] && matrix[1][0] === matrix[1][1] && matrix[1][1] === matrix[1][2]){
      setWinner(matrix[1][0] + " is the winner ")
          };
          if(matrix[2][0] && matrix[2][0] === matrix[2][1] && matrix[2][1] === matrix[2][2]){
            setWinner(matrix[2][0] + " is the winner ")
                };

                // top to bottom
                if(matrix[0][0] && matrix[0][0] === matrix[1][0] && matrix[1][0] === matrix[2][0]){
                  setWinner(matrix[0][0] + " is the winner ")
                      };
                      if(matrix[0][1] && matrix[0][1] === matrix[1][1] && matrix[1][1] === matrix[2][1]){
                        setWinner(matrix[0][1] + " is the winner ")
                            };
                            if(matrix[0][2] && matrix[0][2] === matrix[1][2] && matrix[1][2] === matrix[2][2]){
                              setWinner(matrix[0][2] + " is the winner ")
                                  };

                                  // check dimontaitinal

                                  if(matrix[0][0] && matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2]){
                                    setWinner(matrix[0][0] + " is the winner ")
                                        };

                                        if(matrix[0][2] && matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0]){
                                          setWinner(matrix[0][2] + " is the winner ")
                                              };

                                              if(count === 9){
                                                setWinner("The Match Has Been Drawn")
                                              }

                  

  }
  const handlClick = (r,c) =>{
    if(matrix[r][c]) return;
    const tempmatrix = [...matrix];
    tempmatrix[r][c] = char;
    setMatrix(tempmatrix)

    setChar(char === "x" ? "0" : "x");
    setCount(count +1)
    checkWinner()
 
  }

  
  return (
    <div className="app container">
      <div className="header align-center">Tic Toc App</div>

      <div className="align-center board">
        {!winner && <p>{char} turn now</p>}
        
        <div className="gameboard">
          {/* {winner} */}
          { winner || matrix.map((row, rindex) => (
            <div className="row">
              {row.map((col, cindex) => (
                <div
                onClick={()=>handlClick(rindex,cindex)}
                  className={`cell align-center ${getbgClass(
                    matrix[rindex][cindex]
                  )}`}
                >
                  {matrix[rindex][cindex]}
                </div>
              ))}
            </div>
          ))}
        </div>
       <button onClick={()=>{setMatrix(initalvVal);setWinner("");setCount(1)}} className="btn">Reset Game</button>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

 
 
 
 
 
 