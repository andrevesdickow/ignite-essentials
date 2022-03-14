interface IPassword {
  description: string;
  login: string;
  password: string;
  url?: string;
}

class CreatePasswordService {
  execute({ description, login, password, url }: IPassword) {
    console.log({ description, login, password, url });
  }
}

export default new CreatePasswordService();
