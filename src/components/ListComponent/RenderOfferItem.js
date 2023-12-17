import React, { memo, useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import formatDate from "../../constants/FormatDate";
import { RFValue } from "react-native-responsive-fontsize";
import LanguageContext from "../../constants/Language/LanguageContext";

export default RenderOfferItem = memo((props) => {
  const { item } = props;
  const { currentLanguage } = useContext(LanguageContext);
  const sectorTitle = item.brand.sector.title_en
    ? currentLanguage === "ar"
      ? item.brand.sector.title_ar
      : item.brand.sector.title_en
    : "";
  const expiryDate = formatDate(item.expiry_date, currentLanguage);

  return (
    <View style={styles.container}>
      <Image style={styles.itemImage} source={{ uri: item.thumbnail }} />
      <View style={styles.contantView}>
        <Text style={styles.brandSectorTitle}>{sectorTitle}</Text>
        <Text style={styles.brandTitle}>{item.brand.title}</Text>
        <Text style={styles.categoryLabel}>{item.title}</Text>
        <Text
          style={[
            styles.expiryDateText,
            { textAlign: currentLanguage === "ar" ? "right" : "left" },
          ]}
        >
          {expiryDate}
        </Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    borderRadius: 20,
    maxWidth: "50%",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  itemImage: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },

  contantView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginTop: -30,
    paddingTop: 10,
    width: "100%",
  },

  brandSectorTitle: {
    color: "black",
    fontSize: RFValue(12),
    fontWeight: "200",
  },
  brandTitle: {
    color: "black",
    fontSize: RFValue(16),
    fontWeight: "bold",
  },
  categoryLabel: {
    color: "black",
    fontSize: RFValue(12),
    fontWeight: "200",
    textAlign: "center",
    padding: "5%",
  },
  expiryDateText: {
    width: "90%",
    color: "black",
    fontSize: RFValue(10),
    fontWeight: "400",
    padding: "5%",
  },
});
