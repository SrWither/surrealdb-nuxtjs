declare global {
  type Post = {
    id?: string,
    title: string,
    description: string,
    content: string,
    created_at?: string,
    updated_at?: string,
  }
}

export {
  Post
}
