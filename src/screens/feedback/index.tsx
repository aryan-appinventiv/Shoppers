import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Button from '../../components/button';
import {colors} from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import {strings} from '../../utils/strings';
import {getFeedbackStyles} from './styles';
import {useTheme} from '../../utils/ThemeContext';
import InsideAppHeader from '../../components/insideAppHeader';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const Navigation = useNavigation();
  const {isDarkMode} = useTheme();
  const styles = getFeedbackStyles(isDarkMode);

  const handleSubmit = () => {
    console.log(strings.feedback_submitted, feedback);
    setSubmitted(true);
    setFeedback('');
    Toast.show(strings.feedback_submitted, Toast.SHORT, {
      backgroundColor: colors.green,
    });
  };
  const goback = () => {
    Navigation.goBack();
  };
  return (
    <View style={[styles.container]}>
      <InsideAppHeader title={strings.feedback} onPress={goback}/>
      <Text style={styles.title}>{strings.send_us_your_feedback}</Text>
      <View style={styles.mainCont}>
        <Text style={styles.label}>{strings.your_feedback}</Text>
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={4}
          value={feedback}
          onChangeText={setFeedback}
          placeholder={strings.type_your_feedback}
          placeholderTextColor={isDarkMode ? colors.gray : colors.black}
        />
        {feedback.trim().length > 0 && (
          <Button title={strings.submit_feedback} onPress={handleSubmit} />
        )}
      </View>
    </View>
  );
};
export default Feedback;
