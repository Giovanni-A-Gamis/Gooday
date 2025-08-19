import { Image } from 'react-native';

export default function ImagemInitial() {
    return (
        <Image 
            source={require('../../assets/casual_dog.png')}
            style={{ width: 325, height: 260, }}
        />
    )
}