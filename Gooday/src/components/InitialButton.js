import { TouchableOpacity, Text, Image } from "react-native";

export default function InitialButton({ nome, onPress, imagem, style, textStyle }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                {
                    padding: 10,
                    borderRadius: 5,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                },
                style, 
                ]}
            >
                {imagem && (
                    <Image
                        source={imagem}
                        style={{ width: 20, height: 20, marginRight: 8, backgroundColor: '#fff' }}
                    />
                    )}
                <Text
                    style={[
                        { color: "#FFFFFF", textAlign: "center", padding: 5, flex: 1 },
                        textStyle,
                    ]}
                >
                    {nome}
                </Text>
        </TouchableOpacity>
    );
}
