import * as React from "react";
import {Button} from "@base-ui/react/button";
import "./FeynmanButton.css";

export interface FeynmanButtonProps extends React.ComponentProps<typeof Button>{
  readonly tone?:"accent"|"neutral";
}

export function FeynmanButton({tone="accent",className,...props}:FeynmanButtonProps):React.JSX.Element{
  const classes=["feynman-button",className].filter(Boolean).join(" ");
  return <Button {...props} data-tone={tone} className={classes}/>;
}