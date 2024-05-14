
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

export async function UserInfo() {
  const url = `${BaseUrl}/api/user/item?full_info="yes"`;
  const response = await fetch(url, {
    method: 'GET', // Явно указываем метод GET
  });
  
  // Для дальнейшей работы вы можете добавить обработку ответа
  if (response.ok) { // Проверяем, что запрос выполнен успешно
    const data = await response.json(); // Преобразуем ответ в JSON
    return data; // Возвращаем данные
  } else {
    throw new Error('Ошибка при загрузке данных пользователя');
  }
}

export async function UserInfoId({ user_id }) {
  const url = `${BaseUrl}/api/profiles/item?user_id=${user_id}&full_info="yes"`;
  const response = await fetch(url, {
    method: 'GET', // Явно указываем метод GET
  });
  
  // Для дальнейшей работы вы можете добавить обработку ответа
  if (response.ok) { // Проверяем, что запрос выполнен успешно
    const data = await response.json(); // Преобразуем ответ в JSON
    return data; // Возвращаем данные
  } else {
    throw new Error('Ошибка при загрузке данных пользователя');
  }
}

export async function ProjectInfo({ id_project }) {
  const url = `${BaseUrl}/api/profiles/item?id_project=${id_project}`;
  const response = await fetch(url, {
    method: 'GET', 
  });

  if (response.ok) { 
    const data = await response.json(); // Преобразуем ответ в JSON
    return data; // Возвращаем данные
  } else {
    throw new Error('Ошибка при загрузке данных пользователя');
  }
}

export async function ProjectList({ type_project }) {
  const url = `${BaseUrl}/api/profiles/list?${type_project}`;
  const response = await fetch(url, {
    method: 'GET', 
  });

  if (response.ok) { 
    const data = await response.json(); // Преобразуем ответ в JSON
    return data; // Возвращаем данные
  } else {
    throw new Error('Ошибка при загрузке данных пользователя');
  }
}

export async function ProjectTypeList() {
  const url = `${BaseUrl}/api/profiles/typelist`;
  const response = await fetch(url, {
    method: 'GET', 
  });

  if (response.ok) { 
    const data = await response.json(); // Преобразуем ответ в JSON
    return data; // Возвращаем данные
  } else {
    throw new Error('Ошибка при загрузке данных пользователя');
  }
}
