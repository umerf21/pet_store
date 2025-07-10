import {StyleSheet, Platform} from 'react-native';

import Metrics from './Metrics';
import Fonts from './Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: Metrics.bottomPadding,
  },
  containerPadding: {
    // flex: 1,
    marginBottom: Metrics.bottomPadding,
    paddingHorizontal: Metrics.baseMargin,
  },
  containerRow: {
    flexDirection: 'row',
  },
  containerRowFlex: {
    flexDirection: 'row',
    flex: 1,
  },
  containerRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flex1: {
    flex: 1,
  },
  heading: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: Metrics.ratio(30),
  },
  alignCenter: {
    alignItems: 'center',
  },
  HorizontalBaseMargin: {
    marginHorizontal: Metrics.baseMargin,
  },
  VerticalBaseMargin: {
    marginVertical: Metrics.baseMargin,
  },
  BaseMargin: {
    margin: Metrics.baseMargin,
  },
  iconBox: {
    width: Metrics.ratio(32),
    height: Metrics.ratio(32),
    marginLeft: Metrics.smallMargin,
    borderRadius: Metrics.app.baseRadius,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
