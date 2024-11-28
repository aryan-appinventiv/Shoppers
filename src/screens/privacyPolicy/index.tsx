import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Button from '../../components/button';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colors } from '../../utils/colors';
import { vh } from '../../utils/dimensions';


const PrivacyPolicy = () => {
   
    const {top: safeTop} = useSafeAreaInsets();
    const Navigation = useNavigation();
    const goback=()=>{
        Navigation.goBack();
    }
  return (
    <ScrollView style={[styles.container,{paddingTop: safeTop+ vh(10)}]} showsVerticalScrollIndicator={false} bounces={false}>
      <Text style={styles.title}>Privacy Policy for Newzz App</Text>
      <Text style={styles.date}>Effective Date: [November 25, 2024]</Text>

      <Text style={styles.sectionTitle}>1. Introduction</Text>
      <Text style={styles.sectionText}>
        Welcome to Newzz. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our app. By using our app, you agree to the collection and use of information in accordance with this policy.
      </Text>

      <Text style={styles.sectionTitle}>2. Information We Collect</Text>
      <Text style={styles.sectionText}>
        - Personal Information: We may collect personal information such as your name, email address, and location when you register or subscribe to our services.
        {'\n'}- Usage Data: We collect information about how you access and use the app, including your device information, IP address, and browsing patterns.
      </Text>

      <Text style={styles.sectionTitle}>3. How We Use Your Information</Text>
      <Text style={styles.sectionText}>
        We use the information we collect for various purposes, including:
        {'\n'}- To provide and maintain our services.
        {'\n'}- To notify you about changes to our app.
        {'\n'}- To allow you to participate in interactive features when you choose to do so.
        {'\n'}- To provide customer support.
        {'\n'}- To gather analysis or valuable information so that we can improve our app.
        {'\n'}- To monitor the usage of our app.
        {'\n'}- To detect, prevent, and address technical issues.
      </Text>

      <Text style={styles.sectionTitle}>4. Sharing Your Information</Text>
      <Text style={styles.sectionText}>
        We do not sell or rent your personal information to third parties. We may share your information in the following situations:
        {'\n'}- With service providers to monitor and analyze the use of our app.
        {'\n'}- To comply with legal obligations or protect and defend our rights.
      </Text>

      <Text style={styles.sectionTitle}>5. Data Security</Text>
      <Text style={styles.sectionText}>
        The security of your data is important to us, and we strive to use commercially acceptable means to protect your personal information. However, no method of transmission over the internet or method of electronic storage is 100% secure.
      </Text>

      <Text style={styles.sectionTitle}>6. Your Rights</Text>
      <Text style={styles.sectionText}>
        You have the right to:
        {'\n'}- Access, update, or delete the information we have on you.
        {'\n'}- Withdraw your consent at any time where we rely on your consent to process your personal information.
        {'\n'}- Request that we restrict the processing of your personal information.
      </Text>

      <Text style={styles.sectionTitle}>7. Changes to This Privacy Policy</Text>
      <Text style={styles.sectionText}>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
      </Text>

      <Text style={styles.sectionTitle}>8. Contact Us</Text>
      <Text style={styles.sectionText}>
        If you have any questions about this Privacy Policy, please contact us:
        {'\n'}- Email: [aryan.saxena@appinventiv.com]
        {'\n'}- Address: [Appinventiv Technologies Pvt. Ltd, Noida-201301]
      </Text>

      <Button onPress={goback} title={'Back to Home'}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
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

export default PrivacyPolicy;
