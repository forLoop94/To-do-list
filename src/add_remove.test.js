import { addTask, removeTask } from '../_mocks_/add_remove.js';

describe('This is the addtask and removeTask functions ', () => {
  test('Adds items to tasks based on user actions', () => {
    const tasks = addTask(
      {
        task: 'Task 1',
        id: 1,
        status: false,
      },
    );
    expect(tasks).not.toBe([]);
  });

  test('Adds items to tasks based on user actions', () => {
    const tasks = addTask(
      {
        task: 'Task 2',
        id: 2,
        status: false,
      },
    );
    expect(tasks).not.toBe([]);
  });

  test('Remove appropriate task upon user actions', () => {
    expect(removeTask({
      task: 'remove task 1 from tasks',
      id: 1,
      status: false,
    })).not.toStrictEqual([]);
  });

  test('Remove appropriate task upon user actions', () => {
    expect(removeTask({
      task: 'remove task 2 from tasks',
      id: 1,
      status: false,
    })).toStrictEqual([]);
  });
});
