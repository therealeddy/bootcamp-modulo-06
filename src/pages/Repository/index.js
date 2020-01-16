import React from 'react';
import { WebView } from 'react-native-webview';

export default function Repository({ navigation }) {
  const htmlUrl = navigation.getParam('html_url');

  return <WebView source={{ uri: htmlUrl }} style={{ flex: 1 }} />;
}
