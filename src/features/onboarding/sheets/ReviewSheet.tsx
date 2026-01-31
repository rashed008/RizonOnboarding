import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import GlobalBottomSheet from "../../../components/bottomSheet/GlobalBottomSheet";
import { styles } from "../styles/ReviewSheet.styles";

type Props = {
  onReviewPress: () => void;
};

const ReviewSheet = ({ onReviewPress }: Props) => {
  return (
    <GlobalBottomSheet>
      <View style={styles.container}>
        <View style={styles.handle} />
        <Image
          source={require("../../../../assets/images/onboarding/review.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>Got a minute to help us grow?</Text>
        <Text style={styles.subtitle}>
          It takes less than a minute and helps us a lot.
        </Text>

        <TouchableOpacity style={styles.button} onPress={onReviewPress}>
          <Text style={styles.buttonText}>Leave a review</Text>
        </TouchableOpacity>
      </View>
    </GlobalBottomSheet>
  );
};

export default ReviewSheet;
