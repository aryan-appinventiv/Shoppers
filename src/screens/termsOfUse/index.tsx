import React from 'react';
import { ScrollView, Text } from 'react-native';
import Button from '../../components/button';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { vh } from '../../utils/dimensions';
import { strings } from '../../utils/strings';
import { useTheme } from '../../utils/ThemeContext';
import { getTermsStyles } from './styles';

const TermsOfUse = () => {
    const {top: safeTop} = useSafeAreaInsets();
    const Navigation = useNavigation();
    const goback=()=>{
        Navigation.goBack();
    }
    const { isDarkMode } = useTheme(); 
    const styles = getTermsStyles(isDarkMode);
  return (
    <ScrollView style={[styles.container,{paddingTop: safeTop+ vh(10)}]} showsVerticalScrollIndicator={false} bounces={false}>
      <Text style={styles.title}>{strings.terms_of_use}</Text>
      <Text style={styles.date}>{strings.effective_date}</Text>

      <Text style={styles.sectionTitle}>{strings.terms_title_1}</Text>
      <Text style={styles.sectionText}>{strings.terms_desc_1}
      </Text>

      <Text style={styles.sectionTitle}>{strings.terms_title_2}</Text>
      <Text style={styles.sectionText}>{strings.terms_desc_2}
      </Text>

      <Text style={styles.sectionTitle}>{strings.terms_title_3}</Text>
      <Text style={styles.sectionText}>{strings.terms_desc_3}
      </Text>

      <Text style={styles.sectionTitle}>{strings.terms_title_4}</Text>
      <Text style={styles.sectionText}>{strings.terms_desc_4}
      </Text>

      <Text style={styles.sectionTitle}>{strings.terms_title_5}</Text>
      <Text style={styles.sectionText}>{strings.terms_desc_5}
      </Text>

      <Text style={styles.sectionTitle}>{strings.terms_title_6}</Text>
      <Text style={styles.sectionText}>{strings.terms_desc_6}
      </Text>

      <Text style={styles.sectionTitle}>{strings.terms_title_7}</Text>
      <Text style={styles.sectionText}>
        {strings.terms_desc_7}
      </Text>

      <Button title={'Back to Home'} onPress={goback}/>
    </ScrollView>
  );
};

export default TermsOfUse;
