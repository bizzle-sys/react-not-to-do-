import React, { useState } from 'react'
import { randomStrGenerator } from './utils'

export const Form = ({addTask}) => {
const [formData, setFormData] = useState({
    type: 'entry'
})
const handlelonChange = (e)=>{
    const {name, value} = e.target
  
    setFormData({...formData, [name]:value})

}
const handleonSubmit = (e)=>{
    e.preventDefault()
const id = randomStrGenerator(6)
    addTask({...formData, id})

}

  return (
    <form onSubmit={handleonSubmit} className= "border rounded shadow-lg p-4" action="">
            <div class="row mt-3">
              <div class="col-md-6">
                <input
                onChange={handlelonChange}
                  type="text"
                  name="task"
                  class="form-control task-input"
                  required
                  placeholder="enter a task"
                />
              </div>

              <div class="col-md-3">
                <input
                 onChange={handlelonChange}

                  type="number"
                  name="hr"
                  id=""
                  class="form-control hrs-input"
                  min="1"
                  required
                  placeholder="enter no of hrs"
                />
              </div>

              <div class="col-md-3 text-center">
                <button class="btn btn-primary" type="submit" id="form-btn">
                  <i class="fa-solid fa-plus"></i> add new task
                </button>
              </div>
            </div>
          </form>
  )
}
