const config = {
  appId: 'com.babyfood.tracker',
  appName: 'Calendario Alimentación Bebé',
  webDir: '.',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: '#3B82F6',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      androidSpinnerStyle: 'large',
      iosSpinnerStyle: 'small',
      spinnerColor: '#999999',
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: 'launch_screen',
      useDialog: true
    }
  },
  android: {
    buildOptions: {
      keystorePath: 'android.keystore',
      keystorePassword: 'your-password',
      keyAlias: 'your-key-alias',
      keyPassword: 'your-key-password'
    }
  },
  ios: {
    scheme: 'BabyFoodTracker'
  }
};

export default config;
