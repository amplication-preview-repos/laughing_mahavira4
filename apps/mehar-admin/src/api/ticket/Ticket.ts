export type Ticket = {
  assignee: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  priority?: "Option1" | null;
  reporter: string | null;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
