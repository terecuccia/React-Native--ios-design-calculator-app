import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCalculadora } from '../Component/BotonComponent/BotonCalculadora';
import { styles } from '../theme/appTheme';

export const CalculadoraScreen = () => {
    const [numero, setnumero] = useState('100');

    const limpiar = () => {
        setnumero('0');
    }
    
    return (
        <View style={styles.containerCalculator}>
            <Text style={styles.resultadoPequeno}>15000</Text>
            <Text style={styles.resultado}>{numero}</Text>

            {/* FILA DE BOTONES */}
            <View style={styles.row}>
                <BotonCalculadora texto='C' color='#9B9B9B' accion= { limpiar }/>
                <BotonCalculadora texto='+/-' color='#9B9B9B'/>
                <BotonCalculadora texto='del' color='#9B9B9B'/>
                <BotonCalculadora texto='/' color='#FF9427'/>
            </View>
            {/* FILA DE BOTONES */}
            <View style={styles.row}>
                <BotonCalculadora texto='7'/>
                <BotonCalculadora texto='8'/>
                <BotonCalculadora texto='9'/>
                <BotonCalculadora texto='X' color='#FF9427'/>
            </View>
            {/* FILA DE BOTONES */}
            <View style={styles.row}>
                <BotonCalculadora texto='4'/>
                <BotonCalculadora texto='5'/>
                <BotonCalculadora texto='6'/>
                <BotonCalculadora texto='-' color='#FF9427'/>
            </View>
            {/* FILA DE BOTONES */}
            <View style={styles.row}>
                <BotonCalculadora texto='1'/>
                <BotonCalculadora texto='2'/>
                <BotonCalculadora texto='3'/>
                <BotonCalculadora texto='+' color='#FF9427'/>
            </View>
            {/* FILA DE BOTONES */}
            <View style={styles.row}>
                <BotonCalculadora texto='0' ancho/>
                <BotonCalculadora texto='.'/>
                <BotonCalculadora texto='=' color='#FF9427'/>
            </View>
        </View>
    )
}
