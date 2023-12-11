import { useState } from 'react';
import { View,Text,TextInput,StyleSheet,Button } from 'react-native'
const TodoInput = (props) =>{
const [enteredTodoText,setEnteredTodoText]=useState('')

function enterTodoText(enteredText){
        setEnteredTodoText(enteredText);
}

function onPress(){
        props.onTodoAdded(enteredTodoText);
        setEnteredTodoText('');
}
return(
<View style={styles.flexForTodo}>
        <TextInput 
        placeholder='Type Here' 
        style={styles.textInput} 
        onChangeText={enterTodoText}
        value={enteredTodoText}
        />
        <Button color={'steelblue'} title='Add Task'  onPress={onPress}/>
        </View>
);
}
export default TodoInput; 
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