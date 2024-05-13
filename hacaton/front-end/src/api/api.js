
const BaseUrl = 'https://itis-projects.ivgpu.ru'

export async function loginApi({ login, password }) {
    const response = await fetch(
      `${BaseUrl}/api/user/item/`,
      {
        method: "POST",
        body: JSON.stringify({
          user_login: login,
          user_password: password,
        }),
        headers: {
          // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
          "content-type": "application/json",
        },
      }
    );
    if (response.status === 500) {
      throw new Error("Сервер не отвечает");
    }
    const user = await response.json();
    return user;
}

export async function UserInfo({}){
    
}