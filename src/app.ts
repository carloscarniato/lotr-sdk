import axios, {AxiosInstance} from 'axios';
import Book from "./services/book";

export default class LOTR {
  private static readonly API_URL = "https://the-one-api.dev/v2"
  private readonly client: AxiosInstance;

  book: Book;

  constructor(accessKey: string) {
    if (!accessKey) {
      throw new Error("Missing credentials, please pass in your access key")
    }

    this.client = axios.create({
      baseURL: LOTR.API_URL,
      headers: {
        Authorization: `Bearer ${accessKey}`
      }
    })

    this.book = new Book(this.client);
  }
}