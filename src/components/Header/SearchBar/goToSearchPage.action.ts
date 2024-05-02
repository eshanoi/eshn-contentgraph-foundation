'use server';

import { redirect } from 'next/navigation';

export const goToSearchPage = (formData: FormData) => {
  const search = formData.get('search');
  redirect(`/search?search=${search}`);
};
