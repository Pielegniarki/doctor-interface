import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { format } from 'date-fns';
import { ChatUser } from '../models/ChatUser';
import { Message } from '../models/Message';

type ChatMessageProps = {
    message: Message;
    of: ChatUser;
}

export default function ChatMessage({ message, of }: ChatMessageProps) {
    return (
        <Box display="flex" flexDirection="column" alignSelf={ of === message.sender ? "flex-end" : "flex-start" } width="min-content" margin={2}>
            <Box display="inline-block" alignSelf={ of === message.sender ? "flex-end" : "flex-start" } width="max-content">{message.content}</Box>
            <Box display="inline-block" alignSelf={ of === message.sender ? "flex-end" : "flex-start" } fontSize={12} color="GrayText">{format(message.date, "pp")}</Box>
        </Box>
    );
}