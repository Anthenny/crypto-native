import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";

const ListItem = ({ name, symbol, currentPrice, priceChangePercentage7d, logoUrl }) => {
  const priceChangeColor = priceChangePercentage7d > 0 ? "#34C759" : "#FF3B30";

  return (
    <TouchableOpacity>
      <View style={styles.itemWrapper}>
        {/* Left side */}
        <View style={styles.leftWrapper}>
          <Image
            source={{
              uri: logoUrl,
            }}
            style={styles.image}
          />
          <View style={styles.titleWrapper}>
            <Text style={styles.titel}>{name}</Text>
            <Text style={styles.sub}>{symbol.toUpperCase()}</Text>
          </View>
        </View>

        {/* Right side */}
        <View style={styles.rightWrapper}>
          <Text style={styles.titel}>
            $ {currentPrice.toLocaleString("en-US", { currency: "USD" })}
          </Text>
          <Text style={[styles.sub, { color: priceChangeColor }]}>
            {priceChangePercentage7d.toFixed(2)}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 50,
    width: 50,
  },
  titleWrapper: {
    marginLeft: 8,
  },
  titel: {
    fontSize: 16,
  },
  sub: {
    marginTop: 4,
    fontSize: 14,
    color: "#A9ABB1",
  },
  rightWrapper: {
    alignItems: "flex-end",
  },
});

export default ListItem;
