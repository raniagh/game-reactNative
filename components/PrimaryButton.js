import { Text } from "react-native";
import { View } from "react-native";

function PrimaryButton({ children }) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}
export default PrimaryButton;
