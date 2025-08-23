import NewTask from './NewTask';

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 mb-4">
          This project does not have any tasks yet.
        </p>
      )}

      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                onClick={() => onDelete(task.id)}
                className="group inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-sm font-medium text-red-700 shadow-sm transition
              hover:bg-red-100 hover:text-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/40 active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
