import './App.css';
import { ColorPicker } from './ColorPicker/ColorPicker';
import { Counter } from './Counter/Counter';
import { Dropdown } from './Dropdown/Dropdown';
import { MyClassComponents } from './someCode/someCode';
import colorPickerOptions from '../data/colorPickerOptions.json';
import initialTodo from '../data/todo.json';
import { TodoList } from './TodoList/TodoList';
import { Component } from 'react';

class App extends Component {
  state = {
    todoL: initialTodo,
  }


  render() {
    const { todoL } = this.state;

    return (

      <>
        <MyClassComponents />
        <Counter initialValue={10}></Counter>
        <Dropdown />
        <ColorPicker options={colorPickerOptions}></ColorPicker>
        <TodoList todoL={todoL} />
      </>
    );
  }
}

export default App;
