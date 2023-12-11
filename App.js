import { Button,View,TextInput,StyleSheet,FlatList } from 'react-native'
import React,{useState} from 'react'
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';

const App = () => {

const [todoList,setTodoList]=useState([]);


function addTodoText(enteredTodoText){
  if(enteredTodoText != ""){
setTodoList([...todoList,{text: enteredTodoText,id: Math.random().toString()}]);
  }
}

function deleteHandler(id){
  setTodoList(todoList.filter(todo=>todo.id != id))
}

  return (
    <View style={styles.container}>
        <TodoInput onTodoAdded={addTodoText} />
 <FlatList style={styles.todoList} data={todoList} renderItem={(todoItem) =>{
          return(
              <TodoItem text={todoItem.item.text} 
              id={todoItem.item.id}
              onDelete={deleteHandler}
              />

          );
        }}
        keyExtractor={(item,index) =>{
          return(

            item.id
          );
        }}
          />
        
    </View>
  )
}

export default App

const styles=StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingHorizontal: 10
    },
    flexForTodo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        paddingBottom: 20,
        marginBottom: 20
    },
    textInput:{
        borderWidth: 1,
        borderColor: '#cccccc',
        width: "75%",
        marginRight: 5,
        padding: 10,
        borderRadius: 200,
        fontSize: 20,
        paddingLeft: 20

    },
    todoList:{
        height: '85%'
    },
    
})