// base
declare type BaseResponse<T> = {
  code: number,
  data: T,
  message: string
}

declare type PageResponseItem<T> = {
  list: T,
  total: number
}

declare type BasePageResponse<T> = BaseResponse<PageResponseItem<T>>

declare type TargetDataset<T> = {
  currentTarget: {
    dataset: T
  }
}
// user
export declare type UserItem = {
  id: number,
  name: string,
  avatar: string,
  gender: number,
  sign: string,
  location: string
}

// comment
export declare type CommentItem = {
  id: number,
  userId: number,
  userName: string,
  avatar: string,
  commentId: number,
  content: string,
  likes: number
}

export declare type CommentPageRequest = {
  userId: number,
  key: string,
  page: number,
  size: number
}