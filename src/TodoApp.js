
import React, { useState } from 'react';
import { View, Text, TextInput, Button, SectionList, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { addTodo, completeTodo, deleteTodo } from './Actions';
import { useNavigation } from '@react-navigation/native'; 

const TodoApp = ({ todos, addTodo, completeTodo, deleteTodo }) => {
  const [text, setText] = useState('');
  const navigation = useNavigation(); 

  const handleAddTodo = () => {
    addTodo(text);
    setText('');
  };

  const handleCompleteTodo = (index) => {
    completeTodo(index);
  };

  const handleDeleteTodo = (index) => {
    deleteTodo(index);
  };

  const handleSearch = () => {
    navigation.navigate('SearchScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder="Enter your todo"
        />
        <View style={{ width: 10 }} />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}> 
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <SectionList
        sections={[
          { title: 'Todos', data: todos }
        ]}
        renderItem={({ item, index }) => (
          <View style={styles.todoContainer}>
            <Text style={[styles.todoText, { textDecorationLine: item.completed ? 'line-through' : 'none', color: item.completed ? 'gray' : 'black' }]}>{item.text}</Text>
            <View style={styles.buttonContainer}>
              <Button title={item.completed ? "Done" : "Complete"} 
                onPress={() => handleCompleteTodo(index)} 
                color={item.completed ? '#CCCCFF' : '#9F2B68'} />
              <View style={{ width: 10 }} />
              <Button title="X" 
                onPress={() => handleDeleteTodo(index)} 
                color={'#DC143C'} />
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        style={styles.sectionList}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  const { todos, filteredTodos, searchTerm } = state;
  const todosToShow = searchTerm ? filteredTodos : todos;
  return {
    todos: todosToShow,
  };
};

export default connect(mapStateToProps, { addTodo, completeTodo, deleteTodo })(TodoApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '60%',
    borderRadius: 20,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#0096FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  searchButton: {
    backgroundColor: '#ff7f00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  sectionList: {
    width: '100%',
  },
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
  },
  todoText: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
