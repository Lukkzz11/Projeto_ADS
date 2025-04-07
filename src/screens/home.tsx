import React from 'react';
import { View, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Campo de busca */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput placeholder="Pesquisar" style={styles.searchInput} />
      </View>

      {/* Conteúdo */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Linha com dois blocos */}
        <View style={styles.row}>
          <View style={styles.largeBox} />
          <View style={styles.smallBox} />
        </View>

        {/* Retângulo */}
        <View style={styles.rectBox} />

        {/* Categorias */}
        <View style={styles.row}>
          <View style={styles.category} />
          <View style={styles.category} />
          <View style={styles.category} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FC',
    paddingTop: 60,
  },
  searchContainer: {
    backgroundColor: '#F2F2F2',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginHorizontal: 20,
    marginBottom: 20,
    height: 40,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#333',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  largeBox: {
    width: '65%',
    height: 120,
    backgroundColor: '#F2F2F2',
    borderRadius: 16,
  },
  smallBox: {
    width: '30%',
    height: 120,
    backgroundColor: '#F2F2F2',
    borderRadius: 16,
  },
  rectBox: {
    width: '100%',
    height: 90,
    backgroundColor: '#F2F2F2',
    borderRadius: 16,
    marginBottom: 20,
  },
  category: {
    width: '30%',
    aspectRatio: 1,
    backgroundColor: '#F2F2F2',
    borderRadius: 16,
  },
});
