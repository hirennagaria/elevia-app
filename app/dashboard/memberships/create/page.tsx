import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Membership',
};
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Memberships', href: '/dashboard/memberships' },
          {
            label: 'Create Memberships',
            href: '/dashboard/memberships/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}