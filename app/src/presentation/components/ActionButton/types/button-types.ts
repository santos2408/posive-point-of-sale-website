export type Button = {
  label: string;
  as?: "button" | "a"; // TODO: tentar transformar "a" em type RouterLink
  style?: "action-button--primary" | "action-button--outlined";
  icon?: string;
  iconColor?: string;
  iconSize?: string;
  iconPosition?: "left" | "right";
};
