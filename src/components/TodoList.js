import React from 'react'
import { List,Checkbox ,Typography} from 'antd';
import "./styles.css"
const { Title } = Typography;

function TodoList({list,setCompleted}) {
  // const [completed, setstate] = useState(initialState)
  const handleCompletedTask = (e) => {
    console.log(e.target.id)
  }
    return (
            <List
              itemLayout="horizontal"
              dataSource={list}
              renderItem={(item,index) => (
            <List.Item id="list"  >
             <Checkbox checked={item.done} id={index} onChange={e=>handleCompletedTask}>
             <Title level={4} style={item.done&&{textDecoration: "line-through"}}>{item.text}</Title>
             </Checkbox>
            </List.Item>

           )}
         />
    )
}
export default TodoList
