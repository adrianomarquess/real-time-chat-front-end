import { Button, Container, Form, Input, Label } from "./styles";

export default function Home() {
  return (
    <Container>
      <Form>
        <Label htmlFor="name">Nome:</Label>
        <Input type="text" name="name" placeholder="Bruce Wayne" required />
        <Button>Entrar</Button>
      </Form>
    </Container>
  );
}
