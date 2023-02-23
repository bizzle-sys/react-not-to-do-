import React from 'react'
import { v4 as uuidv4 } from 'uuid';


export const Table = ({taskList}) => {
    const entryList = taskList.map((item) => 
    {if (item.type === "entry"){
        return item
    }
})

console.log(entryList)

    return (
    <div class="row mt-5 g-2">
            <div class="col-md">
              <h2 class="text-center">entry list</h2>
              <hr />
              <table class="table table-striped table-hover">
                <tbody id="task-list">
                {entryList.map((item, i)=>(
                <tr>
                <td>{i + 1}</td>
                <td>{item.task}</td>
                <td>{item.hr} hr(s)</td>
                <td>
                <button onclick  class = "btn btn-danger"><i class = "fa-solid fa-trash"></i>
                </button>
                <button onclick ="markAsToDo(${i})" class = "btn btn-success"><i class = "fa-solid fa-right-long"></i>
                </button>
                </td>
                </tr>))}
                </tbody>
              </table>
            </div>
            <div class="col-md">
              <h2 class="text-center">Bad List</h2>
              <hr />
              <table class="table table-striped table-hover">
                <tbody id="bad-task">
                    
                
                </tbody>
              </table>

              <div class="text-end fw-bold">
                you can save <span id="totalBadHrs">0</span> Hours
              </div>
            </div>
          </div>
  )
}
