import * as React from 'react';
import './App.css';
import Photo from './Photo'

import AddPhoto from "./AddPhoto";
import logo from './logo.svg';

import * as uuidv1 from 'uuid/v1'


interface Istate {
    imgData:any
}
class App extends React.Component<any,Istate> {
    constructor(props:any){
        super(props)
        this.state = {
            imgData:JSON.parse(localStorage.getItem('imgData')) || {}
        }

    }
  public render() {
    return (
      <div className="App">
          {console.log("start",this.state.imgData)}
        <header className="App-header">
            <input type="button" onClick={this.clearData} />
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>

        </header>
          <AddPhoto imgData={this.state.imgData} handleAddPhoto ={this.handleAddPhoto} />

          {this.printPhotos()}

      </div>
    );
  }
  public printPhotos=()=>{
        return Object.keys(this.state.imgData).map((uuid)=>{

            return <Photo imgUrl={this.state.imgData[uuid]} key={uuid} />
        })
  }
  public clearData=()=>{
      localStorage.clear();
      this.setState({imgData:{}})
  }
  public handleAddPhoto=(event:any)=>{
          const tgt = event.target;
          const files = tgt.files;


          if (FileReader && files && files.length) {
              const fr = new FileReader();
              fr.onload =  ()=> {
                  const imgData = this.state.imgData;

                  localStorage.setItem("imgData", JSON.stringify(imgData));
                  this.setState((prevState)=>{
                      {
                          prevState.imgData[uuidv1()] = fr.result;
                          return prevState
                      }
                  })
              }
              fr.readAsDataURL(files[0]);

          }

          // Not supported
          else {
              // fallback -- perhaps submit the input to an iframe and temporarily store
              // them on the server until the user's session ends.
          }

      }
  }



export default App;
