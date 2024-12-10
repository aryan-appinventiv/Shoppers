import React from 'react';
import { ScrollView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {strings} from '../../utils/strings';
import {useTheme} from '../../utils/ThemeContext';
import {getTermsStyles} from './styles';
import InsideAppHeader from '../../components/insideAppHeader';

const TermsOfUse = () => {
  const Navigation = useNavigation();
  const goback = () => {
    Navigation.goBack();
  };
  const {isDarkMode} = useTheme();
  const styles = getTermsStyles(isDarkMode);
  return (
    <View style={styles.container}>
        <InsideAppHeader title={strings.terms_of_use} onPress={goback} />
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      style={{padding: 20, marginBottom: 30}}
      >
      <Text style={styles.date}>{strings.effective_date}</Text>

      <Text style={styles.sectionTitle}>{strings.terms_title_1}</Text>
      <Text style={styles.sectionText}>{strings.terms_desc_1}</Text>

      <Text style={styles.sectionTitle}>{strings.terms_title_2}</Text>
      <Text style={styles.sectionText}>{strings.terms_desc_2}</Text>

      <Text style={styles.sectionTitle}>{strings.terms_title_3}</Text>
      <Text style={styles.sectionText}>{strings.terms_desc_3}</Text>

      <Text style={styles.sectionTitle}>{strings.terms_title_4}</Text>
      <Text style={styles.sectionText}>{strings.terms_desc_4}</Text>

      <Text style={styles.sectionTitle}>{strings.terms_title_5}</Text>
      <Text style={styles.sectionText}>{strings.terms_desc_5}</Text>

      <Text style={styles.sectionTitle}>{strings.terms_title_6}</Text>
      <Text style={styles.sectionText}>{strings.terms_desc_6}</Text>

      <Text style={styles.sectionTitle}>{strings.terms_title_7}</Text>
      <Text style={styles.sectionText}>{strings.terms_desc_7}</Text>
    </ScrollView>
    </View>
  );
};

export default TermsOfUse;
