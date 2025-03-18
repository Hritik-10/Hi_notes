import React from 'react'

const Noteitem = (props) => {
    const { note } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3" >
                <div className="card-body">
                    <div className='d-flex align-items-center'>
                        <h5 className="card-title">{note.title}</h5>
                        <img src='/edit.png' style={{ width: '20px', height: '20px', marginLeft:'10px' }} alt="Edit" />
                        <img src='/bin.png' style={{ width: '20px', height: '20px', marginLeft:'10px'}} alt="Delete" />
                        
                    </div>
                    <p className="card-text">{note.description}</p>

                </div>
            </div>
        </div>
    )
}

export default Noteitem;
