import './App.css';
import { Table } from './components/Table';
import { Form } from './components/Form'
import { useState } from 'react';

const hrsPerwk = 24 * 7

function App() {
  const [taskList, setTaskList] = useState([])
  const hr = taskList.reduce((subttl, { hr }) => subttl + +hr, 0)

  const addTask = (data) => {
    if (hrsPerwk < hr + +data.hr) {
      return alert("hrs exceeded")
    }


    setTaskList([...taskList, data])
  }
  console.log(taskList)
  const taskSwitcher = (id, type) => {
    const tempArg = taskList.map((item) => {
      if (item.id === id) {
        item.type = type
      }
      return item
    })
    setTaskList(tempArg)

  }

  const deleteBtn = (id) => {
    if (window.confirm("garne ho?")) {
      const deleteArg = taskList.filter(item => item.id !== id)
      setTaskList(deleteArg)
    }
  }

  return (
    <div className>
      <div class="wrapper">
        <div class="container">
          {/* <!-- title  --> */}
          <div class="row">
            <div class="col text-center mt-5">
              <h1>Not To Do List</h1>
            </div>
          </div>


          {/* <!-- form area--> */}
          <Form addTask={addTask} />

          {/* <!-- list area --> */}
          <Table taskList={taskList}
            taskSwitcher={taskSwitcher}
            deleteBtn={deleteBtn} />


          {/* <!-- total hrs area --> */}
          <div class="row fw-bold">
            <div class="col">
              the total hours allocated fo this week is
              <span id="totalHrs">{hr}</span> Hours
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
