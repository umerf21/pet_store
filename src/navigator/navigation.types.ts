/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */

import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";


export type RootStackParamList = {
  Home: undefined;
  Maps: undefined;
  Payment: undefined;
  PetDetails: undefined;
};

export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type RootPageUrlType = Record<
  keyof RootStackParamList,
  keyof RootStackParamList
>;

export const ROOT_PAGE_URL: RootPageUrlType = {
  Home: 'Home',
  Maps:'Maps',
  Payment:'Payment',
  PetDetails:'PetDetails'

};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
