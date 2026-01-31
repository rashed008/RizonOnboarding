import React, { useRef, useState } from "react";
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import GlobalBottomSheet from "../../../components/bottomSheet/GlobalBottomSheet";
import { styles } from "../styles/FeedbackSheet.styles";

type Props = {
  onSubmit: (text: string) => Promise<void>;
};

const FeedbackSheet = ({ onSubmit }: Props) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const inputRef = useRef<TextInput>(null);

  const handleSubmit = async () => {
    if (!text.trim()) return;

    try {
      setLoading(true);
      await onSubmit(text);
    } finally {
      setLoading(false);
      Keyboard.dismiss();
    }
  };

  return (
    <GlobalBottomSheet>
      <View style={styles.container}>
        <View style={styles.handle} />

        <Text style={styles.title}>Help us improve Rizon</Text>
        <Text style={styles.subtitle}>
          Tell us what didn’t feel right, we read every message.
        </Text>

        <View style={styles.inputWrapper}>
          <TextInput
            ref={inputRef}
            value={text}
            onChangeText={setText}
            placeholder="Type your feedback here..."
            placeholderTextColor="#AEAEB2"
            style={styles.input}
            multiline
            returnKeyType="done"
            onSubmitEditing={() => Keyboard.dismiss()}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? "Sending..." : "Send feedback"}
          </Text>
        </TouchableOpacity>
      </View>
    </GlobalBottomSheet>
  );
};

export default FeedbackSheet;
