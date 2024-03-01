import { TagsEnum, TimeRegister } from '@/shared';

export const getUser = async (email: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/time?email=${email}`, { next: { tags: [TagsEnum.register] } });
    const data: TimeRegister = await response.json();
    return data;
  } catch (error) {
    return;
  }
};
