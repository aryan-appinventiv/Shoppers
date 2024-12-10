import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {colors} from '../../utils/colors';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Detail'>;

interface SliderItemProps {
  slideItem: {
    image_url: string;
    source_icon?: string;
    source_name: string;
    title: string;
  };
  index: number;
}

const SliderItem: React.FC<SliderItemProps> = ({slideItem, index}) => {
  const Navigation = useNavigation<NavigationProps>();

  const gotoDetail = (item: SliderItemProps['slideItem']) => {
    Navigation.navigate('Detail', {item});
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.itemWrapper}
      onPress={() => gotoDetail(slideItem)}>
      <Image source={{uri: slideItem.image_url}} style={styles.image} />
      <LinearGradient
        colors={[colors.transparent, colors.lg]}
        style={styles.background}>
        <View style={styles.sourceCont}>
          <View style={styles.sourceInfo}>
            {slideItem.source_icon && (
              <Image
                source={{uri: slideItem.source_icon}}
                style={styles.sourceIcon}
              />
            )}
            <Text style={styles.sourceName}>{slideItem.source_name}</Text>
          </View>
          <Text style={styles.title}>{slideItem.title}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default SliderItem;
