import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {vh, vw, Wwidth} from '../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tutorial: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    backgroundColor: colors.modalBackground,
    justifyContent: 'flex-end',
    gap: vh(10),
    paddingBottom: vh(50),
    paddingHorizontal: Wwidth / 20,
  },
  title: {
    color: colors.white,
    fontSize: vw(24),
    fontWeight: '600',
    letterSpacing: 1.5,
    lineHeight: 36,
    textAlign: 'center',
  },
  desc: {
    color: colors.white,
    fontWeight: '500',
    fontSize: vw(16),
    letterSpacing: 1.2,
    lineHeight: 22,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    marginVertical: vh(20),
    alignItems: 'center',
    borderRadius: 10,
  },
  btntxt: {
    color: colors.white,
    fontSize: vw(16),
    fontWeight: '600',
  },
});
export default styles;
