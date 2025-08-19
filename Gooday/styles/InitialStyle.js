import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',  
        alignItems: 'center',      
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 20,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,           
    },
    principal: {
        fontSize: 37,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
    },
    subtitulo: {
        fontSize: 18,
        marginTop: 5,
        color: '#555',
        textAlign: 'center',
    },
    buttonContainer: {
        width: '100%',            
        alignItems: 'center',
    },
    buttonFilled: {
        backgroundColor: '#14c871',
        width: '80%',              
        paddingVertical: 12,       
        marginBottom: 10,
        borderRadius: 8,
    },
    buttonOutlined: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#14c871',
        borderRadius: 8,
        width: '80%',
        paddingVertical: 12,
    },
});
