import React, {Component} from 'react';
import {Growl} from 'primereact/growl';
import {FileUpload} from 'primereact/fileupload';;

export class FileUpload extends Component {
        
    constructor() {
        super();
        
       
        this.onBasicUpload = this.onBasicUpload.bind(this);
        
    }

   
    
    
    onBasicUpload(event) {
        this.growl.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
    }
    
    

    render() {
        return (
            
                

                <div className="content-section implementation">
                                
                    <h3>Basic</h3>
                    <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" maxFileSize={1000000} onUpload={this.onBasicUpload} />
                    
                    <Growl ref={(el) => { this.growl = el; }}></Growl>
                </div>
            
        )
    }
}

