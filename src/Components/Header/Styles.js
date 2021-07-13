import { StyleSheet } from "react-native";
import color from '../../assets/colors/colors'

const Styles = StyleSheet.create({
    barraTopo: {
        top: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
    },
    tituloTopo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '30%',
    },
    location: {
        color: color.laranja,
    },
    seta: {
        color: color.cinzaClaro,
    },
})

export default Styles;