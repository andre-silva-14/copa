import { Center, Text } from "native-base";
import { LayoutChangeEvent } from "react-native";

interface SignInProps {
  onLayout?: (event: LayoutChangeEvent) => void;
}

export function SignIn({ onLayout }: SignInProps) {
  return (
    <Center flex={1} bgColor="gray.900" onLayout={onLayout}>
      <Text color="pink.600" fontSize={24} fontFamily="heading">
        Hello World!
      </Text>
    </Center>
  );
}
