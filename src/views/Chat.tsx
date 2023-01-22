import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { useState, useEffect, useMemo } from 'react';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Divider, IconButton, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import io from 'socket.io-client';
import CallEndIcon from '@mui/icons-material/CallEnd';
import ChatMessage from '../components/ChatMessage';
import { Message } from '../models/Message';
import { useRecoilValue } from 'recoil';
import { visitServiceStore } from '../stores/ServiceStore';

export function Chat() {
  const [chat, setChat] = useState<Message[]>([]);

  const { chatId } = useParams();
  const socket = useMemo(() => io("http://localhost:5000"), [])

  const [isConnected, setIsConnected] = useState(socket.connected);
  const [messageContent, setMessage] = useState("")

  const visitService = useRecoilValue(visitServiceStore);
  const navigate = useNavigate();

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
      socket.emit("setRoom", chatId);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on("message", object => {
      console.log("got message :P")

      const message: Message = { ...object, date: new Date(object.date) }

      setChat(chat => [...chat, message]);
    })

    socket.on("finish", () => {
      navigate("/");
    })

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('message');
    };
  }, [chatId, socket, navigate]);

  const onSend = () => {
    if (messageContent === "") {
      return;
    }

    const message: Message = {
      content: messageContent,
      sender: "doctor",
      date: new Date()
    }

    setChat(chat => [...chat, message]);
    
    socket.emit("message", message);

    setMessage("");
  }

  const onFinish = () => {
    socket.emit("finish");
    visitService.close(chatId!);
    navigate("/");
  }

  return (
      <Container component="main">
        <Paper
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
          }}
        >
          <Box sx={{ padding: 2, display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Typography
              variant="h5"
              fontWeight="bold"
            >
              {/* TODO: fetch real doctor data */}
              Chatting with: Pacjent Pacjencki
            </Typography>

            <Button
              variant="contained"
              color="error"
              endIcon={<CallEndIcon />}
              onClick={onFinish}
            >
              Finish
            </Button>
          </Box>
          <Divider />
          <Box 
            display="flex" 
            flexDirection="column" 
            sx={{ height: "calc(100vh - 17rem)" }}>
              {chat.map((message) => <ChatMessage key={message.date.toTimeString()} of="doctor" message={message} />)}
          </Box>
          <Divider />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              placeholder={isConnected ? "Type your message here" : "Connecting..."}
              sx={{ marginBlock: 2, ml: 2, flexGrow: 1 }}
              disabled={!isConnected}
              value={messageContent}
              onInput={event => setMessage((event.target as HTMLInputElement).value)}
              onKeyDown={event => event.key === "Enter" && onSend()}
            />
            <IconButton
              onClick={onSend}
              color="primary"
              disabled={!isConnected}
              sx={{ marginInline: 1, height: "min-content" }}
            >
              <SendIcon />
            </IconButton>
          </Box>
        </Paper>
      </Container>
  );

}
