import { Typography,Layout } from 'antd';
import InputToDo from './components/Input';
import { TodoList } from './components';
import './App.css';
import 'antd/dist/antd.css';
  const { Title } = Typography;
  const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="App">
      <Header>
       <Title level={2}>TODO</Title>
      </Header>
      <Content>
        <InputToDo />
        <TodoList />
      </Content>
      <Footer>copyright@elhamfadel2021</Footer>
    </Layout>
  );
}

export default App;
