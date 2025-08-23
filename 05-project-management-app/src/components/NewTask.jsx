import { useState } from 'react';

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState('');

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === '') {
      return;
    }

    onAdd(enteredTask);
    setEnteredTask;
  }

  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        value={enteredTask}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      ></input>
      <button
        onClick={handleClick}
        className="group inline-flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-3 py-1.5 text-sm font-medium text-green-700 shadow-sm transition
      hover:bg-green-100 hover:text-green-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500/40 active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none"
              >
        Add Task
      </button>
    </div>
  );
}
