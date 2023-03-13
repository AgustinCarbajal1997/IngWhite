import React, {FC} from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';
import Navigator from './navigator';
import OneSignal from 'react-native-onesignal';
import {ONE_SIGNAL_ID} from './utils/constants/oneSignal';
export const queryClient = new QueryClient();
OneSignal.setAppId(ONE_SIGNAL_ID);
const App: FC = () => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Navigator />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default App;
