import React from 'react'
import './EditData.css'
const EditData = ({setOpenEdit,takeId,animeChan,EditableData,setEditableData,setanimeChan}) => {

//  const editItem=animeChan.find((item)=>item.id===takeId)
 
 

  const handleEditData=(e)=>{
    const newEditData={...EditableData}
    newEditData[e.target.id]=e.target.value
    setEditableData(newEditData)
  }
 

  const changeData=(e)=>{
    e.preventDefault()
    setanimeChan(animeChan.filter((item)=>item.id !==takeId).concat(EditableData))
    setOpenEdit(false)
    console.log(animeChan);
  }
  return (
    <form onSubmit={(e)=>changeData(e)} className='Edit'>
       <input onChange={(e) => handleEditData(e)} placeholder='Edit Anime' id='anime' required maxLength={30} value={EditableData.anime}/>
       <input onChange={(e) => handleEditData(e)} placeholder='Edit Character' id='character' required maxLength={15} value={EditableData.character}/>
       <input onChange={(e) => handleEditData(e)} placeholder='Edit Quote' id='quote' maxLength={100} required value={EditableData.quote}/>
       <button className='Save'>Save</button>
       <button className='Cancel' onClick={()=>setOpenEdit(false)}>Cancel</button>
    </form>
  )
}

export default EditData