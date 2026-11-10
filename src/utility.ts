type Task = {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
};

type EditerTask = Partial<Task>;

type SummaryTask = Pick<Task, 'id' | 'title'>;

type CompletedTask = Readonly<Task>;

const editingTask: EditerTask = {
    id: 1,
    title: 'Edit TypeScript code',
    description: 'Edit the TypeScript code to fix the bugs',
    completed: false
};


editingTask.completed = false;

const summaryTask: SummaryTask = {
    id: 1,
    title: 'Learn TypeScript',
};

const completedTask: CompletedTask = {
        id: 2,
        title: 'Complete TypeScript project',
        completed: true,
};

console.log(editingTask);
console.log(summaryTask);
console.log(completedTask);


