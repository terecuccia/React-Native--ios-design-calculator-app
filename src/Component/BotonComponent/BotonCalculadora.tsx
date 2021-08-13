import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface Props {
    texto: string,
    color?: string,
    ancho?: boolean,
    accion: (numeroTexto: string) => void;
}

export const BotonCalculadora = ({ texto, color= '#2D2D2D', ancho = false, accion }: Props) => {
    return (
        <TouchableOpacity
            onPress={ () => accion(texto) }
        >
            <View 
                style={{
                    ...styles.button,
                    backgroundColor: color,
                    width: (ancho) ? 180 : 80
                }}
            >
                    <Text 
                        style={{
                            ...styles.buttonText,
                            color: (color === '#9B9B9B') ? 'black' : 'white'
                        }}
                    >
                        {texto}
                    </Text>
            </View>
        </TouchableOpacity>
    )
}
