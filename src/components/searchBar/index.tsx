import {StyleSheet, View, TextInput, Image, Platform} from 'react-native';
import React from 'react';
import {vw, vh} from '../../utils/dimensions'
import { images } from '../../assets';
import { colors } from '../../utils/colors';

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <Image source={images.search} style={styles.logo} />
      <TextInput
        placeholder="Search"
        placeholderTextColor={colors.darkgray}
        autoCapitalize="none"
        style={styles.searchTxt}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
    searchBar:{
        backgroundColor:colors.searchbar,
        marginHorizontal: vw(15),
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:vw(10),
        paddingVertical: Platform.OS==="ios"? vh(10): vh(6),
        borderRadius:vh(10),
        gap:vh(10),
        marginVertical:10,
      },
      searchTxt:{
        flex:1,
        color: colors.darkgray,
      },
      logo: {
        width: vw(20),
        height: vw(20),
      },
});
