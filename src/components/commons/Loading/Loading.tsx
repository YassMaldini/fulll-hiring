import { ActivityIndicator, View } from 'react-native';
import { theme } from '../../../utils/theme/theme';

export const Loading = () => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator size="large" color={theme.colors.primary} animating={true} />
    </View>
  )
};
