declare global {
  type Post = {
    id?: string,
    title: string,
    description: string,
    content: string,
    created_at?: Date,
    updated_at?: Date,
  }
}

export {
  Post
}
