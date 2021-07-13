import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Seta from 'react-native-vector-icons/MaterialIcons'
import Filter from 'react-native-vector-icons/AntDesign'
import Styles from './Styles'

const Header = () => {
    return (
        <View style={Styles.barraTopo}>

            <View style={Styles.topo}>
                <TouchableOpacity>
                    <Icon name="md-location-outline" size={18} style={Styles.location}/>
                </TouchableOpacity>
                <Text style={Styles.tituloLocal}>Zihuatanejo, Gro</Text>
                <TouchableOpacity>
                    <Seta name="keyboard-arrow-down" size={18} style={Styles.seta}/>
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity>
                <Filter name="filter" size={18} style={Styles.filter}/>
            </TouchableOpacity>

        </View>
        
    );
}

export default Header;