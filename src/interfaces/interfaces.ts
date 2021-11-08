import { Priority } from './types';

export interface ToDoItem {
  id: number;
  priority: Priority;
  title: string;
  description: string;
}

export interface ModalData {
  title: string;
  description: string;
}