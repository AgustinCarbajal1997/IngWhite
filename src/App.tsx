import React, {FC} from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';
import Navigator from './navigator';
export const queryClient = new QueryClient();

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
