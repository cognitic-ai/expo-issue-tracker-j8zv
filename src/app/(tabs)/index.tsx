import { Link } from "expo-router";
import { ScrollView, Text, Pressable } from "react-native";

export default function IndexRoute() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{
        padding: 16,
        backgroundColor: "white",
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Stack SearchBar Issue Reproduction</Text>
      <Text style={{ marginBottom: 20 }}>
        This reproduces the Expo issue #42707 where Stack.SearchBar appears in the wrong position in modals.
      </Text>

      <Link href="/modal" asChild>
        <Pressable
          style={{
            backgroundColor: "#007AFF",
            padding: 16,
            borderRadius: 8,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
            Open Modal with Search Bar Bug
          </Text>
        </Pressable>
      </Link>
    </ScrollView>
  );
}
