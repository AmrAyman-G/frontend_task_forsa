import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
import { useAdditionalLoans, useBrands } from "../../Data/ApiContext";
import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Platform,
  ImageBackground,
} from "react-native";
import LanguageContext from "../../constants/Language/LanguageContext";
import { items } from "../../constants/types/items";

const sections_en = ["All", "Fashion", "Electronics", "Furniture", "Travel"];
const sections_ar = ["الكل", "الأزياء", "الإلكترونيات", "الأثاث", "السفر"];

export default SectionHeader = () => {
  const { currentLanguage } = useContext(LanguageContext);
  const [section, setSection] = useState("All");

  useEffect(() => {
    setSection(currentLanguage === "ar" ? "الكل" : "All");
  }, [currentLanguage]);
  const translatedItem = items().translate;

  // Render Brand Sections
  const renderBrandSection = useCallback(
    ({ item }) => {
      const isSelected = section === item;

      return (
        <TouchableOpacity
          onPress={() => {
            setSection(isSelected ? null : item);
          }}
          style={[
            styles.sectionButton,
            {
              backgroundColor: isSelected ? "#3EBDAC" : "rgba(0,0,0,0)",
            },
          ]}
        >
          <Text
            style={[
              styles.sectionText,
              {
                transform: [{ scaleX: currentLanguage === "ar" ? -1 : 1 }],
                color: isSelected ? "white" : "black",
              },
            ]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      );
    },
    [section, currentLanguage]
  );

  // Render Brand Items
  const renderBrandItems = useCallback(
    ({ item }) => {
      return (
        <TouchableOpacity style={styles.renderBrandItem}>
          <Image
            style={styles.renderBrandImage}
            source={{ uri: item.thumbnail }}
          />
        </TouchableOpacity>
      );
    },
    [section]
  );

  const colorSets = [
    ["#330838", "#0D7E8C"],
    ["#0BBDB6", "#45B1BE"],
    ["#11232A", "#46819c"],
    ["#00B1D8", "#016485"],
  ];
  let colorIndex = 0;

  const renderLoanItems = ({ item }) => {
    const colorStack = colorSets[colorIndex];
    colorIndex = (colorIndex + 1) % colorSets.length;

    return (
      <LinearGradient
        colors={colorStack}
        start={{ x: 0, y: 0 }}
        end={{ x: 1.5, y: 0 }}
        style={styles.linearGradientView}
      >
        <Text style={styles.loanItemName}>
          {currentLanguage === "ar" ? item.name_ar : item.name_en}
        </Text>
      </LinearGradient>
    );
  };

  const brands = useBrands();
  const additionalLoans = useAdditionalLoans();
  const filteredBrands = brands.filter((item) => item.thumbnail);
  return (
    <View>
      <View
        style={{
          flexDirection: currentLanguage === "ar" ? "row-reverse" : "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.sectionsHeaderTitle}>
          {translatedItem.brandeSectionTitel}
        </Text>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllButtonTitle}>
            {translatedItem.viewAll}
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          transform: [{ scaleX: currentLanguage === "ar" ? -1 : 1 }],
        }}
      >
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={currentLanguage === "ar" ? sections_ar : sections_en}
          renderItem={renderBrandSection}
        />
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={filteredBrands}
        renderItem={renderBrandItems}
      />
      <View
        style={{
          flexDirection: currentLanguage === "ar" ? "row-reverse" : "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.sectionsHeaderTitle}>
          {translatedItem.loanSectionTitel}
        </Text>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.moreButton}>{translatedItem.seeLess}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={additionalLoans}
        numColumns={2}
        renderItem={renderLoanItems}
      />

      <View
        style={{
          flexDirection: currentLanguage === "ar" ? "row-reverse" : "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.sectionsHeaderTitle}>
          {translatedItem.offersSectionTitel}
        </Text>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.moreButton}>{translatedItem.seeAll}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionButton: {
    padding: 10,
    margin: 10,
    borderRadius: 8,
  },
  sectionText: {
    fontSize: RFValue(14),
    fontWeight: "400",
  },
  renderBrandItem: {
    width: RFValue(74),
    height: RFValue(58),
    marginRight: 20,
    borderColor: "#D4D4D4",
    borderWidth: 1,
    alignItems: "center",
  },
  renderBrandImage: {
    flexGrow: 1,
    aspectRatio: 0.9,
    resizeMode: "contain",
  },
  linearGradientView: {
    flex: 1,
    alignItems: "center",
    padding: "5%",
    margin: "1%",
    borderRadius: Platform.isPad ? 30 : 15,
  },
  loanItemName: {
    color: "white",
    fontSize: RFValue(12),
    fontWeight: "600",
  },

  sectionsHeaderTitle: {
    marginTop: Platform.isPad ? "8%" : Platform.OS === "android" ? "4%" : "6%",
    marginBottom: "3%",
    fontSize: RFValue(16),
    fontWeight: "700",
  },
  viewAllButton: {
    marginTop: Platform.isPad ? "8%" : Platform.OS === "android" ? "4%" : "6%",
    marginBottom: "3%",
  },
  viewAllButtonTitle: {
    fontSize: RFValue(12),
    fontWeight: "400",
  },
  moreButton: {
    fontSize: RFValue(16),
    fontWeight: "400",
  },
});
