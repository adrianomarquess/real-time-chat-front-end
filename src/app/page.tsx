"use client";

import { Button, Container, Form, Input, Label } from "./styles";
import { gql, useMutation } from "@apollo/client";
import { FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($name: String!) {
    createUser(name: $name) {
      userId
      name
    }
  }
`;

export default function Home() {
  const router = useRouter();

  const [createUser] = useMutation(CREATE_USER_MUTATION, {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) return;

    localStorage.clear();
  }, [router]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const { data, errors } = await createUser({
      variables: { name: formData.get("name") },
    });

    if (errors) return null;

    localStorage.setItem("user", JSON.stringify(data.createUser));
    router.push("/chat");
  }

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Label>Nome:</Label>
        <Input type="text" name="name" placeholder="Bruce Wayne" required />
        <Button>Entrar</Button>
      </Form>
    </Container>
  );
}
