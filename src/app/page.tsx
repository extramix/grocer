//TODO: Remove this when extracting the component
'use client';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import { GroceryFormList } from './components/GroceryFormList';

export default function Home() {
  const [checked, setChecked] = useState<boolean | 'indeterminate'>(false);

  return (
    <main className='flex min-h-screen flex-col p-24'>
      <Card className='p-20'>
        <CardHeader>
          <CardTitle>Grocery</CardTitle>
          <CardDescription>
            Things you need for tonight&apos;s dinner
          </CardDescription>
        </CardHeader>
        <CardContent>
          <GroceryFormList />
        </CardContent>
      </Card>
    </main>
  );
}
