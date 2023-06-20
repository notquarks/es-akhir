import { radioAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys);

const xxl = defineStyle({
  w: "12",
  h: "12",
});

const xl = defineStyle({
  w: "8",
  h: "8",
});

const sizes = {
  xl: definePartsStyle({ control: xl }),
  xxl: definePartsStyle({ control: xxl }),
};

export const radioTheme = defineMultiStyleConfig({ sizes });

// Now we can use the new `xl` size
{
  /* <Radio size="xl">This is a radio</Radio> */
}
