import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const PasswordInput = ({
  label,
  icon,
  onChangeText,
  marginBottom,
  keyboardType,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: marginBottom,
      }}
    >
      {icon}
      <TextInput
        placeholder={label}
        keyboardType={keyboardType}
        style={{ flex: 1, paddingVertical: 0, color: '#000000'}}
        secureTextEntry={!showPassword}
        onChangeText={onChangeText}
        placeholderTextColor="#000000"
      />
      <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
        <Feather
          name={showPassword ? 'eye' : 'eye-off'}
          size={20}
          color='#AD40AF'
          style={{ marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;