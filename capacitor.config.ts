import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'persianConnection',
  bundledWebRuntime: false,
  webDir: 'www',
  plugins: {
    Camera: {
      allowEditing: true,
      resultType: 'uri'
    }
  }
};

export default config;
