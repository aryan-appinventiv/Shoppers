import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {strings} from '../../utils/strings';
import {useTheme} from '../../utils/ThemeContext';
import {getPrivacyPolicyStyles} from './styles';
import InsideAppHeader from '../../components/insideAppHeader';

const PrivacyPolicy = () => {
  const Navigation = useNavigation();
  const goback = () => {
    Navigation.goBack();
  };
  const {isDarkMode} = useTheme();
  const styles = getPrivacyPolicyStyles(isDarkMode);
  return (
    <View style={styles.container}>
      <InsideAppHeader title={strings.privacy_policy_for_newzz_app} onPress={goback} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={{padding: 20, marginBottom: 30}}>
        <Text style={styles.date}>{strings.effective_date}</Text>

        <Text style={styles.sectionTitle}>{strings.privacy_title_1}</Text>
        <Text style={styles.sectionText}>{strings.privacy_desc_1}</Text>

        <Text style={styles.sectionTitle}>{strings.privacy_title_2}</Text>
        <Text style={styles.sectionText}>{strings.privacy_desc_2}</Text>

        <Text style={styles.sectionTitle}>{strings.privacy_title_3}</Text>
        <Text style={styles.sectionText}>{strings.privacy_desc_3}</Text>

        <Text style={styles.sectionTitle}>{strings.privacy_title_4}</Text>
        <Text style={styles.sectionText}>{strings.privacy_desc_4}</Text>

        <Text style={styles.sectionTitle}>{strings.privacy_title_5}</Text>
        <Text style={styles.sectionText}>{strings.privacy_desc_5}</Text>

        <Text style={styles.sectionTitle}>{strings.privacy_title_6}</Text>
        <Text style={styles.sectionText}>{strings.privacy_desc_6}</Text>

        <Text style={styles.sectionTitle}>{strings.privacy_title_7}</Text>
        <Text style={styles.sectionText}>{strings.privacy_desc_7}</Text>

        <Text style={styles.sectionTitle}>{strings.privacy_title_8}</Text>
        <Text style={styles.sectionText}>{strings.privacy_desc_8}</Text>
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicy;
