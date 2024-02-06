import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import StyleTxt from './StyleTxt';
import theme from './theme';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ModalComponent from './Modal';

const CuponConte = props => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
       
      };
    

    

    return (
        <View style={styles.contElement}>
            <StyleTxt fontSize = 'subHeading'>{props.title}</StyleTxt>
            <TouchableWithoutFeedback onPress={toggleModal}>
                <FontAwesome5 name="bookmark" style={styles.bookmarkIcon} />
            </TouchableWithoutFeedback>
            <ModalComponent visible={showModal} onClose={toggleModal} id = {props.id} />
        </View>
    );
};

const styles = StyleSheet.create({
    contElement: {
        padding: 10,
        backgroundColor: theme.colors.secondary,
        width: "100%",
        height: "auto",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        //marginBottom: 0,
        borderRadius: 10,
    },
    bookmarkIcon: {
        fontSize: 40,
        padding: 4,
    },
});

export default CuponConte;
