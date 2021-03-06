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
    setaRetorno: {
        backgroundColor: color.azul,
        color: color.branco,
        borderRadius: 10,
        padding: 15,
    },
    bag: {
        backgroundColor: color.laranja,
        color: color.branco,
        borderRadius: 10,
        padding: 15,
    },
    titulo: {
        color: color.azul,
        fontSize: 18,
        fontFamily: 'Montserrat-Medium',
    },

});

export default Styles;