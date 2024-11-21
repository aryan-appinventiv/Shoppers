import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CheckBox from '../../components/checkBox';

const Countries = ({ countries, toggleCountry }) => {
    return (
      <View>
        <Text style={styles.title}>Countries</Text>
        <View style={styles.listContainer}>
          {countries.map((item, index) => (
            <CheckBox
              key={index}
              label={item.name}
              checked={item.selected}
              onPress={() => toggleCountry(index)}
            />
          ))}
        </View>
      </View>
    );
  };

export default Countries

const styles = StyleSheet.create({})