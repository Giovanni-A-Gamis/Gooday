import ImagemInitial from "../components/ImagemInitial";
import { View, Text } from 'react-native';
import InitialButton from "../components/InitialButton";
import styles from '../../styles/InitialStyle';

export default function InitialScreen({ navigation }) {
    return (
        <View style={styles.screenContainer}>
            <View style={styles.header}>
                <ImagemInitial />
                <Text style={styles.principal}>Ótimo dia!</Text>
                <Text style={styles.subtitulo}>Como deseja acessar?</Text>
            </View>

            <View style={styles.buttonContainer}>
                <InitialButton 
                    nome="Como deseja acessar?"
                    imagem={require('../../assets/Google.png')}
                    style={styles.buttonFilled}
                />
                <InitialButton 
                    nome="Outras opções"
                    onPress={() => navigation.navigate('Login')}
                    style={styles.buttonOutlined}
                    textStyle={{ color: '#000' }}
                />
            </View>
        </View>
    );
}
