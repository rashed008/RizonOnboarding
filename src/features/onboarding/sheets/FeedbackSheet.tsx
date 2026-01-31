import React, { useState } from "react";
import {
  GlobalBottomSheet,
  RizonButton,
  RizonInput,
} from "../../../components";

type Props = {
  onSubmit: (text: string) => Promise<void>;
};

const FeedbackSheet = ({ onSubmit }: Props) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!text.trim()) return;

    try {
      setLoading(true);
      await onSubmit(text); // ✅ await prevents race condition
    } finally {
      setLoading(false);
    }
  };

  return (
    <GlobalBottomSheet>
      <RizonInput
        value={text}
        onChangeText={setText}
        placeholder="Type your feedback here..."
      />
      <RizonButton
        title="Send feedback"
        loading={loading}
        onPress={handleSubmit}
      />
    </GlobalBottomSheet>
  );
};

export default FeedbackSheet;
