import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { ColorPicker } from './ColorPicker/ColorPicker';
import { Counter } from './Counter/Counter';
import { Dropdown } from './Dropdown/Dropdown';
import { MyClassComponents } from './someCode/someCode';
import colorPickerOptions from '../data/colorPickerOptions.json';
import initialTodo from '../data/todo.json';
import { TodoList } from './TodoList/TodoList';
import { Component } from 'react';
import { TodoEditor } from './TodoEditor/TodoEditor';
import { LoginForm } from './LoginForm/LoginForm';
import { VideoExample } from './VideoExample';
import { SearchPhotosPixabay } from './SearchPhotos/SearchPhotos';

class App extends Component {
  state = {
    todoList: initialTodo,
  };

  addTodo = text => {
    const todo = {
      id: uuidv4(),
      text,
      completed: false,
    };

    this.setState(({ todoList }) => ({
      todoList: [todo, ...todoList],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todoList: prevState.todoList.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    // this.setState(prevState => ({
    //   todoList: prevState.todoList.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }

    //     return todo;
    //   }),
    // }));

    this.setState(({ todoList }) => ({
      todoList: todoList.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);

    setTimeout(() => {
      console.log(data);
    }, 1000);
  };

  render() {
    const { todoList } = this.state;

    return (
      <>
        <MyClassComponents onSubmitHandler={this.formSubmitHandler} />
        <Counter initialValue={10}></Counter>
        <Dropdown />
        <ColorPicker options={colorPickerOptions}></ColorPicker>
        <TodoEditor onSubmitTodo={this.addTodo} />
        <TodoList
          todoList={todoList}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
        <LoginForm />
        <VideoExample />
        <SearchPhotosPixabay />
      </>
    );
  }
}

export default App;
