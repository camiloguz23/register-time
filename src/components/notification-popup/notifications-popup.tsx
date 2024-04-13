import { UiNotifications } from '@/components';
import { toast } from 'sonner';

interface Props {
  message: string;
  isSuccess: boolean;
}

export const notificationsPopUp = ({ message, isSuccess }: Props) => {
  toast.success(<UiNotifications message={message} type={isSuccess ? 'success' : 'error'} />, {
    style: { backgroundColor: isSuccess ? 'hsla(120,50%,50%,1)' : 'hsla(0,50%,50%,1)' }
  });
};
