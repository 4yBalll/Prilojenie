import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { ipDataReceived } from './actions';

const HomeScreen = ({ ipData, ipDataReceived }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchIpData();
  }, []);

  const fetchIpData = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://ipwho.is/');
      const data = await response.json();
      ipDataReceived(data); 
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#007BFF" />
      ) : (
        ipData && (
          <View>
            <Text style={styles.title}>IP Information</Text>
            <Text style={styles.detail}>IP Address: {ipData.ip}</Text>
            <Text style={styles.detail}>Country: {ipData.country}</Text>
            <Text style={styles.detail}>Region: {ipData.region}</Text>
            <Text style={styles.detail}>City: {ipData.city}</Text>
            <Text style={styles.detail}>Postal Code: {ipData.postal}</Text>
            <Text style={styles.detail}>Calling Code: {ipData.calling_code}</Text>
            <Text style={styles.detail}>Capital: {ipData.capital}</Text>
          </View>
        )
      )}
      <TouchableOpacity style={styles.button} onPress={fetchIpData}>
        <Text style={styles.buttonText}>Refresh</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  ipData: state.ipData, 
});

const mapDispatchToProps = (dispatch) => ({
  ipDataReceived: (ipData) => dispatch(ipDataReceived(ipData)), 
});

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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);