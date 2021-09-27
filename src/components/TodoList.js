import React from 'react'
import { List,Checkbox ,Typography} from 'antd';
const { Title } = Typography;
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
function TodoList() {
    return (
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={item => (
            <List.Item>
             <Checkbox >
             <Title level={4}>{item.title}</Title>
             </Checkbox>
            </List.Item>

           )}
         />
    )
}

export default TodoList
