import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  MainTabs: undefined;
  ForgotPassword: undefined; // Adiciona essa linha
};

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo4.png')}
        style={[styles.imagemReduzida, styles.logo]}
        resizeMode="contain"
      />

      <View style={styles.formContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput style={styles.input} placeholder="Coloque seu email" />

        <Text style={styles.label}>Senha:</Text>
        <TextInput style={styles.input} placeholder="Coloque sua senha" secureTextEntry />

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.replace('MainTabs')}
        >
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.linkContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Criar conta</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.link}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 50,
  },
  imagemReduzida: {
    width: 100,
    height: 100,
    marginTop: -300,
  },
  formContainer: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 12,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  botao: {
    backgroundColor: '#1B71BD',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    width: '90%',
  },
  textoBotao: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    color: '#666',
    marginTop: 5,
    textDecorationLine: 'underline',
    fontSize: 12,
    marginBottom: 6,
  },
  linkContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
