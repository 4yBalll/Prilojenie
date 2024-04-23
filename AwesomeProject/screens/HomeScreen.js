import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  const [ipData, setIpData] = useState(null);

  useEffect(() => {
    fetchIpData();
  }, []);

  const fetchIpData = async () => {
    try {
      const response = await fetch('http://ipwho.is/');
      const data = await response.json();
      setIpData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {ipData && (
        <View>
          <Text style={styles.title}>IP Information</Text>
          <Text style={styles.detail}>IP Address: {ipData.ip}</Text>
          <Text style={styles.detail}>Country: {ipData.country}</Text>
          <Text style={styles.detail}>Region: {ipData.region}</Text>
          <Text style={styles.detail}>City: {ipData.city}</Text>
          <Text style={styles.detail}>ISP: {ipData.isp}</Text>
        </View>
      )}
      <TouchableOpacity style={styles.button} onPress={fetchIpData}>
        <Text style={styles.buttonText}>Refresh</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detail: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
