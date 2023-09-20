interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'Operations Manager'],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing v2',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read information about cars',
    'Read company information',
    'Read user information',
    'View bookings',
  ],
  ownerAbilities: ['Manage payment', 'Manage insurance', 'Manage maintenance', 'Manage feedback'],
  getQuoteUrl: 'https://app.roq.ai/proposal/349bac57-0d91-4428-85c6-b6355fa5c97a',
};
