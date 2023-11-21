import React from 'react';
import { View, StyleSheet } from 'react-native';
import CharactersList from './CharactersList';

const App = () => {
  return (
    <View style={styles.container}>
      <CharactersList />
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
});

export default App;
