import { useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  const [count, setCount] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View className="flex-1 items-center justify-center bg-linear-to-br from-blue-400 to-purple-600 p-6">
      <View className="items-center gap-8">
        <Text className="text-5xl font-bold text-white">Expo + NativeWind</Text>

        <Text className="text-center text-lg text-white/80">
          A modern starter template with Tailwind CSS
        </Text>

        <View className="mt-8 items-center gap-4">
          <Text className="text-6xl font-bold text-white">{count}</Text>

          <View className="flex-row gap-4">
            <TouchableOpacity
              onPress={() => setCount(count - 1)}
              className="rounded-full bg-white/20 px-8 py-4 active:bg-white/30"
            >
              <Text className="text-2xl font-bold text-white">-</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setCount(count + 1)}
              className="rounded-full bg-white/20 px-8 py-4 active:bg-white/30"
            >
              <Text className="text-2xl font-bold text-white">+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => setCount(0)}
            className="mt-4 rounded-full bg-white px-6 py-3 active:bg-white/90"
          >
            <Text className="text-base font-semibold text-purple-600">
              Reset
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
