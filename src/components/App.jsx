import './App.css';
import { Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Counter from '../pages/Counter';
import MyClassComponents from '../pages/MyClassComponentsPage';
import colorPickerOptions from '../data/colorPickerOptions.json';
import initialTodo from '../data/todo.json';
import { TodoList } from './TodoList/TodoList';
import { Suspense, lazy, useState } from 'react';
import TodoEditor from './TodoEditor/TodoEditor';
import Layout from './Layout/Layout';

const ColorPicker = lazy(() => import('../pages/ColorPicker'));
const LoginForm = lazy(() => import('../pages/LoginForm'));
const Dropdown = lazy(() => import('../pages/Dropdown'));
const DropDownList = lazy(() => import('./Dropdown/DropdownList'));
const DetailsItem = lazy(() => import('./Dropdown/DetailsItem'));
const ImagesItem = lazy(() => import('./Dropdown/ImagesItem'));
const VideoExample = lazy(() => import('./VideoExample'));
const AxiosTry = lazy(() => import('../pages/AxiosTry'));

const App = () => {
  const [todoList, setTodoList] = useState(initialTodo);

  const addTodo = text => {
    const todo = {
      id: uuidv4(),
      text,
      completed: false,
    };

    setTodoList(prevState => [todo, ...prevState]);
  };

  const deleteTodo = todoId => {
    setTodoList(prevState => prevState.filter(todo => todo.id !== todoId));
  };

  const toggleCompleted = todoId => {
    setTodoList(({ todoList }) =>
      todoList.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const formSubmitHandler = data => {
    setTimeout(() => {
      console.log(data);
    }, 1000);
  };

  // return (
  //   <>
  //     <MyClassComponents onSubmitHandler={formSubmitHandler} />
  //     <Counter initialValue={10}></Counter>
  //     <Dropdown />
  //     <ColorPicker options={colorPickerOptions}></ColorPicker>
  //     <TodoEditor onSubmitTodo={addTodo} />
  //     <TodoList
  // todoList={todoList}
  // onDeleteTodo={deleteTodo}
  // onToggleCompleted={toggleCompleted}
  //     />
  //     <LoginForm />
  //     <VideoExample />
  //     <SearchPhotosPixabay />
  //   </>
  // );

  return (
    <Layout>
      <Suspense>
        <Routes>
          <Route path="/" element={<div>This page for OLL elements</div>} />
          <Route path="/axiosTry" element={<AxiosTry />} />
          <Route
            path="/classComponents"
            element={<MyClassComponents onSubmitHandler={formSubmitHandler} />}
          />
          <Route path="/counter" element={<Counter initialValue={10} />} />

          <Route
            path="/colorPicker"
            element={<ColorPicker options={colorPickerOptions} />}
          />
          <Route path="/dropdown" element={<Dropdown />}></Route>
          <Route path="/dropdown/:dropDownList/" element={<DropDownList />}>
            <Route path="details" element={<DetailsItem />} />
            <Route path="images" element={<ImagesItem />} />
          </Route>
          <Route
            path="/todoEditor"
            element={<TodoEditor onSubmitTodo={addTodo} />}
          />

          <Route
            path="/todoList"
            element={
              <TodoList
                todoList={todoList}
                onDeleteTodo={deleteTodo}
                onToggleCompleted={toggleCompleted}
              />
            }
          />
          <Route path="/loginForm" element={<LoginForm />} />
          <Route path="/videoSearch" element={<VideoExample />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
