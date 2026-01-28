import type { Component } from "vue";

export type Button = {
  label: string;
  as?: "button" | "a";
  style?: "action-button--primary" | "action-button--outlined";
  icon?: Component;
  iconColor?: string;
  iconSize?: string;
};
