// import React, { useEffect, useRef } from "react";
// import {
//   Animated,
//   Dimensions,
//   Keyboard,
//   KeyboardAvoidingView,
//   Platform,
//   StyleSheet,
//   TouchableWithoutFeedback,
//   View,
// } from "react-native";

// const { height } = Dimensions.get("window");

// type Props = {
//   children: React.ReactNode;
// };

// export default function GlobalBottomSheet({ children }: Props) {
//   const translateY = useRef(new Animated.Value(height)).current;

//   useEffect(() => {
//     Animated.timing(translateY, {
//       toValue: 0,
//       duration: 260,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <View style={styles.overlay}>
//         <KeyboardAvoidingView
//           behavior={Platform.OS === "ios" ? "padding" : "height"}
//           keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
//         >
//           <Animated.View
//             style={[
//               styles.sheet,
//               {
//                 transform: [{ translateY }],
//               },
//             ]}
//           >
//             {children}
//           </Animated.View>
//         </KeyboardAvoidingView>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// }

// const styles = StyleSheet.create({
//   overlay: {
//     flex: 1,
//     justifyContent: "flex-end",
//     backgroundColor: "rgba(0,0,0,0.3)",
//   },

//   sheet: {
//     backgroundColor: "#FFF",
//     borderTopLeftRadius: 16,
//     borderTopRightRadius: 16,
//     paddingTop: 12,
//     paddingBottom: 24,
//     maxHeight: height * 0.85,
//   },
// });

import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const { height } = Dimensions.get("window");

type Props = {
  children: React.ReactNode;
};

export default function GlobalBottomSheet({ children }: Props) {
  const translateY = useRef(new Animated.Value(height)).current;
  const keyboardOffset = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 180,
      useNativeDriver: true,
    }).start();

    const showSub = Keyboard.addListener("keyboardWillShow", (e) => {
      Animated.timing(keyboardOffset, {
        toValue: -e.endCoordinates.height,
        duration: 250,
        useNativeDriver: true,
      }).start();
    });

    const hideSub = Keyboard.addListener("keyboardWillHide", () => {
      Animated.timing(keyboardOffset, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    });

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.overlay}>
        <Animated.View
          style={[
            styles.sheet,
            {
              transform: [{ translateY }, { translateY: keyboardOffset }],
            },
          ]}
        >
          {children}
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.3)",
  },

  sheet: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 12,
    paddingBottom: 24,
    maxHeight: height * 0.9,
  },
});
