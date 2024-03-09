'use server';

import { mongodbConnect, timeModel } from '@/database';
import { TagsEnum } from '@/shared';
import { revalidateTag } from 'next/cache';

export const updateMonthAction = async (_id: string, month: Record<string, number>, year: Record<string, number>) => {
  try {
    await mongodbConnect();
    const isUpdate = await setMonth(_id, month);
    const isUpdateYear = await setYear(_id, year);
    console.log("🚀 ~ updateMonthAction ~ isUpdateYear:", isUpdateYear)
    return isUpdate;
  } catch (error) {
    console.log('🚀 ~ updateMonthAction ~ error:', error);
    return false;
  }
};

const setMonth = async (_id: string, month: Record<string, number>) => {
  const update = await timeModel.updateOne({ _id }, { $set: month });
  update.modifiedCount && revalidateTag(TagsEnum.register);
  return !!update.modifiedCount;
};

const setYear = async (_id: string, year: Record<string, number>) => {
  const updateYear = await timeModel.findOneAndUpdate({ _id }, { $set: year });
  return updateYear
};
