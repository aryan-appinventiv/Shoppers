import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import SearchBar from '../../components/searchBar'
import { vh, vw } from '../../utils/dimensions'
import newsCategoryList from '../../constants/Categories'
import CheckBox from '../../components/checkBox'
import CountryList from '../../constants/CountryList'
import Button from '../../components/button'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'


const Discover = () => {
  const [categories, setCategories] = useState(newsCategoryList);
  const [countries, setCountries] = useState(CountryList);
  const [searchedNews, setSearchedNews] = useState([]);
  
  const {top: safeTop} = useSafeAreaInsets();
  const Navigation = useNavigation();

  const getSearchedNews=async(selectedCategories:string = '', selectedCountries:string)=>{
    try{
      let categoryString = '';
      if(selectedCategories.length !== 0){
        categoryString = `&category=${selectedCategories}`;
      }
      let countryString = '';
      if(selectedCountries.length !== 0){
        countryString = `&country=${selectedCountries}`;
      }

      const URL = `https://newsdata.io/api/1/news?apikey=pub_58618a7cc7260bd7721baed946811425b8473&language=en&image=1&removeduplicate=1${countryString}${categoryString}`;
      const response = await axios .get(URL);
      if(response && response.data){
        setSearchedNews(response.data.results);
      }
    } catch(err){
      console.log('error', err);
    }
  }

  const toggleCategory = (id) => {
    setCategories((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };
  
  const toggleCountry = (id) => {
    setCountries((prev) =>
      prev.map((item, index) =>
        index === id ? { ...item, selected: !item.selected } : item
      )
    );
  };
  
  const search = () => {
    const selectedCategories = categories
      .filter((item) => item.selected)
      .map((item) => item.slug)
      .join(","); 
  
    const selectedCountries = countries
      .filter((item) => item.selected)
      .map((item) => item.code)
      .join(","); 

      getSearchedNews(selectedCategories, selectedCountries);
  
    Navigation.navigate('Search', {searchedNews });
  };
  

  return (
    <View style={[styles.container,{paddingTop: safeTop+vh(10)}]}>
      <SearchBar/>
      <Text style={styles.title}>Categories</Text>
      <View style={styles.listContainer}>
         {categories.map((item)=>(
            <CheckBox key={item.id} label={item.title} checked={item.selected} onPress={()=>{toggleCategory(item.id)}}/>
         ))}
      </View>

      <Text style={styles.title}>Countries</Text>
      <View style={styles.listContainer}>
         {countries.map((item, index)=>(
            <CheckBox key={index} label={item.name} checked={item.selected} onPress={()=>{toggleCountry(index)}}/>
         ))}
      </View>
      
      <View style={styles.button}>
      <Button onPress={search} title={"Search"}/>
      </View>

    </View>
  )
}

export default Discover

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  },
  title:{
    paddingHorizontal: vw(15),
    fontSize: vw(18),
    fontWeight: '600',
    marginVertical: vh(10),
  },
  listContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: vw(16),
    paddingHorizontal: vw(15),
    marginBottom: vh(20),
  },
  button:{
    marginHorizontal: vw(15),
  }
})