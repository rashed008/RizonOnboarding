import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import GlobalBottomSheet from "../../../components/bottomSheet/GlobalBottomSheet";
import { styles } from "../styles/EnjoyingRizonSheet.styles";

type Props = {
  onNotYet: () => void;
  onYes: () => void;
};

const EnjoyingRizonSheet = ({ onNotYet, onYes }: Props) => {
  return (
    <GlobalBottomSheet>
      <View style={styles.container}>
        {/* Drag Handle */}
        <View style={styles.handle} />

        {/* Logo */}
        <View style={styles.logoBox}>
          <Text style={styles.logoText}>RIZON</Text>
        </View>

        {/* Text */}
        <Text style={styles.title}>Enjoying Rizon so far?</Text>
        <Text style={styles.subtitle}>
          Your feedback helps us build a better money experience.
        </Text>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.secondaryButton} onPress={onNotYet}>
            <Text style={styles.secondaryText}>Not yet</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.primaryButton} onPress={onYes}>
            <Text style={styles.primaryText}>Yes, loving it</Text>
          </TouchableOpacity>
        </View>
      </View>
    </GlobalBottomSheet>
  );
};

export default EnjoyingRizonSheet;
