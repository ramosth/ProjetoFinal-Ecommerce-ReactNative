import { StyleSheet } from "react-native";
import color from '../../assets/colors/colors'

const Styles = StyleSheet.create({
    barraTopo: {
        top: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
    },
    tituloLocal: {
        color: color.azul,
        fontSize: 15,
    },
    topo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '25%',
    },
    location: {
        color: color.laranja,
    },
    seta: {
        color: color.cinzaClaro,
    },
    filter: {
        color: color.azul,
    },
})

export default Styles;