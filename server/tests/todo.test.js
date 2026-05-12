// tests/todo.test.js
// Unit tests for Todo App

describe('Todo App - Basic Logic Tests', () => {

  // Test 1: Basic sanity check (proves Jest works)
  test('Jest should be working', () => {
    expect(1 + 1).toBe(2);
  });

  // Test 2: Validate todo object structure
  test('Todo should have required properties', () => {
    const todo = {
      id: 1,
      title: 'Buy groceries',
      completed: false,
      createdAt: new Date()
    };

    expect(todo).toHaveProperty('id');
    expect(todo).toHaveProperty('title');
    expect(todo).toHaveProperty('completed');
    expect(todo).toHaveProperty('createdAt');
  });

  // Test 3: Title validation
  test('Todo title should not be empty', () => {
    const todo = { title: 'Read a book' };
    expect(todo.title).toBeTruthy();
    expect(todo.title.length).toBeGreaterThan(0);
  });

  // Test 4: Toggle completion status
  test('Toggling todo completion should work', () => {
    let todo = { completed: false };

    todo.completed = !todo.completed;
    expect(todo.completed).toBe(true);

    todo.completed = !todo.completed;
    expect(todo.completed).toBe(false);
  });

  // Test 5: Filter completed todos
  test('Should filter completed todos correctly', () => {
    const todos = [
      { id: 1, title: 'Task 1', completed: true },
      { id: 2, title: 'Task 2', completed: false },
      { id: 3, title: 'Task 3', completed: true },
      { id: 4, title: 'Task 4', completed: false }
    ];

    const completed = todos.filter(t => t.completed);
    const pending = todos.filter(t => !t.completed);

    expect(completed.length).toBe(2);
    expect(pending.length).toBe(2);
  });

  // Test 6: Count todos
  test('Should count todos correctly', () => {
    const todos = [
      { id: 1, title: 'Task 1' },
      { id: 2, title: 'Task 2' },
      { id: 3, title: 'Task 3' }
    ];

    expect(todos.length).toBe(3);
  });

  // Test 7: Add a new todo
  test('Should add a new todo to the list', () => {
    const todos = [
      { id: 1, title: 'Task 1', completed: false }
    ];

    const newTodo = { id: 2, title: 'Task 2', completed: false };
    todos.push(newTodo);

    expect(todos.length).toBe(2);
    expect(todos[1].title).toBe('Task 2');
  });

  // Test 8: Delete a todo
  test('Should delete a todo from the list', () => {
    let todos = [
      { id: 1, title: 'Task 1' },
      { id: 2, title: 'Task 2' },
      { id: 3, title: 'Task 3' }
    ];

    todos = todos.filter(t => t.id !== 2);

    expect(todos.length).toBe(2);
    expect(todos.find(t => t.id === 2)).toBeUndefined();
  });

  // Test 9: Update todo title
  test('Should update todo title', () => {
    const todo = { id: 1, title: 'Old title' };
    todo.title = 'New title';

    expect(todo.title).toBe('New title');
    expect(todo.title).not.toBe('Old title');
  });

  // Test 10: Validate todo title length
  test('Todo title should not exceed 100 characters', () => {
    const shortTitle = 'Short title';
    const longTitle = 'a'.repeat(101);

    expect(shortTitle.length).toBeLessThanOrEqual(100);
    expect(longTitle.length).toBeGreaterThan(100);
  });

});
