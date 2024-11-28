import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../../components/button';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utils/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { vh } from '../../utils/dimensions';


const TermsOfUse = () => {
    const {top: safeTop} = useSafeAreaInsets();
    const Navigation = useNavigation();
    const goback=()=>{
        Navigation.goBack();
    }
  return (
    <ScrollView style={[styles.container,{paddingTop: safeTop+ vh(10)}]} showsVerticalScrollIndicator={false} bounces={false}>
      <Text style={styles.title}>Terms of Use for Newzz App</Text>
      <Text style={styles.date}>Effective Date: [November 25, 2024]</Text>

      <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
      <Text style={styles.sectionText}>
        By accessing or using [Your App Name], you agree to comply with and be bound by these Terms of Use. If you do not agree with any part of these terms, you must not use our app.
      </Text>

      <Text style={styles.sectionTitle}>2. Changes to Terms</Text>
      <Text style={styles.sectionText}>
        We reserve the right to modify these Terms of Use at any time. Any changes will be effective immediately upon posting the revised terms in the app. Your continued use of the app after changes are made constitutes your acceptance of the new terms.
      </Text>

      <Text style={styles.sectionTitle}>3. User Responsibilities</Text>
      <Text style={styles.sectionText}>
        You agree to use [Your App Name] only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the app.
      </Text>

      <Text style={styles.sectionTitle}>4. Intellectual Property</Text>
      <Text style={styles.sectionText}>
        All content, trademarks, and other intellectual property rights in [Your App Name] are owned by us or our licensors. You may not reproduce, distribute, or create derivative works from any content without our express written permission.
      </Text>

      <Text style={styles.sectionTitle}>5. Limitation of Liability</Text>
      <Text style={styles.sectionText}>
        To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of [Your App Name].
      </Text>

      <Text style={styles.sectionTitle}>6. Governing Law</Text>
      <Text style={styles.sectionText}>
        These Terms of Use shall be governed by and construed in accordance with the laws of [Your State/Country]. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
      </Text>

      <Text style={styles.sectionTitle}>7. Contact Us</Text>
      <Text style={styles.sectionText}>
        If you have any questions about these Terms of Use, please contact us:
        {'\n'}- Email: [aryan.saxena@appinventiv.com]
        {'\n'}- Address: [Appinventiv Technologies Pvt. Ltd, Noida-201301]
      </Text>

      <Button title={'Back to Home'} onPress={goback}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.primary,
  },
  date: {
    fontSize: 16,
    color: colors.gray,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  sectionText: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.desc,
  },

});

export default TermsOfUse;
