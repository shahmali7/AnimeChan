import React, { useState } from 'react'
import EditData from '../EditData/EditData'
import './Data.css'
import { v4 as uuidv4 } from 'uuid';


const Data = ({ animeChan, setanimeChan }) => {

    const [OpenEdit,setOpenEdit]=useState(false)
    const [takeId,setTakeId]=useState('')
    

    
    const sortData = animeChan.sort((a, b) => {
        if (a.anime < b.anime) return -1
        return 1
    })

   console.log(sortData);

    const [Data, setData] = useState({
        anime: '',
        character: '',
        quote: '',
        id:''
    })
    // console.log(Data);
    
    const [EditableData,setEditableData]=useState({
        anime: '',
        character: '',
        quote: '',

    })

    const addData = (e) => {
        e.preventDefault()
        setanimeChan([...animeChan,{...Data,id:uuidv4()}])
    }


    const handleData = (e) => {
        const newData = { ...Data }
        newData[e.target.id] = e.target.value
        setData({...newData})
        
    }


    const deleteItem=(Delete)=>{
      setanimeChan(animeChan.filter((item)=>item.id !== Delete))
      console.log(Delete);
    }

    const editDataItem=(id)=>{
        setOpenEdit(!OpenEdit)
        setTakeId(id)
        
    }
    
    
    const OpenEditForm=OpenEdit ? 
    <EditData 
    setOpenEdit={setOpenEdit}
    animeChan={animeChan}
    setanimeChan={setanimeChan}
    takeId={takeId}
    EditableData={EditableData}
    setEditableData={setEditableData}
    /> : ''



    return (

        <div className='Data'>
            <form onSubmit={(e) => addData(e)} className='FormData'>
                <input onChange={(e) => handleData(e)} maxLength={30} placeholder='Anime name' id='anime' value={Data.anime} required />
                <input onChange={(e) => handleData(e)} maxLength={15} placeholder='Character' id='character' value={Data.character} required />
                <input onChange={(e) => handleData(e)} maxLength={100} placeholder='Add Quote' id='quote' value={Data.quote} required />
                <button>Add</button>
            </form>
            <div className='AllData'>
                    {OpenEditForm}

                    <div className='AloneData'>
                    {sortData.map((item, index) => {
                        return (
                            <div key={index} className='DataMain'>
                                <div className='DataApi'>
                                    <h3>Anime : {item.anime}</h3>
                                    <h3>Character: {item.character}</h3>
                                    <h3> Quote: {item.quote.length > 30 ? `${item.quote.substring(0,100)} ... ` : item.quote}</h3>
                                </div>
                                <div>
                                    <button className='Delete' onClick={()=>deleteItem(item.id)}>Delete</button>
                                    <button className='EditButton' onClick={()=>editDataItem(item.id)}>Edit</button>
                                </div>
                            </div>
                        )
                    })}
                    </div>
            </div>
        </div>

    )
}

export default Data