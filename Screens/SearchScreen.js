
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { searchTodo } from '../src/Actions';
import { useNavigation } from '@react-navigation/native'; 

const SearchScreen = ({ filteredTodos, searchTodo }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation(); 

  const handleSearch = () => {
    searchTodo(searchTerm);
  };

  const handleTodoApp = () => {
    navigation.navigate('TodoApp'); 
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setSearchTerm}
        value={searchTerm}
        placeholder="Search your todo"
      />
      <View style={styles.buttonContainer}>
        <Button title="Search" onPress={handleSearch} />
        <View style={{ width: 10 }} />
        <Button title="Back" onPress={handleTodoApp} />
      </View>
      <FlatList
        data={filteredTodos}
        renderItem={({ item }) => (
          <View>
            <Text>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  const { filteredTodos } = state;
  return {
    filteredTodos,
  };
};

export default connect(mapStateToProps, { searchTodo })(SearchScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
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
  buttonContainer:{
    flexDirection: 'row',
  }
});
