import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RecoilRoot } from 'recoil';
import RootRouter from './src/routers/RootRouter';

export default function App() {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar hidden={true} />
        <RecoilRoot>
          <SafeAreaProvider>
            <RootRouter />
          </SafeAreaProvider>
        </RecoilRoot>
      </GestureHandlerRootView>
    </>
  );
}