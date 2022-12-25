import React from 'react'

export default function About(props) {
// const[mystyle, setmystyle] = useState({

//     color : 'black',
//     backgroundColor: 'white'
// })

let mystyle={
    color: props.mode ==='dark'?'white':'black',
    backgroundColor: props.mode==='dark'?'#2e3133':'white'
}

// const [btntext, setBtnText] =useState("Enable Dark Mode")

// const toggleStyle = ()=>{
//     if(mystyle.color==='white'){
//         setmystyle({
//             color: 'black',
//             backgroundColor: 'white',
//             border: '2px solid white'
//         })
//         setBtnText("Enable Dark Mode")
//     }
//     else{
//         setmystyle({
//             color: 'white',
//         backgroundColor:'black'
//         })
//         setBtnText("Enable Light Mode")
//     }
// }


  return (
    <div className='container' style={mystyle}>
        <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" >
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
              <strong>Analyze your text</strong> 
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
                Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character or reading time.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
                <strong>Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
                Textutils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports number of words and characters. Thus it is sutable for writing text with word / character limits.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
                <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
                This word counter software works in any web browser such as chrome , Firefox, Safari,Opera. 
            </div>
            </div>
        </div>
        </div>
        {/* <div className="container my-3">
            <button type="button" className="btn btn-primary" onClick={toggleStyle}> {btntext}</button>

        </div> */}
        
    </div>
  )
}
