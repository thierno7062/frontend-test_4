import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'frontend.test_4',
  appName: 'frontend-test_4',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },

  plugins: {
    PhotoViewer: {
      iosImageLocation: 'Library/Images',
      androidImageLocation: 'Files/Images',
    }
  }
};

export default config;
