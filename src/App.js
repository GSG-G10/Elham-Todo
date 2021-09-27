import { useState } from 'react';
import { Typography,Layout,notification } from 'antd';
import InputToDo from './components/Input';
import { TodoList } from './components';
import './App.css';
import 'antd/dist/antd.css';
  const { Title } = Typography;
  const { Header, Content, Footer } = Layout;

function App() {
  const [listTodo, setTodo] = useState([])

  const controlCompleted = (e) => {
    let title = '';
    let status = '';
    const newList = listTodo.map((item,id) => {
      if (id === e.target.id) {
        title = item.text;
        item.done = !item.done
        status = item.done
      }
      return item
    })
    setTodo(newList)
    notification.open({
    message: status ? 'Completed Task :> ' : 'New Task !!',
    description:status ?
    `Congratulations, you have completed your task: ${title}`:`You have tasks for today, promise me you'll be active your task: ${title}`,
    
  });
  }

  return (
    <Layout>
      <div className="App">
      <Header id="header">
       <Title level={2}>TODO</Title>
      </Header>
      <Content>
        <InputToDo addTaskToList={setTodo} />
        <TodoList list={listTodo} setCompleted={controlCompleted} />
      </Content>
      </div>
      <Footer>copyright@elhamfadel2021</Footer>
    </Layout>
  );
}

export default App;
