'use server';

import { mongodbConnect, timeModel } from '@/database';
import { TagsEnum } from '@/shared';
import { revalidateTag } from 'next/cache';

const setMonth = async (_id: string, month: Record<string, number>): Promise<boolean> => {
  const update = await timeModel.updateOne({ _id }, { $set: month });
  update.modifiedCount && revalidateTag(TagsEnum.register);
  return !!update.modifiedCount;
};

const setYear = async (_id: string, year: Record<string, number>): Promise<boolean> => {
  const updateYear = await timeModel.findOneAndUpdate({ _id }, { $set: year });
  return !!updateYear;
};

export const updateMonthAction = async (_id: string, month: Record<string, number>, year: Record<string, number>): Promise<boolean> => {
  try {
    await mongodbConnect();
    const isUpdate = await setMonth(_id, month);
    await setYear(_id, year);
    return isUpdate;
  } catch (error) {
    return false;
  }
};