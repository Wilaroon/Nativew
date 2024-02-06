import React from 'react';
import { Text, StyleSheet } from 'react-native';
import theme from './theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.txtPrimary,
    fontFamily: theme.font.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorPrimary: {
    color: theme.colors.txtPrimary,
  },
  colorSecondary: {
    color: theme.colors.txtSecondary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  title: {
    fontSize: theme.fontSizes.Title,
  },
  subHeading: {
    fontSize: theme.fontSizes.subHeading,
  },
  titleText: {
    fontSize: theme.fontSizes.titleText,
  },
});

export default function StyleTxt({ children, color, fontSize, fontWeight, style, ...restOfProps }) {
  const TxtStyle = [
    styles.text,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subHeading' && styles.subHeading,
    fontWeight === 'bold' && styles.bold,
  ];

  return (
    <Text style={TxtStyle} {...restOfProps}>
      {children}
    </Text>
  );
}
