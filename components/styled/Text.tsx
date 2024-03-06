import { Text as DefaultText } from "react-native";

export type TextProps = DefaultText["props"];

export function Text(props: TextProps) {
  const { className, ...otherProps } = props;

  return (
    <DefaultText
      className={"font-sans text-black dark:text-white " + className}
      {...otherProps}
    />
  );
}
