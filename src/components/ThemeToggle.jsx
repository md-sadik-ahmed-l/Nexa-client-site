// "use client";

// import { useTheme } from "next-themes";
// import { Button } from "@heroui/react";

// export default function ThemeToggle() {
//   const { theme, setTheme } = useTheme();

//   return (
//     <Button
//       onPress={() =>
//         setTheme(theme === "dark" ? "light" : "dark")
//       }
//     >
//       {theme === "dark" ? "Light" : "Dark"}
//     </Button>
//   );
// }

"use client";

import { useTheme } from "next-themes";
import { Button } from "@heroui/react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "Light" : "Dark"}
    </Button>
  );
}