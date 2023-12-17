import React, { useCallback, useState } from "react";
import { FlatList, Image, Text, View, TouchableOpacity } from "react-native";
import {
  useAdditionalLoans,
  useBrands,
  useOffers,
} from "../../Data/ApiContext";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
import formatDate from "../../constants/FormatDate";

const renderItem = ({ item }) => {
  const expiryDate = formatDate(item.expiry_date);

  return (
    <View
      style={{
        flex: 1,
        margin: 8,
        borderRadius: 20,

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
      }}
    >
      <Image
        style={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          width: "100%",
          height: 150,
          resizeMode: "cover",
        }}
        source={{ uri: item.thumbnail }}
      />
      <View
        style={{
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
        }}
      >
        <Text
          style={{ color: "black", fontSize: RFValue(12), fontWeight: "200" }}
        >
          {item.brand.sector.title_en}
        </Text>
        <Text
          style={{ color: "black", fontSize: RFValue(16), fontWeight: "bold" }}
        >
          {item.brand.title}
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: RFValue(12),
            fontWeight: "200",
            textAlign: "center",
            padding: "5%",
          }}
        >
          {item.category.label}
        </Text>
        <Text
          style={{
            width: "90%",
            color: "black",
            fontSize: RFValue(10),
            fontWeight: "400",
            textAlign: "left",
            padding: "5%",
          }}
        >
          {expiryDate}
        </Text>
      </View>
    </View>
  );
};

const sections = ["All", "Fashion", "Electronics", "Furniture", "Travel"];
const sectionHeader = () => {
  const [section, setSection] = useState("All");

  const renderBrandSection = useCallback(
    ({ item }) => {
      const isSelected = section === item;

      return (
        <TouchableOpacity
          onPress={() => {
            setSection(isSelected ? null : item);
          }}
          style={{
            padding: 10,
            margin: 10,
            borderRadius: 8,
            backgroundColor: isSelected ? "#3EBDAC" : "rgba(0,0,0,0)",
          }}
        >
          <Text
            style={{
              fontSize: RFValue(14),
              fontWeight: "400",
              color: isSelected ? "white" : "black",
            }}
          >
            {item}
          </Text>
        </TouchableOpacity>
      );
    },
    [section]
  );

  const renderBrandItems = useCallback(
    ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            width: RFValue(74),
            height: RFValue(58),
            marginRight: 20,
            borderColor: "#D4D4D4",
            borderWidth: 1,
            alignItems: "center",
          }}
        >
          <Image
            style={{
              flexGrow: 1,
              aspectRatio: 0.9,
              resizeMode: "contain",
            }}
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
        style={{
          flex: 1,
          alignItems: "center",
          padding: 20,
          margin: "1%",
          borderRadius: 20,
        }}
      >
        <Text
          style={{ color: "white", fontSize: RFValue(12), fontWeight: "600" }}
        >
          {item.name_en}
        </Text>
      </LinearGradient>
    );
  };

  const brands = useBrands();
  const additionalLoans = useAdditionalLoans();
  const filteredBrands = brands.filter((item) => item.thumbnail);
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            marginTop: "7%",
            marginBottom: "3%",
            fontSize: RFValue(16),
            fontWeight: "700",
          }}
        >
          Top brands in retail
        </Text>
        <TouchableOpacity style={{ marginTop: "7%", marginBottom: "3%" }}>
          <Text
            style={{
              fontSize: RFValue(12),
              fontWeight: "400",
            }}
          >
            View all
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={sections}
        renderItem={renderBrandSection}
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={filteredBrands}
        renderItem={renderBrandItems}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            marginTop: "7%",
            marginBottom: "3%",
            fontSize: RFValue(16),
            fontWeight: "700",
          }}
        >
          Request Additional Loan
        </Text>
        <TouchableOpacity style={{ marginTop: "7%", marginBottom: "3%" }}>
          <Text
            style={{
              fontSize: RFValue(16),
              fontWeight: "400",
            }}
          >
            See Less
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={additionalLoans}
        numColumns={2}
        renderItem={renderLoanItems}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            marginTop: "7%",
            marginBottom: "3%",
            fontSize: RFValue(16),
            fontWeight: "700",
          }}
        >
          Offers Select for You
        </Text>
        <TouchableOpacity style={{ marginTop: "7%", marginBottom: "3%" }}>
          <Text
            style={{
              fontSize: RFValue(16),
              fontWeight: "400",
            }}
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ListContainer = () => {
  const offers = useOffers();
  const filteredOffers = offers.filter((item) => item.thumbnail);
  return (
    <FlatList
      style={{ width: "90%" }}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={sectionHeader}
      data={filteredOffers}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      initialNumToRender={10}
      updateCellsBatchingPeriod={1000}
      maxToRenderPerBatch={5}
      fadingEdgeLength={50}
    />
  );
};

export default ListContainer;
