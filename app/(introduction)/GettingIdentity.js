import { images } from '@/constants/images';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { ActivityIndicator, Image, Pressable, StyleSheet, Text, TextInput } from 'react-native';

const gettingIdentity = () => {
    const [fontsLoaded] = useFonts({
        'Poppins-Bold': require('@/assets/fonts/poppins/Poppins-Bold.ttf'),
        'Poppins-ExtraBold': require('@/assets/fonts/poppins/Poppins-ExtraBold.ttf'),
        'Poppins-Light': require('@/assets/fonts/poppins/Poppins-Light.ttf'),
        'Poppins-ExtraLight': require('@/assets/fonts/poppins/Poppins-ExtraLight.ttf'),
        'Poppins-Thin': require('@/assets/fonts/poppins/Poppins-Thin.ttf'),
        'Poppins-ThinItalic': require('@/assets/fonts/poppins/Poppins-ThinItalic.ttf'),
    });

    if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="#FFFFFF" />;
    }

    return (
        <LinearGradient
            colors={['#05070D', '#182233']}
            style={allStyles.page}>
            <Image source={images.logo} style={allStyles.logo} />
            <Text style={allStyles.catchPhrase}>What is your Athlete Identity?</Text>
            <TextInput 
                style={allStyles.textBox} 
                placeholder='Enter Your Identity...'
                placeholderTextColor='#808080'
            />
            <Pressable style={allStyles.button}>
                <Text style={allStyles.buttonText}>Enter the APAK Universe</Text>
            </Pressable>

        </LinearGradient>
    )
}

const allStyles = StyleSheet.create({
    page : {
        flex: 1,
        alignItems : 'center',
        justifyContent : 'center',
        padding : 40
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        alignContent: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    title:{
        fontFamily: "Poppins-Bold",
        fontSize: 32,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 0
    },
    catchPhrase:{
        fontFamily: "Poppins-Light",
        fontSize: 14,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 30
    },
    text:{
        fontFamily: "Poppins-ExtraLight",
        fontSize: 14,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    button:{
        backgroundColor: '#5C2D91',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 15,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        fontFamily: "Poppins-Light",
        fontSize: 16,
        color: '#FFFFFF',
        width: '100%',
    },
    textBox:{
        width: '100%',
        backgroundColor: '#D4AF37',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        fontSize: 16,
        fontFamily: 'Poppins-Light',
        color: '#000000',
        textAlign: 'left',
        marginBottom: 40
    }
    
});

export default gettingIdentity;