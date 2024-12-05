import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {images} from '../../assets';
import LogoutModal from '../../components/logoutModal';
import Toast from 'react-native-simple-toast';
import {colors} from '../../utils/colors';
import {strings} from '../../utils/strings';
import {getDetailStyles} from './styles';
import {useTheme} from '../../utils/ThemeContext';

const Detail = () => {
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const route = useRoute();
  const {item}: any = route.params;
  const Navigation = useNavigation();

  useEffect(() => {
    checkIfSaved();
  }, []);

  const {isDarkMode} = useTheme();
  const styles = getDetailStyles(isDarkMode);

  const checkIfSaved = async () => {
    try {
      const savedItems = await AsyncStorage.getItem('savedNews');
      const savedList = savedItems ? JSON.parse(savedItems) : [];
      const exists = savedList.some((news: any) => news.title === item.title);
      setIsSaved(exists);
    } catch (error) {
      console.log(strings.error_checking_saved_news, error);
    }
  };

  const toggleSave = async () => {
    try {
      const savedItems = await AsyncStorage.getItem('savedNews');
      const savedList = savedItems ? JSON.parse(savedItems) : [];
      if (isSaved) {
        const updatedList = savedList.filter(
          (news: any) => news.title !== item.title,
        );
        await AsyncStorage.setItem('savedNews', JSON.stringify(updatedList));
        setIsSaved(false);
        Toast.show(strings.remove_news, Toast.SHORT, {
          backgroundColor: colors.orange,
        });
        setLogoutModalVisible(false);
      } else {
        savedList.push(item);
        await AsyncStorage.setItem('savedNews', JSON.stringify(savedList));
        setIsSaved(true);
        Toast.show(strings.save_news, Toast.SHORT, {
          backgroundColor: colors.green,
        });
        setLogoutModalVisible(false);
      }
    } catch (error) {
      console.log(strings.error_saving_removing_news, error);
      setLogoutModalVisible(false);
    }
  };

  const goback = () => {
    Navigation.goBack();
  };
  const closeLogoutModal = () => {
    setLogoutModalVisible(false);
  };
  const openLogoutModal = () => {
    setLogoutModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goback} style={styles.backButton}>
          <Image source={images.goback} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={openLogoutModal} style={styles.backButton}>
          <Image
            source={isSaved ? images.saved1 : images.saved}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Image source={{uri: item.image_url}} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <View style={styles.sourceCont}>
          <Text style={styles.source}>{strings.source}</Text>
          <Image source={{uri: item.source_icon}} style={styles.sourceIcon} />
          <Text style={styles.source}>{item.source_name}</Text>
        </View>
        <Text style={styles.desc}>{item.description}</Text>
        <Text style={styles.desc}>{strings.dummy}</Text>
        <View style={styles.viewCont}>
          <Text style={styles.keyword}>{strings.keywords}</Text>

          {item.keywords && item.keywords.length > 0 ? (
            item.keywords.map((keyword: string | undefined, index: number) => (
              <Text key={index} style={styles.keywords}>
                {keyword}
                {index < item.keywords.length - 1 ? ', ' : ''}
              </Text>
            ))
          ) : (
            <Text style={styles.keywords}>{strings.no_keywords_available}</Text>
          )}
        </View>

        <View style={styles.viewCont}>
          <Text style={styles.keyword}>{strings.published_on}</Text>
          <Text style={styles.keywords}>{item.pubDate}, </Text>
        </View>
      </ScrollView>
      <LogoutModal
        visible={logoutModalVisible}
        onClose={closeLogoutModal}
        onConfirm={toggleSave}
        title={
          isSaved
            ? strings.modal_title_remove_news
            : strings.modal_title_save_news
        }
        desc={
          isSaved
            ? strings.modal_desc_remove_news
            : strings.modal_desc_save_news
        }
      />
    </View>
  );
};

export default Detail;
