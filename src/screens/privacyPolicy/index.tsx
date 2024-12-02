import React from 'react';
import { ScrollView, Text } from 'react-native';
import Button from '../../components/button';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { vh } from '../../utils/dimensions';
import { strings } from '../../utils/strings';
import { useTheme } from '../../utils/ThemeContext';
import { getPrivacyPolicyStyles } from './styles';

const PrivacyPolicy = () => {
    const {top: safeTop} = useSafeAreaInsets();
    const Navigation = useNavigation();
    const goback=()=>{
        Navigation.goBack();
    }
  const { isDarkMode } = useTheme(); 
  const styles = getPrivacyPolicyStyles(isDarkMode);
  return (
    <ScrollView style={[styles.container,{paddingTop: safeTop+ vh(10)}]} showsVerticalScrollIndicator={false} bounces={false}>
      <Text style={styles.title}>{strings.privacy_policy_for_newzz_app}</Text>
      <Text style={styles.date}>{strings.effective_date}</Text>

      <Text style={styles.sectionTitle}>{strings.privacy_title_1}</Text>
      <Text style={styles.sectionText}>{strings.privacy_desc_1}
      </Text>

      <Text style={styles.sectionTitle}>{strings.privacy_title_2}</Text>
      <Text style={styles.sectionText}>
       {strings.privacy_desc_2}
      </Text>

      <Text style={styles.sectionTitle}>{strings.privacy_title_3}</Text>
      <Text style={styles.sectionText}>{strings.privacy_desc_3}
      </Text>

      <Text style={styles.sectionTitle}>{strings.privacy_title_4}</Text>
      <Text style={styles.sectionText}>{strings.privacy_desc_4}
      </Text>

      <Text style={styles.sectionTitle}>{strings.privacy_title_5}</Text>
      <Text style={styles.sectionText}>{strings.privacy_desc_5}</Text>

      <Text style={styles.sectionTitle}>{strings.privacy_title_6}</Text>
      <Text style={styles.sectionText}>{strings.privacy_desc_6}
      </Text>

      <Text style={styles.sectionTitle}>{strings.privacy_title_7}</Text>
      <Text style={styles.sectionText}>{strings.privacy_desc_7}</Text>

      <Text style={styles.sectionTitle}>{strings.privacy_title_8}</Text>
      <Text style={styles.sectionText}>
       {strings.privacy_desc_8}
      </Text>

      <Button onPress={goback} title={strings.back_to_home}/>
    </ScrollView>
  );
};

export default PrivacyPolicy;
