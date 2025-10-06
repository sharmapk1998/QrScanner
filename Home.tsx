import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import QRScanner from "./qrScanner";
const dWidth = Dimensions.get("window").width;

const clr1 = "#D10014";

const ScanQRPage = () => {
    const [showQR, setShowQR] = useState(false);
    const [qrCode, setQrCode] = useState("");

    const openQRscanner = () => {
        setShowQR(true);
    };

    const onQrRead = (qrtext: any) => {
        setQrCode(qrtext);
        setShowQR(false);
    };

    return (
        <View style={styles.page}>
            {qrCode ? (
                <Text style={{ color: clr1 }}>Values in QR is</Text>
            ) : null}
            {qrCode ? (
                <Text style={{ fontSize: 16, color: "black", marginHorizontal: 20 }}>
                    {"QR Value \n" + qrCode}
                </Text>
            ) : null}
            {qrCode ? (
                null
            ) :
                <Text style={{ color: clr1, fontSize: 30 }}>Welcome Sir</Text>
            }
            <TouchableOpacity onPress={() => openQRscanner()} style={styles.btn}>
                <Text style={{ color: clr1 }}>Scan QR</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
                <Image
                    source={require("./assets/logo.png")} // 👈 place your logo here
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.footerText}>Thank you for opportunity</Text>
                <Text style={styles.footerText}>
                    Created by Punit Kumar Sharma, Republic Media Assignment
                </Text>
            </View>
            {showQR ? <QRScanner onRead={onQrRead} /> : null}
        </View>
    );
};

export default ScanQRPage;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    btn: {
        backgroundColor: "transparent",
        alignItems: "center",
        borderRadius: 10,
        paddingVertical: "3%",
        width: "50%",
        borderWidth: 2,
        borderColor: clr1,
    },
    btnText: {
        color: clr1,
    },
    footer: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 40,
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 8,
    },
    footerText: {
        // color: "gray",
        fontSize: 13,
        textAlign: "center",
    },
});
