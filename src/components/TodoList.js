import React from 'react'
import { List,Checkbox ,Typography} from 'antd';
import "./styles.css"
const { Title } = Typography;

function TodoList({list}) {
    return (
            <List
              itemLayout="horizontal"
              dataSource={list}
              renderItem={item => (
            <List.Item id="list">
             <Checkbox checked={item.done}>
             <Title level={4} style={item.done&&{textDecoration: "line-through"}}>{item.text}</Title>
             </Checkbox>
            </List.Item>

           )}
         />
    )
}
export default TodoList
