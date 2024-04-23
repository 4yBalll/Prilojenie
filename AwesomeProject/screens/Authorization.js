import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Authorization = ({ onAuthorized, navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleAuthorizationPress = () => { 
    // Проверяем, что имя пользователя и пароль не пустые
    if (username.trim() === '' || password.trim() === '') {
      setError('Введите логин и пароль');
    } else {
      // Пример простой проверки
      if (username === '1234' && password === '1234') {
        // Если данные верны, вызываем колбэк для авторизации
        if (onAuthorized) {
          onAuthorized(username); // Передаем имя пользователя
        }
        // Или можно сразу перейти на другой экран
        if (navigation) {
          navigation.navigate('Home');
        } else {
          console.error('Navigation is undefined');
        }
      } else {
        // Если данные не верны, выводим сообщение об ошибке
        setError('Неверный пароль');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Authorization</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleAuthorizationPress}>
        <Text style={styles.buttonText}>Authorize</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Authorization;
