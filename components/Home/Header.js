import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, SIZES} from '../../constants';

const Header = ({currentLocation}) => {
  return (
    <View style={{flexDirection: 'row', height: 50}}>
      <TouchableOpacity
        style={{
          width: 50,
          paddingLeft: SIZES.padding * 2,
          justifyContent: 'center',
        }}>
        <Image
          source={icons.nearby}
          resizeMode="contain"
          style={{width: 30, height: 30}}
        />
      </TouchableOpacity>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={{
            width: '70%',
            heigh: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray3,
          }}>
          <Text style={{...FONTS.h3}}>{currentLocation.streetName}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: 50,
          paddingRight: SIZES.padding * 2,
          justifyContent: 'center',
        }}>
        <Image
          source={icons.basket}
          resizeMode="contain"
          style={{
            width: 30,
            heigh: 30,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
export default Header;
