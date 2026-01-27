import type { Component } from "vue";

export type Button = {
  label: string;
  as?: "button" | "a";
  style?: "primary" | "secondary" | "outlined";
  icon?: Component;
  iconColor?: string;
  iconSize?: string;
};
