import { useLocalSearchParams, useRouter } from 'expo-router';
import { Platform, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const COLORS = {
  button: '#007AFF',
};

export default function Screen2() {
  const router = useRouter();
  const { name, studentId } = useLocalSearchParams<{ name: string; studentId: string }>();

  return (
    <SafeAreaView style={styles.screen}>
      <Pressable style={styles.back} onPress={() => router.back()}>
        <Text style={styles.backText}>Back</Text>
      </Pressable>

      <View style={styles.center}>
        <Text style={styles.title}>Screen 2</Text>
        <Text style={styles.info}>Name: {name}</Text>
        <Text style={styles.info}>Student ID: {studentId}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff', paddingTop: Platform.OS === 'android' ? 30 : 0 },
  back: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 42 : 12,
    left: 12,
    backgroundColor: COLORS.button,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
    zIndex: 1,
  },
  backText: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  info: { fontSize: 14, marginBottom: 6 },
});
