import { View,Text,StyleSheet, Pressable } from 'react-native'

const TodoItem= (props) => {
function deleteHandler(){
    props.onDelete(props.id)
}

return(
   <Pressable onPress={deleteHandler} >

    
<Text style={styles.todo}> {props.text} </Text>
</Pressable>
    );
}
export default TodoItem;

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
    todo:{
      borderWidth:  1,
      borderColor: '#cccccc',
      marginVertical: 5,
      padding: 10,
      textAlign: 'center',
      fontSize: 24,
     backgroundColor: 'steelblue',
     borderRadius:  200,
     color: 'white',
     
      }
})