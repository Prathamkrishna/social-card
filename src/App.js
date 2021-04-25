import React, {useState} from 'react';
import './app.css';
import pinkbg from './images/pinkbackground.png';
import yellowbg from './images/yellowbackground.png';
import bluebg from './images/bluebackground.png';
import brownbg from './images/brownbackground.png';
import whitebg from './images/whitebackground.png';
import orangebg from './images/orangebackground.png';
import blackcircle from './images/nameofperson.png';

function App(){
    const [source, setSource ] = useState(pinkbg);
    const [state, setState] = useState({eventCount: 0, title:'Hey! This is my social card!'});
    const [subt, setSubt] = useState({eventCount: 0, subtitle:''})
    const [name, setName] = useState({eventCount: 0, namegiven: ''})
    const [handle, setHandle] = useState({eventCount: 0, socialhandle: ''})
    function titleInputText(event){
        setState({title: event.target.value})
    }
    function subtitleInputText(event){
        setSubt({subtitle: event.target.value})
    }
    function nameInputText(event){
        setName({namegiven: event.target.value})
    }
    function socialHandleInput(event) {
        setHandle({socialhandle: event.target.value})
    }
    function  Customize(x){
        if(x === "pink"){
            setSource(pinkbg)
        }
        if(x === "yellow"){
            setSource(yellowbg)
        }
        if(x === "blue"){
            setSource(bluebg)
        }
        if(x === "brown"){
            setSource(brownbg)
        }
        if(x === "orange"){
            setSource(orangebg)
        }
        if(x === "white"){
            setSource(whitebg)
        }
    }
    const chosentemplate= {
        width: '600px',
        height: '300px',
        marginBottom: '20px'
    }
    return(
        <div>
            <div className="templates">
                <div className="pinkback">
                    <img src={pinkbg} alt="pinkbackground" onClick={() => Customize("pink")} ></img>
                </div>
                <div className="yellowback">
                    <img src={yellowbg} onClick={() => Customize("yellow")} alt="yellow background"></img>
                </div> 
                <div className="blueback">
                    <img src={bluebg} onClick={() => Customize("blue")} alt="blue background"></img>
                </div>
            </div>
            <br />
            <div className="templates">
                <div className="brownback">
                    <img src={brownbg} onClick={() => Customize("brown")} alt="brown background"></img>
                </div>
                <div className="orangeback">
                    <img src={orangebg} onClick={() => Customize("orange")} alt="orange background"></img>
                </div>
                <div className="whiteback">
                    <img src={whitebg} onClick={() => Customize("white")} alt="white background"></img>
                </div>
            </div>
            <hr className="lines" />
            <br />
            <div className="chosenone">
                <div className="topsec">
                    <div>
                        <img src={blackcircle} alt="small-abrev" className="blackcirclesec"></img>
                    </div>
                    <div className="namesection">
                        {name.namegiven}
                    </div>
                    <div className="handlesection">
                        @{handle.socialhandle}
                    </div>
                </div>
                <br />
                <img src={source} alt="chosentemplate" style={chosentemplate} className="template"></img>
                <div className="imagetext">{state.title}</div>
            </div>
            <div className="belowimagetext">
                {subt.subtitle}
            </div>
            <hr className="lines" />
            <div className="inputboxes">
                <span>TITLE TEXT: {'       '}<input id="titleinput" type="text" size="50" maxLength="80" onChange={titleInputText}></input></span>
                <p>
                    SUBTITLE TEXT: <input id="subtitleinput" type="text" size="47"  maxLength="150" onChange={subtitleInputText}></input>
                </p>
                <p>
                    ENTER YOUR NAME HERE: <input id="nameinput" type="text" size="30" maxLength="20" onChange={nameInputText}></input>
                </p>
                <p>
                    ENTER YOUR SOCIAL HANDLE: <input id="socialhandleinput" type="text" size="20" maxLength="20" onChange={socialHandleInput}></input>
                </p>
            </div>
            <div className="footersec">
                Built by <a href="https://prathamkrishna.herokuapp.com/" target="_blank" rel="noreferrer">Pratham Krishna</a>
            </div>
        </div>
    )
}

export default App;