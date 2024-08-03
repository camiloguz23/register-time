import { TagsEnum, TimeRegister } from '@/shared';

export const getUser = async (email: string): Promise<TimeRegister | undefined> => {
  try {
    const response = await fetch(`${process.env.HOST}/api/time?email=${email}`, { next: { tags: [TagsEnum.register] } });
    const data: TimeRegister = await response.json();
    return data;
  } catch (error) {
    return undefined;
  }
};
