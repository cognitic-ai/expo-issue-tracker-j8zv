import { Stack } from "expo-router/stack";
import { ScrollView, Text, View } from "react-native";

export default function ModalRoute() {
  return (
    <>
      <Stack.Screen
        options={{
          presentation: 'formSheet',
          title: "Search Bar Bug Demo",
          sheetGrabberVisible: true,
          sheetAllowedDetents: [0.5, 1.0],
          headerShown: true,
        }}
      />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 16 }}>
            Stack.SearchBar Position Bug
          </Text>

          <Text style={{ marginBottom: 16, fontSize: 16, lineHeight: 22 }}>
            This modal reproduces issue #42707:
          </Text>

          <View style={{ backgroundColor: "#f5f5f5", padding: 16, borderRadius: 8, marginBottom: 16 }}>
            <Text style={{ fontWeight: "600", marginBottom: 8 }}>Expected Behavior:</Text>
            <Text style={{ marginBottom: 8 }}>• Search bar should appear in the bottom toolbar from the start</Text>

            <Text style={{ fontWeight: "600", marginBottom: 8, marginTop: 12 }}>Actual Behavior:</Text>
            <Text style={{ marginBottom: 4 }}>• Search bar initially appears in the header</Text>
            <Text>• After clicking search icon, it jumps to the bottom toolbar</Text>
          </View>

          <Text style={{ fontSize: 16 }}>
            Look at the search bar placement and try clicking the search icon to see the positioning jump.
          </Text>
        </View>
      </ScrollView>

      <Stack.Toolbar placement="bottom">
        <Stack.SearchBar />
        <Stack.Toolbar.SearchBarSlot />
      </Stack.Toolbar>
    </>
  );
}