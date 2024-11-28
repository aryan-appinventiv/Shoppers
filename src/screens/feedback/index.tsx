import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Button from '../../components/button';
import {vh, vw} from '../../utils/dimensions';
import {images} from '../../assets';
import {colors} from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-simple-toast';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const {top: safeTop} = useSafeAreaInsets();
  const Navigation = useNavigation();

  const handleSubmit = () => {
    console.log('Feedback submitted:', feedback);
    setSubmitted(true);
    setFeedback('');
    Toast.show('Feedback Submitted', Toast.SHORT, {
      backgroundColor: colors.primary,
    });
  };
  const goback = () => {
    Navigation.goBack();
  };
  return (
    <View style={[styles.container]}>
      <View style={[styles.backCont, {paddingTop: safeTop + vh(20)}]}>
        <TouchableOpacity style={styles.back} onPress={goback}>
          <Image source={images.back} style={styles.backImg} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Send Us Your Feedback</Text>
      <View style={styles.mainCont}>
        <Text style={styles.label}>Your Feedback:</Text>
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={4}
          value={feedback}
          onChangeText={setFeedback}
          placeholder="Type your feedback here..."
        />
        {feedback.trim().length > 0 && (
          <Button title={'Submit Feedback'} onPress={handleSubmit} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingHorizontal: vw(10),
    marginTop: vh(20),
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 100,
    borderColor: colors.borderClr,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  successMessage: {
    fontSize: 18,
    color: colors.green,
    textAlign: 'center',
    marginTop: 20,
  },
  mainCont: {
    paddingHorizontal: vw(10),
  },
  backCont: {
    backgroundColor: colors.primary,
    paddingBottom: vh(20),
    paddingHorizontal: vw(10),
  },
  back: {
    height: vw(20),
    width: vw(20),
  },
  backImg: {
    height: vw(20),
    width: vw(20),
  },
});

export default Feedback;

