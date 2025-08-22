import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import Google from '../../assets/Google.png';
import Facebook from '../../assets/Facebook.png';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../../styles/LoginStyle'

export default function LoginScreen(navigation) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [lembrar, setLembrar] = useState(false);
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Acesse</Text>
            <Text style={styles.subtitle}>com E-mail e senha</Text>
            
            <Text style={styles.label}>E-mail</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu E-mail"
                value={email}
                onChangeText={setEmail}
            />

            <Text style={styles.label}>Senha</Text>
            <View style={styles.senha}>
                <TextInput
                    style={[styles.input, { flex: 1 }]}
                    placeholder="Digite sua senha"
                    secureTextEntry={!mostrarSenha}
                    value={senha}
                    onChangeText={setSenha}
                />
                <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
                    <Icon name={mostrarSenha ? "eye-off" : "eye"} size={20} color={'#888'}/>
                </TouchableOpacity>
            </View>

            <View style={styles.esqueci}>
                <View style={styles.lembrarContainer}>
                    <TouchableOpacity
                        style={[
                            styles.checkbox,
                            lembrar && { backgroundColor: '#14c871' }
                        ]}
                        onPress={() => setLembrar(!lembrar)}
                    >            
                        {lembrar && <Icon name="checkmark" size={16} color="#fff" />}
                    </TouchableOpacity>
                    <Text>Lembrar senha</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.esqueciTexto}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}>
                    <Text style={[styles.buttonText, { color: "#000000" }]}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
            
            <Text style={styles.ou}>Ou continue com</Text>
            
            <View style={styles.icons}>
                <Image source={Google} style={styles.icon} />
                <Image source={Facebook} style={styles.icon} />
            </View>
        </View>
    );
}