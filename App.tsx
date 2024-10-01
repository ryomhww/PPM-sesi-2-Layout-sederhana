import { View, Text, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
const banner = require('./assets/banner.png');
const plus = require('./assets/+.png');
const pp = require('./assets/pp.png');

const Coffee = () => {
    return (
        <ScrollView style={{ backgroundColor: "black" }} contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.Lokasi}>Location</Text>
                    <Text style={styles.cityName}>Sukabumi, West java</Text>
                </View>
                <View>
                    <Image source={pp} style={styles.Avatar}></Image>
                </View>
            </View>

            <View style={styles.searchContainer}>
                <TextInput 
                    placeholder="Search coffee" 
                    placeholderTextColor="#B7B7B7" 
                    style={[styles.search, {color: 'black'}]} 
                />
            </View>

            <View style={styles.promoContainer}>
                <View style={styles.promoBadge}>
                    <Text style={styles.promoBadgeText}>Promo</Text>
                </View>
                <Image source={banner} style={styles.promoImage} />
                <Text style={styles.promoText}>Buy one get one FREE</Text>
            </View>

            <ScrollView horizontal={true} style={styles.scrollView}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Cappuccino</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttoncase}>
                        <Text style={styles.buttonTextcase}>Machito</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttoncase}>
                        <Text style={styles.buttonTextcase}>Latte</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttoncase}>
                        <Text style={styles.buttonTextcase}>Americano</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttoncase}>
                        <Text style={styles.buttonTextcase}>Espresso</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttoncase}>
                        <Text style={styles.buttonTextcase}>Green Coffe</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <View style={styles.cardWrapper}>
                <View style={styles.cardContainer}>
                    <Image source={require('./assets/cofe1.png')} style={styles.cardImage} />
                    <Text style={styles.cardTitle}>Cappuccino</Text>
                    <Text style={styles.cardDescription}>with chocolate</Text>
                    <Text style={styles.cardPrice}>$4.50</Text>
                    <Image source={plus} style={styles.ikonplus}></Image>
                </View>

                <View style={styles.cardContainer}>
                    <Image source={require('./assets/cofe2.png')} style={styles.cardImage} />
                    <Text style={styles.cardTitle}>Machito</Text>
                    <Text style={styles.cardDescription}>with chocolate</Text>
                    <Text style={styles.cardPrice}>$3.80</Text>
                    <Image source={plus} style={styles.ikonplus}></Image>
                </View>

                <View style={styles.cardContainer}>
                    <Image source={require('./assets/cofe3.png')} style={styles.cardImage} />
                    <Text style={styles.cardTitle}>Latte</Text>
                    <Text style={styles.cardDescription}>with chocolate</Text>
                    <Text style={styles.cardPrice}>$4.00</Text>
                    <Image source={plus} style={styles.ikonplus}></Image>
                </View>

                <View style={styles.cardContainer}>
                    <Image source={require('./assets/cofe4.png')} style={styles.cardImage} />
                    <Text style={styles.cardTitle}>Americano</Text>
                    <Text style={styles.cardDescription}>with chocolate</Text>
                    <Text style={styles.cardPrice}>$3.00</Text>
                    <Image source={plus} style={styles.ikonplus}></Image>
                </View>

                <View style={styles.cardContainer}>
                    <Image source={require('./assets/cofe5.png')} style={styles.cardImage} />
                    <Text style={styles.cardTitle}>Espresso</Text>
                    <Text style={styles.cardDescription}>original</Text>
                    <Text style={styles.cardPrice}>$2.00</Text>
                    <Image source={plus} style={styles.ikonplus}></Image>
                </View>

                <View style={styles.cardContainer}>
                    <Image source={require('./assets/cofe6.png')} style={styles.cardImage} />
                    <Text style={styles.cardTitle}>Green Coffe</Text>
                    <Text style={styles.cardDescription}>original</Text>
                    <Text style={styles.cardPrice}>$3.20</Text>
                    <Image source={plus} style={styles.ikonplus}></Image>
                </View>
            </View>
        </ScrollView>
    );
};

export default Coffee;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 63,
        marginLeft: 30,
        marginRight: 30
    },
    Avatar: {
        width: 44,
        height: 44,
        borderRadius: 10,
    },
    Lokasi: {
        color: "#B7B7B7",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 15.12,
        letterSpacing: 1,
        fontFamily: "sora"
    },
    cityName: {
        fontFamily: "sora",
        fontWeight: "600",
        fontSize: 14,
        lineHeight: 17.64,
        color: "#DDDDDD",
    },
    searchContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    search: {
        paddingLeft: 20,
        borderRadius: 16,
        width: 340,
        height: 52,
        borderWidth: 1,
        borderColor: '#DDDDDD',
        backgroundColor: "white",
    },
    promoContainer: {
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 16,
        backgroundColor: '#FFFFFF',
        position: 'relative',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    promoBadge: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: '#FF4D4D',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
        zIndex: 2,
    },
    promoBadgeText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    promoImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        resizeMode: 'cover',
        zIndex: 1,
    },
    promoText: {
        position: 'absolute',
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 28,
        bottom: 20, 
        left: 20,
        zIndex: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    scrollView: {
        marginTop: 20,
        marginLeft: 25,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        backgroundColor: "#C67C4E",
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginRight: 10,
    },
    buttoncase: {
        backgroundColor: "#ffffff",
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginRight: 10,
    },
    buttonText: {
        fontWeight: "600",
        fontFamily: "sora",
        fontSize: 14,
        color: "#FFFFFF",
    },
    buttonTextcase: {
        fontWeight: "600",
        fontFamily: "sora",
        fontSize: 14,
        color: "#2F4B4E",
    },
    cardWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        margin: 10,
        marginTop: 20,
    },
    cardContainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 4,
        marginBottom: 7,
        width: '45%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    cardTitle: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#333",
        marginTop: 10,
        marginLeft: 5
    },
    cardImage: {
        width: '100%',
        height: 130,
        borderRadius: 10,
    },
    cardDescription: {
        marginTop: 2,
        fontSize: 14,
        marginLeft: 7,
        color: "#666",
    },
    cardPrice: {
        marginTop: 10,
        fontSize: 18,
        marginLeft: 10,
        fontWeight: 'bold',
        color: "#333",
    },
    ikonplus: {
        marginHorizontal: 130,
        marginTop: -30,
        width: 35,
        height: 35
    },
});
