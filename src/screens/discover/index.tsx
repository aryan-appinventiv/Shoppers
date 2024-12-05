import {ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SearchBar from '../../components/searchBar';
import {vh} from '../../utils/dimensions';
import newsCategoryList from '../../constants/Categories';
import CheckBox from '../../components/checkBox';
import CountryList from '../../constants/CountryList';
import Button from '../../components/button';
import axios from 'axios';
import {strings} from '../../utils/strings';
import styles from './styles';
import {useTheme} from '../../utils/ThemeContext';
import {colors} from '../../utils/colors';

const Discover = ({navigation}: any) => {
  const [categories, setCategories] = useState(newsCategoryList);
  const [countries, setCountries] = useState(CountryList);
  const [searchedNews, setSearchedNews] = useState([]);
  const {isDarkMode} = useTheme();

  const {top: safeTop} = useSafeAreaInsets();

  const getSearchedNews = async (
    selectedCategories: string = '',
    selectedCountries: string,
  ) => {
    try {
      let categoryString = '';
      if (selectedCategories.length !== 0) {
        categoryString = `&category=${selectedCategories}`;
      }
      let countryString = '';
      if (selectedCountries.length !== 0) {
        countryString = `&country=${selectedCountries}`;
      }

      const URL = `https://newsdata.io/api/1/news?apikey=pub_58618a7cc7260bd7721baed946811425b8473&language=en&image=1&removeduplicate=1${countryString}${categoryString}`;
      const response = await axios.get(URL);
      if (response && response.data) {
        setSearchedNews(response.data.results);
      }
    } catch (err) {
      console.log('error', err);
    }
  };

  const toggleCategory = (id: number) => {
    setCategories(prev =>
      prev.map(item =>
        item.id === id ? {...item, selected: !item.selected} : item,
      ),
    );
  };

  const toggleCountry = (id: number) => {
    setCountries(prev =>
      prev.map((item, index) =>
        index === id ? {...item, selected: !item.selected} : item,
      ),
    );
  };

  const search = () => {
    const selectedCategories = categories
      .filter(item => item.selected)
      .map(item => item.slug)
      .join(',');

    const selectedCountries = countries
      .filter(item => item.selected)
      .map(item => item.code)
      .join(',');

    getSearchedNews(selectedCategories, selectedCountries);

    navigation.navigate('Search', {searchedNews});
  };

  return (
    <ScrollView
      style={[
        styles.container,
        {
          paddingTop: safeTop + vh(15),
          backgroundColor: isDarkMode ? colors.black : colors.white,
        },
      ]}
      showsVerticalScrollIndicator={false}>
      <SearchBar />
      <Text
        style={[
          styles.title,
          {color: isDarkMode ? colors.white : colors.black},
        ]}>
        {strings.categories}
      </Text>
      <View style={styles.listContainer}>
        {categories.map(item => (
          <CheckBox
            key={item.id}
            label={item.title}
            checked={item.selected}
            onPress={() => {
              toggleCategory(item.id);
            }}
          />
        ))}
      </View>

      <Text
        style={[
          styles.title,
          {color: isDarkMode ? colors.white : colors.black},
        ]}>
        {strings.countries}
      </Text>
      <View style={styles.listContainer}>
        {countries.map((item, index) => (
          <CheckBox
            key={index}
            label={item.name}
            checked={item.selected}
            onPress={() => {
              toggleCountry(index);
            }}
          />
        ))}
      </View>

      <View style={styles.button}>
        <Button onPress={search} title={strings.search} />
      </View>
    </ScrollView>
  );
};

export default Discover;
