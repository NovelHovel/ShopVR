import React from 'react';
import axios from 'axios';

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
      tag: []
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('change state', this.state);
    
    axios.post('/api/upload', this.state)
         .then(function() {
            console.log('upload successful');
         });
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file.name,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  handleTagChange(e) {
    e.preventDefault();
    let tags = e.target.value.split(', ');
    this.setState({
      tag: tags
    });
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">No preview available</div>);
    }

    return (
      <div className="previewComponent">
        <h1>Image Upload</h1>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <p>Step 1: Upload Image</p>
          <input className="fileInput" type="file" onChange={(e)=>this.handleImageChange(e)} />
          <div className="imgPreview">
            {$imagePreview}
          </div>
          <p>Step 2: Add Tags (each separated by ", ")</p>
          <input className="tagInput" type="text" onChange={(e)=>this.handleTagChange(e)} />
          <p>Step 3: Submit</p>
          <button className="submitButton" type="submit" onClick={(e)=>this.handleSubmit(e)}>Submit</button>
        </form>
      </div>
    )
  }
}
  
export default ImageUpload;