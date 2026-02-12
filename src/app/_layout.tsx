import { ThemeProvider } from "@/components/theme-provider";
import { Stack } from "expo-router/stack";

export default function Layout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{
            presentation: 'formSheet',
            title: "Search Bar Bug Demo",
            sheetGrabberVisible: true,
            sheetAllowedDetents: [0.5, 1.0]
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
