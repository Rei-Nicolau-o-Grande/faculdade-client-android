import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from "react-native";

export default function Index() {

    const [name, setName] = useState('');
    const [value, setValue] = useState('');

    const enviarDados = async () => {
        try {
            const resposta = await fetch('https://seu-backend.com/api/produtos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, value }),
            });

            if (resposta.ok) {
                alert('Produto cadastrado com sucesso!');
                setName('');
                setValue('');
            } else {
                alert('Erro ao cadastrar o produto. Tente novamente.');
            }
        } catch (erro) {
            console.error('Erro:', erro);
            alert('Erro ao enviar dados. Verifique sua conexão.');
        }
    };

  return (
      <View style={styles.container}>
          <Text style={styles.titulo}>Cadastro de Produto</Text>
          <View style={styles.formulario}>
              <Text style={styles.label}>Nome do Produto</Text>
              <TextInput
                  style={styles.input}
                  value={name}
                  onChangeText={setName}
                  placeholder="Digite o nome do produto"
              />

              <Text style={styles.label}>Preço</Text>
              <TextInput
                  style={styles.input}
                  value={value}
                  onChangeText={setValue}
                  placeholder="Digite o preço"
                  keyboardType="numeric"
              />

              <Button title="Cadastrar Produto" onPress={enviarDados} />
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    formulario: {
        width: '100%',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
});