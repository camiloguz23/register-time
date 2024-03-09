'use server';

import { mongodbConnect, timeModel } from '@/database';
import { TagsEnum } from '@/shared';
import { revalidateTag } from 'next/cache';

export const updateMonthAction = async (_id: string, month: Record<string, number>) => {
  try {
    await mongodbConnect();
    const update = await timeModel.updateOne({ _id }, { $set: month });
    update.modifiedCount && revalidateTag(TagsEnum.register);
    return !!update.modifiedCount;
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

const setYear = async (_id: string,) => {
  const updateYear = await timeModel.findOneAndUpdate({ _id }, { $set: { 'tiempo.years.2025': 30 } });
}