import { subDays, subHours, subMinutes, isAfter } from 'date-fns';
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { NPKModel } from '@/core/entity/NpkModel';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const filterDataByInterval = <T extends NPKModel>(
  data: T[],
  interval: '7days' | '24hours' | '60minutes'
): T[] => {
  const now = new Date();

  let cutoffDate;
  switch (interval) {
    case '7days':
      cutoffDate = subDays(now, 7);
      break;
    case '24hours':
      cutoffDate = subHours(now, 24);
      break;
    case '60minutes':
      cutoffDate = subMinutes(now, 60);
      break;
    default:
      return data;
  }

  return data.filter(entry => isAfter(new Date(entry.createdAt), cutoffDate));
};
