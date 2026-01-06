import { ActivityIndicator } from 'react-native';
import { loaderStyle } from './loaderStyle.ts';
export default function Loader() {
  return (
    <ActivityIndicator
      size="large"
      color="#0000ff"
      style={loaderStyle.loader}
    />
  );
}
