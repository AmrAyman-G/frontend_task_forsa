import React from "react";
import { FlatList } from "react-native";
import { useOffers } from "../../Data/ApiContext";

import RenderOfferItem from "./RenderOfferItem";
import SectionHeader from "./SectionHeader";

const ListContainer = (props) => {
  const { home } = props;
  const offers = useOffers();
  const filteredOffers = offers.filter((item) => item.thumbnail);

  const renderItem = ({ item }) => {
    return <RenderOfferItem item={item} />;
  };

  return (
    <FlatList
      style={{ width: "95%" }}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={({ item }) => {
        return <>{home && <SectionHeader item={item} />}</>;
      }}
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
