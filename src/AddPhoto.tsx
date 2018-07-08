import * as $ from "jquery"
import * as React from 'react';
import './AddPhoto.css';


interface Iprops {
    imgData:any
    handleAddPhoto:(event:any)=>void
}
class AddPhoto extends React.Component<Iprops,any> {

    public render() {
        return (
            <div className="addPhoto" onClick={this.openBrowseWindow} >
            <input type="file" className="hiddenField" name="picField" onChange={this.photoAdded} />
            </div>
    );
    }
    public openBrowseWindow = (event:any)=>{
        $(".hiddenField").trigger("click")

    }
    public photoAdded =(event:any)=>{
        this.props.handleAddPhoto(event)
}

}

export default AddPhoto;