import { DELETE_POST } from '../actions/deletePost';
import { ADD_POST } from '../actions/addPost';

const initialState = {
  posts: [
    {
      id: 224423112018,
      title: 'Twitch | С чего начать',
      img:
        'https://m.media-amazon.com/images/G/01/DeveloperBlogs/AlexaBlogs/default/twitch_blog._CB476201729_.png',
      text:
        'Создание учетной записи Twitch позволяет вам взаимодействовать с владельцами каналов и сообществом посредством чата, отслеживать своих любимых стримеров и получать оповещения о начале прямых трансляций и, конечно же, вести трансляции для сообщества Twitch на своем собственном канале. Чтобы зарегистрировать учетную запись, перейдите по адресу https://www.twitch.tv и нажмите кнопку «Регистрация» в верхнем правом углу страницы.',
    },
    {
      id: 224723112018,
      title: 'LocalStorage на пальцах',
      img:
        'https://www.robinwieruch.de/img/posts/local-storage-react/banner_1024.jpg',
      text:
        'Чтобы понять, что такое localStorage, просто представьте, что где-то у вас в браузере встроен такой объект, которым мы можем пользоваться. При этом данный объект не очищает значения, которые мы туда запишем, если мы перезагрузим страницу или даже совсем закроем браузер. Если говорить языком JavaScript, то localStorage это свойство глобального объекта браузера (window). К нему можно обращаться как window.localStorage или просто localStorage.',
    },
  ],
};

export function postReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_POST:
      return { posts: action.payload };
    case ADD_POST:
      return { posts: action.payload };
    default:
      return state;
  }
}
