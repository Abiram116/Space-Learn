import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { store } from './app/store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PaperProvider>
          {/* Navigation stack will be added here */}
        </PaperProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App; 