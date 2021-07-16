/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Seta from 'react-native-vector-icons/MaterialIcons';
import Filter from 'react-native-vector-icons/AntDesign';
import Styles from './Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Header = () => {
    const [nome, setNome] = useState('');
    useEffect(() => {
        const recuperarNome = async () => {
            const nomeSalvo = await AsyncStorage.getItem('NomeCadastro');
            if (nomeSalvo) {
                setNome(nomeSalvo);
                console.log('nome', nomeSalvo);
            }
        };

        recuperarNome();
    }, []);

    return (
        <View style={Styles.barraTopo}>
            <View style={Styles.topo}>
                {/* <TouchableOpacity>
                    <Icon name="md-location-outline" size={18} style={Styles.location} />
                </TouchableOpacity>
                <Text style={Styles.tituloLocal}>Zihuatanejo, Gro</Text>
                <TouchableOpacity>
                    <Seta name="keyboard-arrow-down" size={18} style={Styles.seta} />
                </TouchableOpacity> */}
            </View>

            <TouchableOpacity>
                <Text style={Styles.filter}>Olá, <Text style={Styles.filterNome}>{nome}</Text></Text>
            </TouchableOpacity>
        </View>
    );
};

export default Header;
