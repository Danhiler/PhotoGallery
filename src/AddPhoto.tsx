import * as React from 'react';
import './AddPhoto.css';


interface Iprops {
    imgData:any
    handleAddPhoto:(event:any)=>void
}
class AddPhoto extends React.Component<Iprops,any> {

    public render() {
        return (

            <input type="file" className="addPhoto" name="picField" onChange={this.photoAdded} />
    );
    }
    public photoAdded =(event:any)=>{
        this.props.handleAddPhoto(event)
}

}

export default AddPhoto;