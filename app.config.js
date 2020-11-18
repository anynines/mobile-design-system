/**
 * Dynamic configuration with app.config.js 🎉
 *
 * For more customization you can use the JavaScript and TypeScript app.config.js, or app.config.ts.
 *
 * These configs have the following properties:
 *
 * - Comments, variables, and single quotes!
 * - ES module support (import/export).
 * - TypeScript support with nullish coalescing and optional chaining.
 * - Updated whenever Metro bundler reloads.
 * - Provide environment information to your app.
 * - Does not support Promises.
 */

// V E R S I O N S
const version = '1.1.1'
const build = '1.0.0'

// G E N E R A L  C O N F I G
const general = {
  privacy: 'unlisted',
  sdkVersion: '38.0.0',
  platforms: [
    'ios',
    'android',
  ],
  version,
  orientation: 'portrait',
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    enabled: true,
    checkAutomatically: 'ON_LOAD',
    fallbackToCacheTimeout: 30000,
  },
  assetBundlePatterns: ['**/*'],
  packagerOpts: {
    config: 'metro.config.js',
    sourceExts: [
      'expo.ts',
      'expo.tsx',
      'expo.js',
      'expo.jsx',
      'ts',
      'tsx',
      'js',
      'jsx',
      'json',
      'wasm',
      'svg',
    ],
  },
}

// 📱 P L A T F O R M S
const android = {
  versionCode: parseInt(version.split('.').join('')),
  useNextNotificationsApi: true,
  permissions: [
    'CAMERA',
    'NOTIFICATIONS',
  ],
}

const ios = {
  buildNumber: build,
  supportsTablet: false,
  infoPlist: {
    NSCameraUsageDescription: 'This app uses the camera for delivery notes upload. You can choose photos directly from your gallery as well.',
  },
}

// 🔔 N O T I F I C A T I O N S
const notification = {
  icon: './assets/notification_icon.png',
  iosDisplayInForeground: true,
}

// 👨‍💻 E N V I R O N M E N T
const showAppInfo = process.env.SHOW_APP_INFO
const host = process.env.BACKEND_IP !== undefined ? `http://${process.env.BACKEND_IP}:${process.env.PORT || '3000'}` : 'http://localhost:3000'
const extra = {
  showAppInfo,
  host,
}

const releaseChannel = process.env.RELEASE_CHANNEL

if (releaseChannel === 'live') {
  general.name = 'Mobile Design System'
  general.slug = 'mobile-design-system'
  extra.host = ''
  android.package = ''
  ios.bundleIdentifier = ''
}

if (releaseChannel === 'staging') {
  general.name = 'Mobile Design System'
  general.slug = 'mobile-design-system-staging'
  extra.host = ''
  ios.bundleIdentifier = ''
}

export default {
  ...general,
  android,
  ios,
  notification,
  extra,
}
