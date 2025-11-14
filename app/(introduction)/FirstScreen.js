import { images } from '@/constants/images';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { ActivityIndicator, Image, Pressable, StyleSheet, Text } from 'react-native';

const FirstScreen = () => {
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
            <Text style={allStyles.title}>APAK</Text>
            <Text style={allStyles.catchPhrase}>The Path Towards Strength & Beauty</Text>
            <Text style={allStyles.text}>Every Athlete Has A Story...</Text>
            <Text style={allStyles.text}>Yours Begins Here</Text>
            <Link href="/(introduction)/GettingIdentity" asChild>
                <Pressable style={allStyles.button}>
                    <Text style={allStyles.buttonText}>Begin Your Journey</Text>
                </Pressable>
            </Link>

        </LinearGradient>
    )
}

const allStyles = StyleSheet.create({
    page : {
        flex: 1,
        alignItems : 'center',
        justifyContent : 'center',
        padding : 50
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        alignContent: 'center',
        justifyContent: 'center',
        marginBottom: 0
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
        backgroundColor: '#D4AF37',
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
        color: '#000000',
    }
    
});

export default FirstScreen;