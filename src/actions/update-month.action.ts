'use server';

import { mongodbConnect, timeModel } from '@/database';
import { TagsEnum } from '@/shared';
import { revalidateTag } from 'next/cache';

export const updateMonthAction = async (_id: string, month: Record<string, number>) => {
  try {
    await mongodbConnect();
    const update = await timeModel.updateOne({ _id }, { $set: month });
    console.log("🚀 ~ updateMonthAction ~ { _id }, { $set: month }:", { _id }, { $set: month })
    update.modifiedCount && revalidateTag(TagsEnum.register);
    console.log("🚀 ~ updateMonthAction ~ update.modifiedCoun:", update.modifiedCount)
    return !!update.modifiedCount;
  } catch (error) {
    console.log("🚀 ~ updateMonthAction ~ error:", error)
    return false;
  }
    
};
