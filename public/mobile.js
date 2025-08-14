
import { Device } from '@capacitor/device';

const initializeDeviceUI = async () => {
  const info = await Device.getInfo();
  console.log('Platform:', info.platform);

  
  document.body.classList.remove('android', 'ios', 'web');

  switch (info.platform) {
    case 'android':
      document.body.classList.add('android');
      break;
    case 'ios':
      document.body.classList.add('ios');
      break;
    default:
      document.body.classList.add('web');
      break;
  }
};

initializeDeviceUI();

