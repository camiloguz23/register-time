'use server';

import { mongodbConnect, timeModel } from '@/database';
import { TagsEnum } from '@/shared';
import { revalidateTag } from 'next/cache';

export const updateMonthAction = async (_id: string, month: Record<string, number>) => {
  try {
    await mongodbConnect();
    const update = await timeModel.updateOne({ _id }, { $set: month });
    update.modifiedCount && revalidateTag(TagsEnum.register);
    return update.modifiedCount;
  } catch (error) {
    return error;
  }
};
