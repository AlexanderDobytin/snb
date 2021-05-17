export interface SnackData {
  // по дефолту - дарк
  theme?: 'light' | 'dark' | 'yellow';
  // как долго провисит снэк
  delay?: number;
  // Заголовок текстового снэка
  title?: string;
  // Текст текстового снэка
  text?: string;
  // id кастомного темплейта для сожержимого снэка
  template?: string;
}

export interface Snack extends SnackData {
  id: string;
}
