import { model } from '@formily/reactive';
import type { MetadataItem, MetadataType } from '@/pages/device/Product/typings';

type MetadataModelType = {
  item: MetadataItem | unknown;
  edit: boolean;
  type: MetadataType;
  action: 'edit' | 'add';
};
const MetadataModel = model<MetadataModelType>({
  item: undefined,
  edit: false,
  type: 'events',
  action: 'add',
});
export default MetadataModel;
