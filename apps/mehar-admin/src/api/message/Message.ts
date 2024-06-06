import { ChatRoom } from "../chatRoom/ChatRoom";

export type Message = {
  chatRoom?: ChatRoom | null;
  content: string | null;
  createdAt: Date;
  id: string;
  sender: string | null;
  sentAt: Date | null;
  updatedAt: Date;
};
