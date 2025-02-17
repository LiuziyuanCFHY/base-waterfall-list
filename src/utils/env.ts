import { NativeModules } from 'react-native';

export const env = NativeModules.KSRCTBridge.getEnvSync();
