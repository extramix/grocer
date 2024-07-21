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
          <Checkbox id='steak' onCheckedChange={(value) => setChecked(value)} />
          <label
            htmlFor='steak'
            className={`ml-2 ${checked ? 'line-through' : ''}`}
          >
            Steak
          </label>
        </CardContent>
      </Card>
    </main>
  );
}
