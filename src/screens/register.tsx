import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Register = ({ navigation }: any): JSX.Element => {
  const handleRegister = () => {
    // Aqui você poderia validar os campos antes
    navigation.replace('MainTabs');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} placeholder="Insira seu nome" />

        <Text style={styles.label}>Sobrenome</Text>
        <TextInput style={styles.input} placeholder="Insira seu sobrenome" />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Insira seu email" keyboardType="email-address" />

        <Text style={styles.label}>Senha</Text>
        <TextInput style={styles.input} placeholder="Insira sua senha" secureTextEntry />

        <Text style={styles.label}>Confirme sua senha</Text>
        <TextInput style={styles.input} placeholder="Confirme sua senha" secureTextEntry />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Já tem uma conta? Fazer login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F2F4F7',
    justifyContent: 'center',
    padding: 20,
  },
  form: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 6,
    elevation: 4,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 6,
    fontWeight: '600',
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f9f9f9',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#1B71BD',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    marginTop: 20,
    textAlign: 'center',
    color: '#1B71BD',
    textDecorationLine: 'underline',
  },
});
