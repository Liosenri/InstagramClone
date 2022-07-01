export type Story = {
  id: string;
  username: string;
  avatar: string;
  image: string;
  title: string;
};

export type Post = {
  createdAt: string;
} & Story;
