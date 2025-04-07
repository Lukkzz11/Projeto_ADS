// Profile.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert,
  Image,
  FlatList,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const navigation = useNavigation();
  const [images, setImages] = useState<{ uri: string }[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showFollowersModal, setShowFollowersModal] = useState(false);
  const [modalType, setModalType] = useState<'followers' | 'following' | null>(null);

  const handleLogout = () => {
    Alert.alert(
      'Sair da conta',
      'Deseja realmente sair?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sair',
          onPress: () => navigation.replace('Login'),
          style: 'destructive',
        },
      ]
    );
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!result.canceled) {
      const newImage = { uri: result.assets[0].uri };
      setImages([...images, newImage]);
    }
  };

  const removeImage = (index: number) => {
    Alert.alert(
      'Remover imagem',
      'Tem certeza que deseja remover esta imagem?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Remover',
          style: 'destructive',
          onPress: () => {
            const newImages = [...images];
            newImages.splice(index, 1);
            setImages(newImages);
          },
        },
      ]
    );
  };

  const openImage = (uri: string) => {
    setSelectedImage(uri);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const openFollowersModal = (type: 'followers' | 'following') => {
    setModalType(type);
    setShowFollowersModal(true);
  };

  const dummyList = [
    { id: '1', name: 'Usuário 1' },
    { id: '2', name: 'Usuário 2' },
    { id: '3', name: 'Usuário 3' },
  ];

  return (
    <View style={styles.container}>
      {/* Ícones laterais */}
      <View style={styles.leftIcons}>
        <TouchableOpacity onPress={handleLogout}>
          <Ionicons name="settings-outline" size={22} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={pickImage} style={{ marginTop: 18 }}>
          <Ionicons name="add-circle-outline" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ marginTop: 18 }}>
          <Ionicons name="home-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Perfil */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.profileImage} />
          <Text style={styles.username}>@usuario</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoText}>Posts: {images.length}</Text>

            <TouchableOpacity onPress={() => openFollowersModal('followers')}>
              <Text style={styles.infoText}>Seguidores: 0</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openFollowersModal('following')}>
              <Text style={styles.infoText}>Seguindo: 0</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Linha separadora */}
        <View style={styles.divider} />

        {/* Galeria */}
        <View style={styles.galleryContainer}>
          {images.map((image, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => openImage(image.uri)}
              onLongPress={() => removeImage(index)}
            >
              <Image source={{ uri: image.uri }} style={styles.image} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Modal para imagem cheia */}
      <Modal visible={!!selectedImage} transparent={true}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Ionicons name="close" size={36} color="#fff" />
          </TouchableOpacity>
          {selectedImage && (
            <Image source={{ uri: selectedImage }} style={styles.fullImage} resizeMode="contain" />
          )}
        </View>
      </Modal>

      {/* Modal Seguidores/Seguindo */}
      <Modal visible={showFollowersModal} animationType="slide">
        <View style={styles.followModal}>
          <TouchableOpacity onPress={() => setShowFollowersModal(false)}>
            <Ionicons name="close" size={28} />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>
            {modalType === 'followers' ? 'Seguidores' : 'Seguindo'}
          </Text>
          <FlatList
            data={dummyList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Text style={styles.modalItem}>{item.name}</Text>}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingBottom: 100,
  },
  leftIcons: {
    position: 'absolute',
    left: 16,
    top: 120,
    alignItems: 'center',
    zIndex: 1,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 80,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoRow: {
    flexDirection: 'row',
    marginTop: 6,
    justifyContent: 'center',
    gap: 16,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 15,
    marginHorizontal: 20,
  },
  galleryContainer: {
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 6,
  },
  image: {
    width: '30%',
    aspectRatio: 3 / 4,
    margin: '1.5%',
    borderRadius: 12,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: '90%',
    height: '80%',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 30,
    zIndex: 1,
  },
  followModal: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalItem: {
    fontSize: 18,
    paddingVertical: 8,
  },
});
