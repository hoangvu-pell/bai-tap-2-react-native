import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { COLORS } from '../constants/colors';

export default function HomeScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');

  const goScreen2 = () =>
    router.push({
      pathname: '/screen2',
      params: { name: name.trim(), studentId: studentId.trim() },
    });

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.content}>
          <View style={[styles.row, { height: 100 }]}>
            <View style={[styles.box, { flex: 1, backgroundColor: COLORS.blue }]}>
              <Text style={styles.number}>1</Text>
            </View>
            <View style={[styles.box, { flex: 1, backgroundColor: COLORS.red }]}>
              <Text style={styles.number}>2</Text>
            </View>
          </View>

          <View style={[styles.row, { height: 100 }]}>
            <View style={[styles.box, { flex: 1, backgroundColor: COLORS.yellow }]}>
              <Text style={[styles.number, { color: '#000' }]}>3</Text>
            </View>
            <View style={[styles.box, { flex: 1, backgroundColor: COLORS.green }]}>
              <Text style={styles.number}>4</Text>
            </View>
            <View style={[styles.box, { flex: 2, backgroundColor: COLORS.purple }]}>
              <Text style={styles.number}>5</Text>
            </View>
          </View>

          <View style={[styles.box, { height: 85, backgroundColor: COLORS.orange }]}>
            <Text style={styles.number}>6</Text>
          </View>

          <Text style={styles.title}>Nhap thong tin sinh vien</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#555"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your student ID"
            placeholderTextColor="#555"
            value={studentId}
            onChangeText={setStudentId}
          />

          <Pressable style={styles.button} onPress={goScreen2}>
            <Text style={styles.buttonText}>Click me</Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff', paddingTop: Platform.OS === 'android' ? 30 : 0 },
  flex: { flex: 1 },
  content: { padding: 12, gap: 8 },
  row: { flexDirection: 'row', gap: 8 },
  box: { borderRadius: 4, alignItems: 'center', justifyContent: 'center' },
  number: { fontSize: 44, fontWeight: 'bold', color: '#fff' },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: COLORS.text,
    textAlign: 'center',
    marginTop: 80,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 13,
  },
  button: {
    backgroundColor: COLORS.button,
    borderRadius: 8,
    paddingHorizontal: 26,
    paddingVertical: 11,
    alignSelf: 'center',
    marginTop: 14,
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
});
