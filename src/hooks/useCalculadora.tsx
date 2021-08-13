
import { useRef, useState } from 'react';

enum Operadores {
    sumar, restar, multiplicar, dividir, nada
}

export const useCalculadora = () => {

    const [numeroAnterior, setNumeroAnterior] = useState('0')
    const [numero, setNumero] = useState('0');

    const ultimaOperacion = useRef<Operadores>()

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }

    const armarNumero = (numeroTexto: string) => {
        //no aceptar doble punto
        if (numero.includes('.') && numeroTexto === '.') return;

        if (numero.startsWith('0') || numero.startsWith('-0')) {
            //Punto decimal
            if (numeroTexto === '.' ) {
                setNumero(numero + numeroTexto);

            //Evaluar si el valor que ingresa es otro 0 y ya hay un punto
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto);

            //Evaluar si el numero es !== a 0 y no tiene un punto
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto);

            //Evaluar si el numero es !== a 0 y tiene un punto 
            } else if (numeroTexto !== '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto);

            //Evitar 00000.00
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numeroTexto);
            } else {
                setNumero(numero + numeroTexto);
            }
        } else {
            setNumero(numero + numeroTexto);
        }
    }

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));
        } else {
            setNumero('-' + numero);
        }
    }

    const btnDelete = () => {
        if (numero.length === 1 || (numero.length === 2 && numero.includes('-'))) {
            setNumero('0');
        } else {
            setNumero(numero.slice(0, -1));
        }
    }

    const cambiarNumPorAnterior = (signo: string) => {
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1));
        } else {
            setNumeroAnterior(numero + signo);
        }       
        setNumero('0');
    }

    const btnDividir = () => {
        cambiarNumPorAnterior(' / ');
        ultimaOperacion.current = Operadores.dividir;
    }

    const btnMultiplicar = () => {
        cambiarNumPorAnterior(' * ');
        ultimaOperacion.current = Operadores.multiplicar;
    }

    const btnRestar = () => {
        cambiarNumPorAnterior(' - ');
        ultimaOperacion.current = Operadores.restar;
    }

    const btnSumar = () => {
        cambiarNumPorAnterior(' + ');
        ultimaOperacion.current = Operadores.sumar;
    }

    const calcular = () => {
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior.slice(0, -3));
        console.log('numeroAnterior.slice(0, -3):', numeroAnterior.slice(0, -3)); 
        console.log('num2: ', num2);               

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(String(num1+num2));
                ultimaOperacion.current = Operadores.nada;
            break;

            case Operadores.restar:
                setNumero(String(num2-num1));
                ultimaOperacion.current = Operadores.nada;
            break;

            case Operadores.multiplicar:
                setNumero(String(num1*num2));
                ultimaOperacion.current = Operadores.nada;
            break;

            case Operadores.dividir:
                if (num1 === 0) {
                    setNumero('Math Error');
                } else {
                    setNumero(String(num2/num1));
                }
                ultimaOperacion.current = Operadores.nada;
            break;

            case Operadores.nada:
                setNumero(numero);
                ultimaOperacion.current = Operadores.nada;
            break;
        
            default:
            break;
        }

        setNumeroAnterior(numeroAnterior + String(num1));

    }

    return {
        numeroAnterior, 
        numero, 
        limpiar, 
        positivoNegativo,
        btnDelete,
        btnDividir,
        armarNumero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
    }
}
