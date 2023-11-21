import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people/');
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error('Erro ao buscar personagens:', error);
      }
    };

    fetchCharacters();
  }, []);

  const renderCharacter = ({ item }) => {
    const { name, height, mass } = item;

    return (
      <View style={styles.character}>
        <Text style={styles.characterName}>{name}</Text>
        <Text style={styles.characterInfo}>Altura: {height} cm</Text>
        <Text style={styles.characterInfo}>Peso: {mass} kg</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista com os 10 personagens</Text>
      <FlatList
        data={characters}
        renderItem={renderCharacter}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    paddingHorizontal: 20,
  },
  character: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#000',
    borderRadius: 8,
  },
  characterName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff0',
  },
  characterInfo: {
    fontSize: 12,
    color: '#ff0',
  },
  separator: {
    height: 15,
  },
});

export default CharactersList;
