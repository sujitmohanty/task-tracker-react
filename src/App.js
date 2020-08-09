import React from 'react';
import { Header } from './components/Header';
import ListTasks from './components/ListTasks';
import AddTask from './components/AddTask';

function App() {
  return (
    <div className='App'>
      <Header />
      <AddTask />
      <ListTasks />
    </div>
  );
}

export default App;
