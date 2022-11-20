export class CustomError extends Error {
    constructor(public statusCode: number, message: string) {
      super(message);
    }
  }
  
  export class InvalidRequest extends CustomError {
    constructor() {
      super(400, "Parametros inválidos!");
    }
  }
  
  export class InvalidToken extends CustomError {
    constructor() {
      super(400, "Token inválido ou expirado!");
    }
  }
  
  export class InvalidPassword extends CustomError {
    constructor() {
      super(400, "Password inválido!");
    }
  }
  
  export class InvalidEmail extends CustomError {
    constructor() {
      super(400, "Email inválido!");
    }
  }
  
  export class InvaliRecipe extends CustomError {
    constructor() {
      super(404, "Receita não encontrada!");
    }
  }
  
  export class InvalidSize extends CustomError {
    constructor() {
      super(401, "password deve ter no minimo 5 caracteres");
    }
  }
  export class InvalidUser extends CustomError {
    constructor() {
      super(401, "Usuário não encontrado!");
    }
  }

  export class InvalidRecipe extends CustomError{
    constructor(){
        super(400,"Receita não encontrada!")
    }
}