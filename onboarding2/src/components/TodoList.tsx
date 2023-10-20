function TodoList() {
  return (
    <div>
      <h1>TODO LIST</h1>
      <div className='todo-wrapper'>
        <div className='container-fluid pb-3 '>
          <div className='d-grid gap-3 todo-list-container'>
            <div className='bg-body-tertiary border rounded-3 list-wrapper'>
              <ul id='todo-list'></ul>
            </div>
            <div className='bg-body-tertiary border rounded-3 list-wrapper'>
              <ul id='done-list'></ul>
            </div>
          </div>

          <div className='modal'>
            <div className='modal_body'>
              <h3>Add Todo</h3>
              <form id='todo-form'>
                <input id='todo-input' type='text' required />
                <button className='btn-add-todo'>Enter</button>
              </form>
            </div>
          </div>
          <div className='d-grid justify-content-center mt-3'>
            <button className='btn-open-popup'>Add Todo</button>
          </div>
        </div>
      </div>
      <script src='./script.js'></script>
    </div>
  );
}

export default TodoList;
