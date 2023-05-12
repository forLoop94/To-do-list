import { editTask, updateTaskStatus, clearTasks } from '../_mocks_/edit_update_clear.js';

describe('This function edits, updates and clears all task upon user actions ', () => {
  test('edit the task', () => {
    const editItem = editTask({
      id: 1,
      task: 'clean the car',
      status: false,
    });
    expect(editItem).toBe(editItem);
  });

  test('edit the task', () => {
    const editItem = editTask({
      id: 1,
      task: 'write tests for todo list app',
      status: false,
    });
    expect(editItem).toBe(editItem);
  });

  test('update task status', () => {
    expect(updateTaskStatus(1)).toStrictEqual({
      id: 1,
      task: 'write tests for todo list app',
      status: true,
    });
  });
  
  test('clear all completed tasks', () => {
    expect(clearTasks()).not.toBe([{
      id: 1,
      task: 'complete todo list app',
      status: false,
    }]);
  });
});
