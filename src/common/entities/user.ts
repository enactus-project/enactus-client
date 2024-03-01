export interface User {
  id: string;
  name: string | null;
  email: string;
  createdAt: string;
  updatedAt: string;
  role: number;
  deletedAt: string | null;
}

