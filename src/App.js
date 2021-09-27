import { useState } from 'react';
import { Typography,Layout } from 'antd';
import InputToDo from './components/Input';
import { TodoList } from './components';
import './App.css';
import 'antd/dist/antd.css';
  const { Title } = Typography;
  const { Header, Content, Footer } = Layout;

function App() {
  const [listTodo, setTodo] = useState([])
  return (
    <Layout>
      <div className="App">
      <Header id="header">
       <Title level={2}>TODO</Title>
      </Header>
      <Content>
        <InputToDo addTaskToList={setTodo} />
        <TodoList list={listTodo} setCompleted={setTodo} />
      </Content>
      </div>
      <Footer>copyright@elhamfadel2021</Footer>
    </Layout>
  );
}

export default App;
