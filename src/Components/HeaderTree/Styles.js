import { StyleSheet } from "react-native";
import color from '../../assets/colors/colors'

const Styles = StyleSheet.create({
    topo: {
        flexDirection: 'row',
        paddingHorizontal: '5%',
        top: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    adress: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    setaRetorno: {
        backgroundColor: color.azul,
        color: color.branco,
        borderRadius: 10,
        padding: 10,
    },
    bag: {
        backgroundColor: color.laranja,
        color: color.branco,
        borderRadius: 10,
        padding: 10,
    },
    titulo: {
        color: color.azul,
        fontSize: 16,
        margin: 10,
        fontFamily: 'Montserrat-Medium',
    },

});

export default Styles;