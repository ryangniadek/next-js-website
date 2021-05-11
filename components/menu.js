import Link from "next/link";
import { ButtonGroup, Button } from "@material-ui/core";

export default function Menu() {
  return (
    <ButtonGroup variant="text" aria-label="text button group">
      <Button href="/">Home</Button>
      <Button href="/projects">Home</Button>
      <Button href="/">Home</Button>
    </ButtonGroup>
  );
}
