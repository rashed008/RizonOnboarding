// Placeholder implementation
// In production, this comes from the shared design system

import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  loading?: boolean;
  onPress: () => void;
};

const RizonButton = ({ title, loading, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={loading}>
      {loading ? <ActivityIndicator /> : <Text>{title}</Text>}
    </TouchableOpacity>
  );
};

export default RizonButton;
