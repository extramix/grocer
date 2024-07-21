import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { useState } from 'react';

const formSchema = z.object({
  grocery_list: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      checked: z.boolean(),
    })
  ),
});

export const GroceryFormList = () => {
  const [groceryList, setGroceryList] = useState([
    { id: 1, name: 'Steak', checked: false },
    { id: 2, name: 'Potatoes', checked: false },
    { id: 3, name: 'Salad', checked: false },
  ]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      grocery_list: groceryList,
    },
  });

  const { control, watch } = form;
  const { fields } = useFieldArray({
    control,
    name: 'grocery_list',
  });
  const watchedGroceryList = watch('grocery_list');

  return (
    <Form {...form}>
      {fields.map((grocery, index) => (
        <FormItem key={grocery.id}>
          <FormField
            name={`grocery_list.${index}.checked`}
            control={control}
            render={({ field }) => (
              <>
                <Checkbox
                  id={`grocery_list.${index}.checked`}
                  onCheckedChange={(value) => {
                    field.onChange(value);
                  }}
                />
                <FormLabel
                  className={`ml-2 ${
                    watchedGroceryList[index]?.checked ? 'line-through' : ''
                  }`}
                  htmlFor={`grocery_list.${index}.checked`}
                >
                  {grocery.name}
                </FormLabel>
              </>
            )}
          />
        </FormItem>
      ))}
    </Form>
  );
};
