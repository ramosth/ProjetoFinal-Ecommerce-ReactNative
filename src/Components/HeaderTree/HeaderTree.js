import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Styles from './Styles';

const HeaderTree = () => {
    return (
        <View style={Styles.topo}>
            <TouchableOpacity>
                <Icon name="arrow-left" size={15} style={Styles.setaRetorno}/>
            </TouchableOpacity>
            
            <View style={Styles.adress}>
                <Text style={Styles.titulo}>Add address</Text>
                <TouchableOpacity>
                    <Icon name="location-pin" size={18} style={Styles.bag}/>
                </TouchableOpacity>
            </View>

            
        </View>
    );
}

export default HeaderTree;