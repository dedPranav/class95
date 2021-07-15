import React from 'react'
import react from 'react'
import { Text, TouchableOpacity, TextInput, View, StyleSheet, Modal } from 'react-native'
import db from '../config.js'
import firebase from 'firebase'

export default class Welcomescreen extends React.Component {

    constructor() {
        super()
        this.state = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            mobileNumber: "",
            address: "",
            showModal: false,
        }
    }

    signupModal = () => {
        <Modal visible={this.state.showModal}>
            <View>
                <TextInput
                    placeholder="username"
                    onChangeText={text => { this.setState({ username: text }) }} />
                <TextInput
                    placeholder="email"
                    onChangeText={text => { this.setState({ email: text }) }} />
                <TextInput
                    placeholder="password"
                    onChangeText={text => { this.setState({ password: text }) }} />
                <TextInput
                    placeholder="confirmPassword"
                    onChangeText={text => { this.setState({ confirmPassword: text }) }} />
                <TextInput
                    placeholder="mobileNumber"
                    onChangeText={text => { this.setState({ mobileNumber: text }) }} />
                <TextInput
                    placeholder="address"
                    onChangeText={text => { this.setState({ address: text }) }} />
                <TouchableOpacity
                    onPress={() => { this.userSignUp(this.state.username, this.state.password, this.state.confirmPassword) }}>
                    <Text>
                        Submit
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { this.setState({ showModal: false }) }}>
                    <Text>
                        Cancel
                    </Text>
                </TouchableOpacity>
            </View>
        </Modal>
    }

    userSignUp = (emailId, password, confirmPassword) => {
        if (password !== confirmPassword) {
            return Alert.alert("password doesn't match\nCheck your password.");
        } else {
            firebase
                .auth()
                .createUserWithEmailAndPassword(emailId, password)
                .then(() => {
                    db.collection("users").add({
                        username: this.state.username,
                        contact: this.state.mobileNumber,
                        email_id: this.state.email,
                        address: this.state.address
                    });
                    return Alert.alert("User Added Successfully", "", [
                        {
                            text: "OK",
                            onPress: () => this.setState({ showModal: false })
                        }
                    ]);
                })
                .catch(error => {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    return Alert.alert(errorMessage);
                });
        }
    };

    userLogin = (emailId, password) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(emailId, password)
            .then(() => {
                this.props.navigation.navigate("homescreen");
            })
            .catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;
                return Alert.alert(errorMessage);
            });
    }

    render() {
        return (
            <View style={styles.container}>
            <View style={{ justifyContent: "center", alignItems: "center" }}></View>
            {this.signupModal()}
            <View style={{ justifyContent: "center", alignItems: "center" }}>
            </View>
            <View>
                    <TextInput
                        placeholder="username"
                        style={styles.inputBox}
                        onChangeText={text => { this.setState({ username: text }) }}
                    />

                    <TextInput
                        placeholder="password"
                        style={styles.inputBox}
                        secureTextEntry={true}
                        onChangeText={text => { this.setState({ password: text }) }} />

                    <TouchableOpacity style={[styles.button, { backgroundColor: "green" }]}
                        onPress={() => { this.userLogin(this.state.username, this.state.password) }}>
                        <Text
                            style={styles.buttonText}>
                            Login
                        </Text>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity style={[styles.button, { backgroundColor: "darkorange" }]}
                            onPress={() => {
                                this.setState({ showModal: true })
                            }}>
                            <Text style={styles.buttonText}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: 200,
        height: 40,
        borderWidth: 1,
        marginTop: 10,
        padding: 5,
        borderRadius: 10
    },
    button: {
        width: 200,
        height: 40,
        borderWidth: 0.5,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center"
    }
});
