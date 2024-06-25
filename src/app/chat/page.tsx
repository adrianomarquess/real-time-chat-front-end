"use client";

import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";
import {
  Button,
  Container,
  Form,
  Input,
  MessageContainer,
  Message,
  MessagesContainer,
  Name,
  MessageText,
} from "./styles";
import { FormEvent, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";

const GET_MESSAGES_SUBSCRIPTION = gql`
  subscription GetMessages {
    messages {
      user {
        userId
        name
      }
      text
      date
    }
  }
`;

const SEND_MESSAGE_MUTATION = gql`
  mutation SendMessage($text: String!) {
    sendMessage(text: $text) {
      success
    }
  }
`;

const GET_MESSAGES_QUERY = gql`
  query GetMessages {
    messages {
      user {
        name
        userId
      }
      text
      date
    }
  }
`;

export default function ChatPage() {
  const form = useRef<HTMLFormElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const { data: oldMessages } = useQuery(GET_MESSAGES_QUERY);
  const { data: subscription } = useSubscription(GET_MESSAGES_SUBSCRIPTION);

  const [sendMessage, { error }] = useMutation(SEND_MESSAGE_MUTATION, {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (!error) return;
    router.push("/");
  }, [error, router]);

  const getUser = () => {
    const user = localStorage.getItem("user");
    if (!user) return;
    return JSON.parse(user);
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    await sendMessage({
      variables: { text: formData.get("message") },
      context: {
        headers: {
          userId: getUser().userId,
        },
      },
    });

    form.current?.reset();
  }

  const messageList = useMemo(() => {
    if (subscription?.messages) {
      return subscription?.messages;
    }

    return oldMessages?.messages || [];
  }, [oldMessages, subscription]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

  return (
    <Container>
      <MessagesContainer>
        {messageList?.map(({ date, user, text }) => {
          const isMyMessage = user.userId === getUser().userId;

          return (
            <Message key={date} isMyMessage={isMyMessage}>
              {!isMyMessage && <Name>{user.name}</Name>}
              <MessageText>{text}</MessageText>
            </Message>
          );
        })}

        <div ref={messagesEndRef} />
      </MessagesContainer>

      <Form onSubmit={onSubmit} ref={form}>
        <MessageContainer>
          <Input
            name="message"
            autoFocus
            type="text"
            placeholder="Enviar mensagem"
            required
          />
          <Button>Enviar</Button>
        </MessageContainer>
      </Form>
    </Container>
  );
}
