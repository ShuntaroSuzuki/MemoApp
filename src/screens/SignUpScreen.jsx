import React from 'react';
import {
 View, Text, TextInput, StyleSheet,
} from 'react-native';

import Appbar from '../components/Appbar';
import Button from '../components/Button';

export default function SignUpScreen() {
    return (
      <View style={styles.container}>
        <Appbar />
        <View style={styles.inner}>
          <Text style={styles.Title}>Log In</Text>
          <TextInput style={styles.input} value="Email Address" />
          <TextInput style={styles.input} value="Password" />
          <Button label="Submit" />
          <View style={styles.footer}>
            <Text style={styles.footerText}>Already registered?</Text>
            <Text style={styles.footerLink}>Log in.</Text>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8',
    },
    inner: {
        paddingHorizontal: 27,
        paddingVertical: 24,
    },
    Title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    input: {
        fontSize: 24,
        height: 48,
        borderColor: '#dddddd',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#467FD3',
    },
    footer: {
        flexDirection: 'row',
    },
});
