import React from 'react'
import "./list.css"

function Todolist({todos , handleDelete , handleEdit}) {
  return (
    <div>
        { 
            todos.map((t) => (
              <div className='container'>
                <div className='sub-container'>
                <span className='name' key={t.id}>{t.todo}</span>
                <span className='btn-section'>
                <button className='btn' onClick={() => handleEdit(t.id)}><i class="fa-solid fa-pen-to-square"></i></button>
                <button className='btn' onClick={()=> handleDelete(t.id) }><i class="fa-solid fa-trash"></i></button>
                </span>
                </div>
              </div>

            ))
    

        }
      
    </div>
  )
}

export default Todolist
