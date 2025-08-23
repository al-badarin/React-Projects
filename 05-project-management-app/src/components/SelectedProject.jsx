import Tasks from './Tasks';

export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            onClick={onDelete}
            className="group inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-sm font-medium text-red-700 shadow-sm transition
           hover:bg-red-100 hover:text-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/40 active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none"
          >
            Delete
          </button>
        </div>

        <p className="mb-4 text-stone-400">{formattedDate || 'No due date'}</p>
        <p className="text-stone-600 ">{project.description}</p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}
